import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactoPropio() {
  return (
    // ✅ id coincide con el Navbar: href="#contacto"
    <section id="contacto" className="container anchor mt-5 mb-5">
      <div className="row mb-4 text-center">
        <div className="col-12">
          <h1>Contacto</h1>
          <p className="text-muted">
            ¿Tienes dudas o necesitas una cotización personalizada? Escríbenos y te responderemos pronto.
          </p>
        </div>
      </div>

      <div className="p-4 shadow-sm bg-light rounded-4">
        <Form>
          {/* ✅ Campos en una sola fila responsive */}
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
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

          {/* ✅ Campo de mensaje */}
          <Form.Group className="mb-4" controlId="contactoMensaje">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Describe brevemente tu necesidad o proyecto"
              required
            />
          </Form.Group>

          {/* ✅ Botones alineados */}
          <div className="d-flex gap-3">
            <Button
              type="submit"
              className="px-4 py-2 fw-semibold text-white"
              style={{ backgroundColor: '#009688', border: 'none' }}
            >
              Enviar
            </Button>
            <Button
              variant="outline-secondary"
              type="reset"
              className="px-4 py-2 fw-semibold"
            >
              Limpiar
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default ContactoPropio;
