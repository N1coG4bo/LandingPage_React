import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function TestimonioPropio() {
  return (
    // ✅ Coincide con el Navbar: <Nav.Link href="#testimonios">Testimonio</Nav.Link>
    <section id="testimonios" className="container anchor mt-5 mb-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1>Testimonios</h1>
          <p className="text-muted">Lo que dicen nuestros clientes en distintas regiones de Chile.</p>
        </div>
      </div>

      {/* ✅ Grid responsive: 1 en móvil, 2 en md, 3 en lg */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <Card className="h-100 text-center shadow-sm">
            <Image
              src="/usuario.png"
              alt="Foto de perfil de María Fernández"
              roundedCircle
              width={120}
              height={120}
              className="mx-auto mt-4"
            />
            <Card.Body>
              <Card.Title>María Fernández — Santiago</Card.Title>
              <Card.Text>
                “Instalé mi sistema solar con HelioAndes hace un año y mi cuenta de luz bajó casi un 60%.
                Todo el proceso fue rápido, profesional y me explicaron cada detalle del funcionamiento.”
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100 text-center shadow-sm">
            <Image
              src="/usuario.png"
              alt="Foto de perfil de Jorge Pino"
              roundedCircle
              width={120}
              height={120}
              className="mx-auto mt-4"
            />
            <Card.Body>
              <Card.Title>Jorge Pino — Concepción</Card.Title>
              <Card.Text>
                “Excelente servicio técnico y atención post venta.
                Monitoreo en línea muy práctico, puedo ver mi generación diaria desde el celular.”
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100 text-center shadow-sm">
            <Image
              src="/usuario.png"
              alt="Foto de perfil de Catalina Rojas"
              roundedCircle
              width={120}
              height={120}
              className="mx-auto mt-4"
            />
            <Card.Body>
              <Card.Title>Catalina Rojas — Valdivia</Card.Title>
              <Card.Text>
                “Optamos por un sistema híbrido con baterías y ha sido una gran decisión.
                Durante los cortes de energía seguimos funcionando sin problemas. Recomendados 100%.”
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default TestimonioPropio;
