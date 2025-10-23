import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function PlanesPropio() {
    return (
        <div className='servicios'>
            <div className='row'>
                <div className='col-lg-4'>
                    <h1>
                        Planes HelioAndes
                    </h1>
                </div>
            </div>

            <CardGroup>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>Plan Básico</Card.Title>
                        <Card.Text>
                            Sistema solar diseñado para hogares con consumo moderado.
                            Incluye instalación certificada, monitoreo básico y soporte inicial.
                            Ideal para quienes buscan iniciarse en la energía solar con una inversión controlada.
                        </Card.Text>
                        <Button variant="success">Solicitar evaluación</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>Plan Optimizado</Card.Title>
                        <Card.Text>
                            La opción más equilibrada entre rendimiento y costo.
                            Incluye monitoreo avanzado, estructura reforzada y garantía extendida.
                            Perfecto para hogares o pymes que buscan maximizar su ahorro energético.
                        </Card.Text>
                        <Button variant="success">Solicitar evaluación</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>Plan Autónomo</Card.Title>
                        <Card.Text>
                            Solución completa con almacenamiento en baterías para independencia total.
                            Diseñado para zonas rurales, proyectos off-grid o usuarios que buscan autonomía energética.
                        </Card.Text>
                        <Button variant="success">Solicitar evaluación</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default PlanesPropio;
