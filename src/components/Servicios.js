import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ServiciosPropios() {
    return (
        <div className=''>
            <div className='row'>
                {/* Usamos col-12 en mobile y col-lg-3 en desktop para alinear
                    el título con la primera columna de tarjetas (col-lg-3). */}
                <div className=' col-lg-3 mb-3'>
                    <h1>
                        Servicios
                    </h1>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 mb-4">
                    <Card>
                        <Card.Img variant="top" src="/servicio-estudio.jpg" />
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

                <div className="col-lg-3 mb-4">
                    <Card>
                        <Card.Img variant="top" src="/servicio-instalacion.jpg" />
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

                <div className="col-lg-3 mb-4">
                    <Card>
                        <Card.Img variant="top" src="/servicio-monitoreo.jpg" />
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

                <div className="col-lg-3 mb-4">
                    <Card>
                        <Card.Img variant="top" src="/servicio-mantencion.jpg" />
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
        </div>
    );
}

export default ServiciosPropios;
