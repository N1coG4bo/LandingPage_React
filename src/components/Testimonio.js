import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image'


function TestimonioPropio() {
  return (
    <div className='row'>
        <div className='col-lg-4'>
        <h1>
            Testimonios
        </h1>

        </div>
        
        <CardGroup>
      <Card>
      <Image src="/usuario.png" roundedCircle width={120} height={120} className="mx-auto my-3" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
      <Image src="/usuario.png" roundedCircle width={120} height={120} className="mx-auto my-3" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
      <Image src="/usuario.png" roundedCircle width={120} height={120} className="mx-auto my-3" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
        
    </div>
    
  );
}

export default TestimonioPropio;