import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';


function Calculadora() {

    const [potenciaDePanel, setPotenciaDePanel] = useState("");
    const [cantidadDePaneles, setCantidadDePaneles] = useState("");
    const [inversor, setInversor] = useState("");
    const [bateriaPrecio, setBateriaPrecio] = useState("");
    const [cantidadBaterias, setCantidadBaterias] = useState("");
    const [estructuraCableado, setEstructuraCableado] = useState("");
    const [instalacionBase, setInstalacionBase] = useState("");
    const [pesoEnvio, setPesoEnvio] = useState("");

    // nuevos selects / opciones que afectan cálculos
    const [tipoTecho, setTipoTecho] = useState(0.05); // recargo estructura sobre subtotal equipos
    const [region, setRegion] = useState(5000); // base envio
    const [complejidad, setComplejidad] = useState(0); // sobre instalacionBase
    const [subsidio, setSubsidio] = useState(0); // sobre subtotal equipos (negativo posible)
    const [metodoEnvio, setMetodoEnvio] = useState(1.0); // multiplicador costo envio
    const [garantia, setGarantia] = useState(0.02); // sobre subtotal equipos
    const [planPago, setPlanPago] = useState(0); // tasa mensual referencial
    const [nCuotasPlan, setNCuotasPlan] = useState(1); // número de cuotas asociado al plan
    const [tipoPie, setTipoPie] = useState('porcentaje'); // 'porcentaje' o 'monto'
    const [valorPie, setValorPie] = useState(10);


    console.log(potenciaDePanel);

    const reiniciar = () => {
        setPotenciaDePanel("");
        setCantidadDePaneles("");
        setInversor("");
        setBateriaPrecio("");
        setCantidadBaterias("");
        setEstructuraCableado("");
        setInstalacionBase("");
        setPesoEnvio("");

        setTipoTecho(0.05);
        setRegion(5000);
        setComplejidad(0);
        setSubsidio(0);
        setMetodoEnvio(1.0);
        setGarantia(0.02);
        setPlanPago(0);
        setTipoPie('porcentaje');
        setValorPie(10);
    }



    return (
        <div>
            <div className='row mt-3'>
                <div className='col-lg-6'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='form-group mt-3'>
                                <h4>Potencia de Panel (W)</h4>
                                <input id='potenciaDePanel' name='potenciaDePanel' placeholder='450' type='number' className='form-control' value={potenciaDePanel} onChange={(e) => setPotenciaDePanel(e.target.value === '' ? '' : parseInt(e.target.value))}></input>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Inversor (precio)</h4>
                                <input id='inversor' name='inversor' placeholder='650000' type='number' className='form-control' value={inversor} onChange={(e) => setInversor(e.target.value === '' ? '' : parseInt(e.target.value))}></input>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Cantidad baterías</h4>
                                <input id='cantidadBaterias' name='cantidadBaterias' placeholder='1' type='number' className='form-control' value={cantidadBaterias} onChange={(e) => setCantidadBaterias(e.target.value === '' ? '' : parseInt(e.target.value))}></input>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Instalación base</h4>
                                <input id='instalacionBase' name='instalacionBase' placeholder='350000' type='number' className='form-control' value={instalacionBase} onChange={(e) => setInstalacionBase(e.target.value === '' ? 0 : parseInt(e.target.value))}></input>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Tipo de techo</h4>
                                <select required className='form-select' value={tipoTecho} onChange={(e) => setTipoTecho(parseFloat(e.target.value))}>
                                    <option value={0.05}>Teja/Asfalto (+5%)</option>
                                    <option value={0.02}>Zinc/Planchas (+2%)</option>
                                    <option value={0.07}>Hormigón (+7%)</option>
                                </select>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Complejidad instalación</h4>
                                <select required className='form-select' value={complejidad} onChange={(e) => setComplejidad(parseFloat(e.target.value))}>
                                    <option value={0}>Baja (0%)</option>
                                    <option value={0.08}>Media (+8%)</option>
                                    <option value={0.15}>Alta (+15%)</option>
                                </select>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Método de envío</h4>
                                <select required className='form-select' value={metodoEnvio} onChange={(e) => setMetodoEnvio(parseFloat(e.target.value))}>
                                    <option value={1.0}>Estándar (x1.00)</option>
                                    <option value={1.2}>Exprés (x1.20)</option>
                                </select>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Plan de pago</h4>
                                <select required className='form-select' value={planPago + '|' + nCuotasPlan} onChange={(e) => {
                                    // value format: "tasa|nCuotas" e.g. "0.012|6"
                                    const [tasaStr, cuotasStr] = e.target.value.split('|');
                                    const tasa = parseFloat(tasaStr) || 0;
                                    const cuotas = parseInt(cuotasStr, 10) || 1;
                                    setPlanPago(tasa);
                                    setNCuotasPlan(cuotas);
                                }}>
                                    <option value={'0|1'}>Contado (0%, 1 cuota)</option>
                                    <option value={'0.012|6'}>6 cuotas (1.2% mensual)</option>
                                    <option value={'0.011|12'}>12 cuotas (1.1% mensual)</option>
                                    <option value={'0.01|24'}>24 cuotas (1.0% mensual)</option>
                                </select>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Valor de pie</h4>
                                <input id='valorPie' name='valorPie' placeholder='10' type='number' className='form-control' value={valorPie} onChange={(e) => setValorPie(e.target.value === '' ? '' : parseFloat(e.target.value))}></input>
                                <small className='text-muted'>Si es porcentaje, 10 = 10%.</small>
                            </div>
                            <div className='mt-3 d-flex gap-2'>
                                <button type='button' className='btn btn-outline-secondary' onClick={reiniciar}>Reiniciar</button>
                                <button type='button' className='btn btn-outline-primary'>Copiar resumen</button>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='form-group mt-3'>
                                <h4>Cantidad de Paneles</h4>
                                <input id='cantidadDePaneles' name='cantidadDePaneles' placeholder='8' type='number' className='form-control' value={cantidadDePaneles} onChange={(e) => setCantidadDePaneles(e.target.value === '' ? '' : parseInt(e.target.value))}></input>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Batería (precio unidad)</h4>
                                <input id='bateriaPrecio' name='bateriaPrecio' placeholder='320000' type='number' className='form-control' value={bateriaPrecio} onChange={(e) => setBateriaPrecio(e.target.value === '' ? '' : parseInt(e.target.value))}></input>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Estruct./Cableado</h4>
                                <input id='estructuraCableado' name='estructuraCableado' placeholder='180000' type='number' className='form-control' value={estructuraCableado} onChange={(e) => setEstructuraCableado(e.target.value === '' ? '' : parseInt(e.target.value))}></input>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Peso envío (kg)</h4>
                                <input id='pesoEnvio' name='pesoEnvio' placeholder='90' type='number' className='form-control' value={pesoEnvio} onChange={(e) => setPesoEnvio(e.target.value === '' ? '' : parseInt(e.target.value))}></input>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Región</h4>
                                <select required className='form-select' value={region} onChange={(e) => setRegion(parseFloat(e.target.value))}>
                                    <option value={5000}>RM ($5.000)</option>
                                    <option value={9000}>Norte ($9.000)</option>
                                    <option value={10000}>Sur ($10.000)</option>
                                    <option value={15000}>Austral ($15.000)</option>
                                </select>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Subsidio</h4>
                                <select required className='form-select' value={subsidio} onChange={(e) => setSubsidio(parseFloat(e.target.value))}>
                                    <option value={0}>Sin subsidio (0%)</option>
                                    <option value={0.08}>Residencial (−8%)</option>
                                    <option value={0.05}>Pyme (−5%)</option>
                                </select>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Garantía</h4>
                                <select required className='form-select' value={garantia} onChange={(e) => setGarantia(parseFloat(e.target.value))}>
                                    <option value={0.02}>12 meses (+2%)</option>
                                    <option value={0.04}>24 meses (+4%)</option>
                                    <option value={0.06}>36 meses (+6%)</option>
                                </select>
                            </div>
                            <div className='form-group mt-3'>
                                <h4>Tipo de pie</h4>
                                <select required className='form-select' value={tipoPie} onChange={(e) => setTipoPie(e.target.value)}>
                                    <option value={'porcentaje'}>Porcentaje</option>
                                    <option value={'monto'}>Monto fijo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6'>
                    {/* Resumen derecho con cálculos según reglas de negocio */}
                    {(() => {
                        const toNum = (v) => {
                            const n = parseFloat(v);
                            return Number.isFinite(n) ? n : 0;
                        }

                        const potencia = toNum(potenciaDePanel);
                        const cantPaneles = toNum(cantidadDePaneles);
                        const inversorN = toNum(inversor);
                        const bateriaPrecioN = toNum(bateriaPrecio);
                        const cantBaterias = toNum(cantidadBaterias);
                        const estructuraN = toNum(estructuraCableado);
                        const instalacionBaseN = toNum(instalacionBase);
                        const pesoEnvioN = toNum(pesoEnvio);

                        const potenciaEstimadaKW = (potencia * cantPaneles) / 1000;

                        // Subtotal equipos: if panel price unknown, do not include panels
                        const totalBaterias = bateriaPrecioN * cantBaterias;
                        const subtotalEquipos = inversorN + totalBaterias + estructuraN;

                        const recargoTecho = subtotalEquipos * toNum(tipoTecho);

                        const instalacionFinal = instalacionBaseN * (1 + toNum(complejidad));

                        // Subsidio is a positive percentage representing reduction -> amount is negative
                        const baseParaSubsidio = subtotalEquipos + recargoTecho;
                        const subsidioAmount = - baseParaSubsidio * toNum(subsidio);

                        const garantiaAmount = subtotalEquipos * toNum(garantia);

                        // IVA 19% sobre (equipos con recargos - subsidios + instalacion final)
                        const ivaBase = (baseParaSubsidio + subsidioAmount) + instalacionFinal;
                        const ivaAmount = ivaBase * 0.19;

                        const envioBase = toNum(region) + pesoEnvioN * 700;
                        const envioAmount = envioBase * toNum(metodoEnvio);

                        const totalAntesFinanciar = subtotalEquipos + recargoTecho + subsidioAmount + instalacionFinal + ivaAmount + envioAmount + garantiaAmount;

                        const piePctOrVal = toNum(valorPie);
                        let pieAmount = 0;
                        if (tipoPie === 'porcentaje') pieAmount = totalAntesFinanciar * (piePctOrVal / 100);
                        else pieAmount = piePctOrVal;
                        if (pieAmount > totalAntesFinanciar) pieAmount = totalAntesFinanciar;

                        const montoFinanciar = Math.max(0, totalAntesFinanciar - pieAmount);

                        let tasa = toNum(planPago);
                        // nCuotas can come from nCuotasPlan state or be encoded in planPago as "tasa|nCuotas"
                        let nCuotas = Math.max(1, parseInt(nCuotasPlan, 10) || 1);
                        if (typeof planPago === 'string' && planPago.includes('|')) {
                            const parts = planPago.split('|');
                            tasa = toNum(parts[0]);
                            const parsed = parseInt(parts[1], 10);
                            if (!Number.isNaN(parsed) && parsed > 0) nCuotas = parsed;
                        }

                        // interés simple total = montoFinanciar * tasaMensual * nCuotas
                        const interesTotal = montoFinanciar * tasa * nCuotas;
                        // cuota mensual (si nCuotas>1) = (montoFinanciar + interesTotal) / nCuotas
                        const cuota = nCuotas > 1 ? (montoFinanciar + interesTotal) / nCuotas : montoFinanciar;
                        const totalFinal = pieAmount + montoFinanciar + interesTotal;

                        const fmt = (n) => Number.isFinite(n) ? '$ ' + n.toLocaleString('es-CL', { maximumFractionDigits: 0 }) : '—';

                        return (
                            <div className='card p-3'>
                                <h5>Resumen</h5>
                                <Table striped bordered>
                                    <tbody>
                                        <tr>
                                            <td>Potencia estimada (kW)</td>
                                            <td>{potenciaEstimadaKW ? potenciaEstimadaKW.toFixed(2) : '—'}</td>
                                        </tr>
                                        <tr>
                                            <td>Subtotal equipos</td>
                                            <td>{fmt(subtotalEquipos)}</td>
                                        </tr>
                                        <tr>
                                            <td>Recargo techo</td>
                                            <td>{fmt(recargoTecho)}</td>
                                        </tr>
                                        <tr>
                                            <td>Subsidio</td>
                                            <td>{subsidioAmount < 0 ? '- ' + fmt(Math.abs(subsidioAmount)) : fmt(subsidioAmount)}</td>
                                        </tr>
                                        <tr>
                                            <td>Instalación final</td>
                                            <td>{fmt(instalacionFinal)}</td>
                                        </tr>
                                        <tr>
                                            <td>IVA 19%</td>
                                            <td>{fmt(ivaAmount)}</td>
                                        </tr>
                                        <tr>
                                            <td>Envío</td>
                                            <td>{fmt(envioAmount)}</td>
                                        </tr>
                                        <tr>
                                            <td>Garantía</td>
                                            <td>{fmt(garantiaAmount)}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total antes de financiar</strong></td>
                                            <td><strong>{fmt(totalAntesFinanciar)}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Pie</td>
                                            <td>{fmt(pieAmount)}</td>
                                        </tr>
                                        <tr>
                                            <td>Interés total</td>
                                            <td>{fmt(interesTotal)}</td>
                                        </tr>
                                        <tr>
                                            <td>Cuota {nCuotas > 1 ? `(${nCuotas})` : ''}</td>
                                            <td>{fmt(cuota)}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total final</strong></td>
                                            <td><strong>{fmt(totalFinal)}</strong></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                {potenciaEstimadaKW > 7 && cantBaterias === 0 && (
                                    <div className='alert alert-warning'>Recomendado considerar almacenamiento para estabilidad del sistema.</div>
                                )}
                            </div>
                        )
                    })()}
                </div>
            </div>

        </div>
    );

}

export default Calculadora;
