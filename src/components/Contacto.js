import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactoPropio() {
    return (
        <div className="container my-5" id="contacto">
            <h2 className="fw-bold mb-4">Contacto</h2>

            <div className="p-4 shadow-sm bg-grey rounded-4">
                <Form>
                    <div className="row bg-grey text-white text-center mb-3">
                        <div className="col-md-6">
                            <Form.Group controlId="contactoNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Tu nombre" 
                                    required 
                                />
                            </Form.Group>
                        </div>

                        <div className="col-md-6">
                            <Form.Group controlId="contactoEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="tucorreo@dominio.com" 
                                    required 
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <Form.Group className="mb-3" controlId="contactoMensaje">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={4} 
                            placeholder="Describe brevemente tu necesidad" 
                            required 
                        />
                    </Form.Group>

                    <div className="d-flex gap-3 mt-3">
                        <Button 
                            type="submit" 
                            className="px-4 py-2 fw-semibold text-white"
                            style={{ backgroundColor: '#009688', border: 'none' }}
                        >
                            Enviar
                        </Button>
                        <Button 
                            variant="light" 
                            type="reset" 
                            className="px-4 py-2 border fw-semibold"
                        >
                            Limpiar
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default ContactoPropio;
