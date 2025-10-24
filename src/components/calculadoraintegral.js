// CalculadoraIntegral.js
import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";

/**
 * Calculadora Integral HelioAndes (único archivo)
 * - Layout: 2 columnas (col-12 col-lg-6): Izquierda formulario, Derecha tabla de resultados
 * - Validaciones: no negativos, números seguros; placeholders claros
 * - Lógica completa con reglas de negocio solicitadas
 */

// ---- Utilidades ----

// Convierte string->number de forma segura ('' o NaN => 0)
const N = (v) => {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
};

// Formatea CLP sin decimales
const formatoCLP = (v) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(Math.round(v || 0));

export default function CalculadoraIntegral() {
  // --------- Estados de Inputs numéricos (como texto para permitir vacío) ---------
  const [panelW, setPanelW] = useState("");                 // Potencia panel (W)
  const [cantPaneles, setCantPaneles] = useState("");       // Cantidad paneles
  const [precioPanel, setPrecioPanel] = useState("");       // (Opcional) precio unitario panel

  const [inversor, setInversor] = useState("");             // Precio inversor
  const [bateriaPrecio, setBateriaPrecio] = useState("");   // Precio por batería
  const [cantidadBaterias, setCantidadBaterias] = useState(""); // Cantidad baterías
  const [estructuraCableado, setEstructuraCableado] = useState(""); // Estruct./Cableado
  const [instalacionBase, setInstalacionBase] = useState("");      // Instalación base
  const [pesoKg, setPesoKg] = useState("");                 // Peso envío (kg)

  // --------- Estados de Selects obligatorios ---------
  const [tipoTecho, setTipoTecho] = useState("teja");       // teja/zinc/hormigon
  const [region, setRegion] = useState("rm");               // rm/norte/sur/austral
  const [complejidad, setComplejidad] = useState("baja");   // baja/media/alta
  const [subsidio, setSubsidio] = useState("sin");          // sin/residencial/pyme
  const [metodoEnvio, setMetodoEnvio] = useState("estandar");// estandar/expres
  const [garantia, setGarantia] = useState("12");           // 12/24/36 (meses)

  // --------- Estados de Financiamiento ---------
  const [planPago, setPlanPago] = useState("contado");      // contado/6/12/24
  const [pieTipo, setPieTipo] = useState("porcentaje");     // porcentaje/monto
  const [pieValor, setPieValor] = useState("");             // valor pie (según tipo)

  // --------- Cálculos memorizados ---------
  const calc = useMemo(() => {
    // 1) Potencia estimada
    const pW = N(panelW);
    const nPaneles = N(cantPaneles);
    const potenciaKW = (pW * nPaneles) / 1000;

    // 2) Subtotal equipos
    const pPanelUnit = N(precioPanel);
    const sumaPaneles = pPanelUnit > 0 ? pPanelUnit * nPaneles : 0; // si no hay precio panel, se omite del subtotal
    const pInversor = N(inversor);
    const pBat = N(bateriaPrecio) * N(cantidadBaterias);
    const pEstruct = N(estructuraCableado);

    const subtotalEquipos = sumaPaneles + pInversor + pBat + pEstruct;

    // 3) Recargo por tipo de techo
    const recargosTecho = { teja: 0.05, zinc: 0.02, hormigon: 0.07 };
    const recargoTechoPct = recargosTecho[tipoTecho] ?? 0;
    const recargoTecho = subtotalEquipos * recargoTechoPct;
    const equiposConRecargo = subtotalEquipos + recargoTecho;

    // 4) Instalación final (base + % complejidad)
    const compPct = { baja: 0.0, media: 0.08, alta: 0.15 }[complejidad] ?? 0;
    const instBase = N(instalacionBase);
    const instalacionFinal = instBase + instBase * compPct;

    // 5) Subsidio (% negativo sobre equipos DESPUÉS del recargo de techo)
    const subPct = { sin: 0, residencial: 0.08, pyme: 0.05 }[subsidio] ?? 0;
    const subsidioMonto = equiposConRecargo * subPct;
    const equiposNetos = Math.max(equiposConRecargo - subsidioMonto, 0);

    // 6) IVA 19% sobre (Equipos netos + Instalación final)
    const iva = 0.19 * (equiposNetos + instalacionFinal);

    // 7) Envío = base región + peso * 700; exprés ×1.2
    const baseRegion = { rm: 5000, norte: 9000, sur: 10000, austral: 15000 }[region] ?? 0;
    const multiplicadorEnvio = metodoEnvio === "expres" ? 1.2 : 1.0;
    const envio = (baseRegion + N(pesoKg) * 700) * multiplicadorEnvio;

    // 8) Garantía sobre subtotal equipos (antes de subsidio)
    const garantiaPct = { "12": 0.02, "24": 0.04, "36": 0.06 }[garantia] ?? 0.02;
    const garantiaMonto = subtotalEquipos * garantiaPct;

    // 9) Total antes de financiar
    const totalAntes = equiposNetos + instalacionFinal + iva + envio + garantiaMonto;

    // 10) Financiamiento
    const plan = {
      contado: { n: 1, tasa: 0 },
      "6": { n: 6, tasa: 0.012 },
      "12": { n: 12, tasa: 0.011 },
      "24": { n: 24, tasa: 0.01 },
    }[planPago] || { n: 1, tasa: 0 };

    const pieRaw =
      pieTipo === "porcentaje" ? (totalAntes * Math.min(Math.max(N(pieValor), 0), 100)) / 100 : N(pieValor);
    const pie = Math.min(Math.max(pieRaw, 0), totalAntes); // clamp 0..totalAntes
    const montoFinanciar = Math.max(totalAntes - pie, 0);

    const interesTotal = montoFinanciar * plan.tasa * plan.n;
    const cuota = plan.n > 1 ? (montoFinanciar + interesTotal) / plan.n : 0;

    // Total final (si hay financiamiento con interés, se suma; si contado, es totalAntes)
    const totalFinal = totalAntes + interesTotal;

    // Advertencia: potencia>7kW y sin baterías
    const advertencias = [];
    if (potenciaKW > 7 && N(cantidadBaterias) === 0) {
      advertencias.push("Recomendado considerar almacenamiento para estabilidad del sistema.");
    }

    return {
      potenciaKW,
      subtotalEquipos,
      recargoTecho,
      equiposConRecargo,
      subsidioMonto,
      equiposNetos,
      instalacionFinal,
      iva,
      envio,
      garantiaMonto,
      totalAntes,
      plan,
      pie,
      montoFinanciar,
      interesTotal,
      cuota,
      totalFinal,
      advertencias,
    };
  }, [
    panelW,
    cantPaneles,
    precioPanel,
    inversor,
    bateriaPrecio,
    cantidadBaterias,
    estructuraCableado,
    instalacionBase,
    pesoKg,
    tipoTecho,
    region,
    complejidad,
    subsidio,
    metodoEnvio,
    garantia,
    planPago,
    pieTipo,
    pieValor,
  ]);

  // ---- Acciones ----
  const handleReset = () => {
    setPanelW("");
    setCantPaneles("");
    setPrecioPanel("");
    setInversor("");
    setBateriaPrecio("");
    setCantidadBaterias("");
    setEstructuraCableado("");
    setInstalacionBase("");
    setPesoKg("");
    setTipoTecho("teja");
    setRegion("rm");
    setComplejidad("baja");
    setSubsidio("sin");
    setMetodoEnvio("estandar");
    setGarantia("12");
    setPlanPago("contado");
    setPieTipo("porcentaje");
    setPieValor("");
  };

  const handleCopy = async () => {
    // Resumen plano para portapapeles
    const r = calc;
    const resumen = [
      "Resumen HelioAndes",
      `Potencia estimada: ${r.potenciaKW.toFixed(2)} kW`,
      `Subtotal equipos: ${formatoCLP(r.subtotalEquipos)}`,
      `Recargo techo: ${formatoCLP(r.recargoTecho)}`,
      `Equipos con recargo: ${formatoCLP(r.equiposConRecargo)}`,
      `Subsidio: -${formatoCLP(r.subsidioMonto)}`,
      `Equipos netos: ${formatoCLP(r.equiposNetos)}`,
      `Instalación final: ${formatoCLP(r.instalacionFinal)}`,
      `IVA (19%): ${formatoCLP(r.iva)}`,
      `Envío: ${formatoCLP(r.envio)}`,
      `Garantía: ${formatoCLP(r.garantiaMonto)}`,
      `Total antes de financiar: ${formatoCLP(r.totalAntes)}`,
      `Pie: ${formatoCLP(r.pie)}`,
      r.plan.n > 1 ? `Interés total: ${formatoCLP(r.interesTotal)}` : null,
      r.plan.n > 1 ? `Cuota (${r.plan.n}): ${formatoCLP(r.cuota)}` : null,
      `Total final: ${formatoCLP(r.totalFinal)}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await navigator.clipboard.writeText(resumen);
      alert("Resumen copiado al portapapeles.");
    } catch {
      alert("No se pudo copiar. Revisa permisos del navegador.");
    }
  };

  // ---- Render ----
  return (
    <div className="container my-4">
      <div className="row bg-dark text-white text-center py-4">
        {/* ----------- Columna Izquierda: Formulario ----------- */}
        <div className="col-12 col-lg-6">
          <h4 className="mb-3">Datos del sistema</h4>

          <div className="row">
            {/* Paneles */}
            <div className="col-12 col-md-6">
              <label className="form-label">Potencia de panel (W)</label>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="450"
                className="form-control"
                value={panelW}
                onChange={(e) => setPanelW(e.target.value.replace("-", ""))}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Cantidad de paneles</label>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="8"
                className="form-control"
                value={cantPaneles}
                onChange={(e) => setCantPaneles(e.target.value.replace("-", ""))}
              />
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Precio por panel (opcional)</label>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="0 = omitir"
                className="form-control"
                value={precioPanel}
                onChange={(e) => setPrecioPanel(e.target.value.replace("-", ""))}
              />
            </div>

            {/* Equipos y Montos */}
            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Inversor (precio)</label>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="650000"
                className="form-control"
                value={inversor}
                onChange={(e) => setInversor(e.target.value.replace("-", ""))}
              />
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Batería (precio unidad)</label>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="320000"
                className="form-control"
                value={bateriaPrecio}
                onChange={(e) => setBateriaPrecio(e.target.value.replace("-", ""))}
              />
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Cantidad baterías</label>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="1"
                className="form-control"
                value={cantidadBaterias}
                onChange={(e) => setCantidadBaterias(e.target.value.replace("-", ""))}
              />
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Estructuras y cableado</label>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="180000"
                className="form-control"
                value={estructuraCableado}
                onChange={(e) => setEstructuraCableado(e.target.value.replace("-", ""))}
              />
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Instalación base</label>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="350000"
                className="form-control"
                value={instalacionBase}
                onChange={(e) => setInstalacionBase(e.target.value.replace("-", ""))}
              />
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Peso estimado envío (kg)</label>
              <input
                type="number"
                min="0"
                step="0.1"
                placeholder="120"
                className="form-control"
                value={pesoKg}
                onChange={(e) => setPesoKg(e.target.value.replace("-", ""))}
              />
            </div>

            {/* Selects que afectan cálculo */}
            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Tipo de techo</label>
              <select
                className="form-select"
                value={tipoTecho}
                onChange={(e) => setTipoTecho(e.target.value)}
              >
                <option value="teja">Teja / Asfalto (+5%)</option>
                <option value="zinc">Zinc / Planchas (+2%)</option>
                <option value="hormigon">Hormigón (+7%)</option>
              </select>
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Región (envío)</label>
              <select className="form-select" value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="rm">RM (base $5.000)</option>
                <option value="norte">Norte (base $9.000)</option>
                <option value="sur">Sur (base $10.000)</option>
                <option value="austral">Austral (base $15.000)</option>
              </select>
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Complejidad instalación</label>
              <select
                className="form-select"
                value={complejidad}
                onChange={(e) => setComplejidad(e.target.value)}
              >
                <option value="baja">Baja (0%)</option>
                <option value="media">Media (+8%)</option>
                <option value="alta">Alta (+15%)</option>
              </select>
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Subsidio referencial</label>
              <select
                className="form-select"
                value={subsidio}
                onChange={(e) => setSubsidio(e.target.value)}
              >
                <option value="sin">Sin subsidio (0%)</option>
                <option value="residencial">Residencial (−8%)</option>
                <option value="pyme">Pyme (−5%)</option>
              </select>
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Método de envío</label>
              <select
                className="form-select"
                value={metodoEnvio}
                onChange={(e) => setMetodoEnvio(e.target.value)}
              >
                <option value="estandar">Estándar (×1.00)</option>
                <option value="expres">Exprés (×1.20)</option>
              </select>
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">Garantía extendida</label>
              <select
                className="form-select"
                value={garantia}
                onChange={(e) => setGarantia(e.target.value)}
              >
                <option value="12">12 meses (+2%)</option>
                <option value="24">24 meses (+4%)</option>
                <option value="36">36 meses (+6%)</option>
              </select>
            </div>

            {/* Financiamiento */}
            <div className="col-12 mt-4">
              <h5>Financiamiento</h5>
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Plan de pago</label>
              <select
                className="form-select"
                value={planPago}
                onChange={(e) => setPlanPago(e.target.value)}
              >
                <option value="contado">Contado (0%, 1 cuota)</option>
                <option value="6">6 cuotas (1.2% mensual)</option>
                <option value="12">12 cuotas (1.1% mensual)</option>
                <option value="24">24 cuotas (1.0% mensual)</option>
              </select>
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Tipo de pie</label>
              <select
                className="form-select"
                value={pieTipo}
                onChange={(e) => setPieTipo(e.target.value)}
              >
                <option value="porcentaje">Porcentaje (%)</option>
                <option value="monto">Monto fijo ($)</option>
              </select>
            </div>

            <div className="col-12 col-md-6 mt-3">
              <label className="form-label">
                {pieTipo === "porcentaje" ? "Pie (%)" : "Pie ($)"}
              </label>
              <input
                type="number"
                min="0"
                step={pieTipo === "porcentaje" ? "0.1" : "1"}
                placeholder={pieTipo === "porcentaje" ? "10" : "200000"}
                className="form-control"
                value={pieValor}
                onChange={(e) => setPieValor(e.target.value.replace("-", ""))}
              />
              {pieTipo === "porcentaje" && (
                <div className="form-text">Se limita automáticamente a 0–100% del total antes de financiar.</div>
              )}
            </div>

            {/* Acciones */}
            <div className="col-12 mt-4 d-flex gap-2">
              <button className="btn btn-outline-secondary" type="button" onClick={handleReset}>
                Reiniciar
              </button>
              <button className="btn btn-primary" type="button" onClick={handleCopy}>
                Copiar resumen
              </button>
            </div>

            {/* Info de referencia */}
            <div className="col-12 mt-3">
              <div className="alert alert-info py-2 mb-0">
                <strong>Potencia estimada: </strong>
                {isFinite(calc.potenciaKW) ? `${calc.potenciaKW.toFixed(2)} kW` : "0.00 kW"}
              </div>
              {calc.advertencias.map((a, i) => (
                <div key={i} className="alert alert-warning py-2 mt-2 mb-0">
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ----------- Columna Derecha: Tabla de resultados ----------- */}
        <div className="col-12 col-lg-6">
          <h4 className="mb-3">Desglose de costos</h4>
          <Table striped bordered hover responsive>
            <tbody>
              <tr>
                <th>Subtotal equipos</th>
                <td>{formatoCLP(calc.subtotalEquipos)}</td>
              </tr>
              <tr>
                <th>Recargo por techo</th>
                <td>{formatoCLP(calc.recargoTecho)}</td>
              </tr>
              <tr>
                <th>Equipos con recargo</th>
                <td>{formatoCLP(calc.equiposConRecargo)}</td>
              </tr>
              <tr>
                <th>Subsidio (descuento)</th>
                <td>-{formatoCLP(calc.subsidioMonto)}</td>
              </tr>
              <tr>
                <th>Equipos netos</th>
                <td>{formatoCLP(calc.equiposNetos)}</td>
              </tr>
              <tr>
                <th>Instalación final</th>
                <td>{formatoCLP(calc.instalacionFinal)}</td>
              </tr>
              <tr>
                <th>IVA (19%)</th>
                <td>{formatoCLP(calc.iva)}</td>
              </tr>
              <tr>
                <th>Envío</th>
                <td>{formatoCLP(calc.envio)}</td>
              </tr>
              <tr>
                <th>Garantía extendida</th>
                <td>{formatoCLP(calc.garantiaMonto)}</td>
              </tr>
              <tr className="table-secondary">
                <th>Total antes de financiar</th>
                <td>{formatoCLP(calc.totalAntes)}</td>
              </tr>
              <tr>
                <th>Pie</th>
                <td>{formatoCLP(calc.pie)}</td>
              </tr>
              {calc.plan.n > 1 && (
                <>
                  <tr>
                    <th>Interés total</th>
                    <td>{formatoCLP(calc.interesTotal)}</td>
                  </tr>
                  <tr>
                    <th>
                      Cuota ({calc.plan.n} {calc.plan.n === 1 ? "cuota" : "cuotas"})
                    </th>
                    <td>{formatoCLP(calc.cuota)}</td>
                  </tr>
                </>
              )}
              <tr className="table-success">
                <th>Total final</th>
                <td>{formatoCLP(calc.totalFinal)}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
