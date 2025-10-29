import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function SolucionesPropias() {
    return (
        <div className='servicios'>
            <div className='row mt-5'>
                <div className='col-lg-4'>
                    <h1>
                        Soluciones
                    </h1>
                </div>
            </div>

            <div className='row mb-5'>
                <div className='col-lg-12'>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="/casa.jpg" />
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

                        <Card>
                            <Card.Img variant="top" src="/pymes.jpg" />
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

                        <Card>
                            <Card.Img variant="top" src="/rural.jpg" />
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
                    </CardGroup>
                </div>
            </div>
        </div>
    );
}

export default SolucionesPropias;
