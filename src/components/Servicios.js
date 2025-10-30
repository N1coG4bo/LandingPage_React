import Card from 'react-bootstrap/Card';

function ServiciosPropios() {
  return (
    // ✅ id coincide con el href del Navbar (#servicios)
    <section id="servicios" className="container anchor mt-5 mb-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1>Servicios</h1>
          <p className="text-muted">
            Soluciones integrales de energía solar diseñadas para hogares y pymes.
          </p>
        </div>
      </div>

      {/* ✅ Cards en cuadrícula responsive */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src="/servicio-estudio.jpg" alt="Estudio Energético" />
            <Card.Body>
              <Card.Title>Estudio Energético</Card.Title>
              <Card.Text>
                Analizamos tu consumo, ubicación y radiación solar para dimensionar el sistema fotovoltaico ideal.
                Nuestro diagnóstico técnico asegura el equilibrio perfecto entre potencia, costo y rendimiento.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Servicio certificado por HelioAndes Energía</small>
            </Card.Footer>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src="/servicio-instalacion.jpg" alt="Instalación SEC" />
            <Card.Body>
              <Card.Title>Instalación Certificada SEC</Card.Title>
              <Card.Text>
                Montaje profesional bajo normativa eléctrica chilena (SEC).
                Garantizamos seguridad, eficiencia y un acabado estético de alta calidad en cada proyecto.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Cumple norma SEC vigente</small>
            </Card.Footer>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src="/servicio-monitoreo.jpg" alt="Monitoreo y Control" />
            <Card.Body>
              <Card.Title>Monitoreo y Control</Card.Title>
              <Card.Text>
                Supervisa tu producción solar y consumo en tiempo real desde cualquier dispositivo.
                Accede a reportes automáticos y alertas de rendimiento para optimizar tu inversión energética.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Monitoreo remoto 24/7</small>
            </Card.Footer>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src="/servicio-mantencion.jpg" alt="Mantención y Soporte" />
            <Card.Body>
              <Card.Title>Mantención y Soporte</Card.Title>
              <Card.Text>
                Planes preventivos y correctivos para maximizar la vida útil de tu sistema solar.
                Nuestro equipo técnico realiza limpieza, revisión de conexiones y pruebas de rendimiento.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Soporte técnico nacional</small>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ServiciosPropios;
