import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';

function TestimonioPropio() {
  return (
    <div className='row mt-5'>
      <div className='col-lg-4'>
        <h1>
          Testimonios
        </h1>
      </div>

      <CardGroup>
        <Card>
          <Image src="/usuario.png" roundedCircle width={120} height={120} className="mx-auto my-3" />
          <Card.Body>
            <Card.Title>María Fernández — Santiago</Card.Title>
            <Card.Text>
              “Instalé mi sistema solar con HelioAndes hace un año y mi cuenta de luz bajó casi un 60%.
              Todo el proceso fue rápido, profesional y me explicaron cada detalle del funcionamiento.”
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Image src="/usuario.png" roundedCircle width={120} height={120} className="mx-auto my-3" />
          <Card.Body>
            <Card.Title>Jorge Pino — Concepción</Card.Title>
            <Card.Text>
              “Excelente servicio técnico y atención post venta.  
              Monitoreo en línea muy práctico, puedo ver mi generación diaria desde el celular.”
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Image src="/usuario.png" roundedCircle width={120} height={120} className="mx-auto my-3" />
          <Card.Body>
            <Card.Title>Catalina Rojas — Valdivia</Card.Title>
            <Card.Text>
              “Optamos por un sistema híbrido con baterías y ha sido una gran decisión.
              Durante los cortes de energía seguimos funcionando sin problemas.  
              Recomendados 100%.”
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default TestimonioPropio;
