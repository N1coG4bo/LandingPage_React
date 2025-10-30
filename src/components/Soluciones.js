import Card from 'react-bootstrap/Card';

function SolucionesPropias() {
  return (
    // ✅ id debe coincidir con el href del Navbar (#soluciones)
    <section id="soluciones" className="container anchor mt-5 mb-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1>Soluciones</h1>
          <p className="text-muted">
            Diseñadas para cada necesidad: desde hogares hasta proyectos empresariales o rurales.
          </p>
        </div>
      </div>

      {/* ✅ Grid responsive Bootstrap: 1 columna en móvil, 3 en escritorio */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src="/casa.jpg" alt="Solución Hogar 3–5 kW" />
            <Card.Body>
              <Card.Title>Hogar 3–5 kW</Card.Title>
              <Card.Text>
                Ideal para viviendas con consumo medio. Permite reducir hasta un 70% del gasto eléctrico mensual.
                Incluye instalación completa, monitoreo y garantía extendida. Solución eficiente y accesible para hogares sustentables.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Sistema residencial certificado</small>
            </Card.Footer>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src="/pymes.jpg" alt="Solución Pyme 10–20 kW" />
            <Card.Body>
              <Card.Title>Pyme 10–20 kW</Card.Title>
              <Card.Text>
                Diseñado para empresas que buscan eficiencia y ahorro a gran escala.
                Mejora la rentabilidad y proyecta tu compromiso ambiental.
                Ideal para comercios, talleres y oficinas con alta demanda energética.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Solución para pequeñas y medianas empresas</small>
            </Card.Footer>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src="/rural.jpg" alt="Solución Off-Grid con Baterías" />
            <Card.Body>
              <Card.Title>Off-Grid con Baterías</Card.Title>
              <Card.Text>
                Pensado para zonas sin conexión a la red o con cortes frecuentes.
                Incluye almacenamiento y gestión inteligente de energía para total independencia.
                Perfecto para entornos rurales o proyectos aislados.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Autonomía energética total</small>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default SolucionesPropias;
