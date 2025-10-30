import React from 'react';
import { jsPDF } from 'jspdf';              // 👈 librería para generar PDF
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Heropropio() {

  // 👇 Genera un PDF completamente vacío (sin texto) y lo descarga
  const generarPDFVacio = () => {
    const doc = new jsPDF({ unit: 'pt', format: 'a4' }); // crea 1 página en blanco
    doc.save('archivo-vacio.pdf');                       // descarga
  };

  return (
    // 👇 id DEBE coincidir con el href del navbar "Inicio"
    <section className="Hero container anchor" id="home">
      <div className='row mt-5 mb-5'>
        <div className='col-lg-6'>
          <div className="d-flex justify-content-start">
            <Card style={{ width: '30rem', height: '20rem' }}>
              <Card.Body>
                <Card.Title>Energía solar accesible y confiable</Card.Title>
                <Card.Text>
                  Reduce tu cuenta de luz y gana independencia con soluciones
                  fotovoltaicas diseñadas para hogares y pymes chilenas.
                  Con HelioAndes Energía, transformas el sol en ahorro real.
                </Card.Text>
                <div className="d-flex gap-2">
                  <Button variant="success" href="#demo-calculadora">
                    Ver DEMO
                  </Button>
                  {/* 👇 Nuevo botón: genera un PDF vacío */}
                  <Button variant="secondary" onClick={generarPDFVacio}>
                    catalogo
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
    </section>
  );
}

export default Heropropio;
