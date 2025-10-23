import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Image from 'react-bootstrap/Image';


function Heropropio() {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className="d-flex justify-content-around">
                        <Card style={{ width: '30rem' , height: '20rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <Image src="/panel.jpg" fluid />;
                </div>

            </div>
        </div>
    );
}
export default Heropropio;

