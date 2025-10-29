
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Heropropio() {
    return (
        <div className='Hero 'id="Hero">
            <div className='row mt-5 mb-5'>
                <div className='col-lg-6 '>
                    <div className="d-flex justify-content-start">
                        <Card style={{ width: '30rem', height: '20rem' }}>
                            <Card.Body>
                                <Card.Title>
                                    Energía solar accesible y confiable
                                </Card.Title>
                                <Card.Text>
                                    Reduce tu cuenta de luz y gana independencia con soluciones
                                    fotovoltaicas diseñadas para hogares y pymes chilenas.
                                    Con HelioAndes Energía, transformas el sol en ahorro real.
                                </Card.Text>
                                <div className="d-flex gap-2">
                                    <Button variant="success" href="#demo-calculadora">
                                        Ver DEMO
                                    </Button>
                                    <Button variant="outline-primary" href="/catalogo-helioandes.pdf">
                                        Descargar Catálogo
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <Image src="/panel.jpg" fluid />
                </div>
            </div>
        </div>
    );
}

export default Heropropio;
