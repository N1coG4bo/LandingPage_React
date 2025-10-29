import Accordion from 'react-bootstrap/Accordion';

function FaqPropio() {
  return (
    <div className='Faq' id="Faq">
      <div className='row mt-5'>
        <div className='col-lg-4'>
          <h1>
            Preguntas Frecuentes (FAQ)
          </h1>
        </div>
      </div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Qué incluye la instalación de un sistema solar HelioAndes?</Accordion.Header>
          <Accordion.Body>
            Nuestros sistemas incluyen el estudio técnico, instalación completa con equipos certificados SEC,
            estructura de montaje, cableado, inversor, puesta en marcha y capacitación básica sobre el uso y monitoreo del sistema.
            Además, ofrecemos garantía y soporte postventa.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Cuánto dura la instalación y activación?</Accordion.Header>
          <Accordion.Body>
            En la mayoría de los casos, la instalación residencial promedio demora entre 2 y 4 días hábiles.
            En proyectos Pyme o sistemas de mayor potencia, el tiempo puede extenderse según la complejidad del sitio.
            Luego de la instalación, realizamos pruebas y entregamos la documentación para certificación SEC.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Qué mantenimiento requiere el sistema?</Accordion.Header>
          <Accordion.Body>
            Los sistemas solares requieren muy poco mantenimiento. Se recomienda una limpieza superficial de los paneles
            cada 4–6 meses y una revisión técnica anual para asegurar la máxima eficiencia.
            HelioAndes ofrece planes de mantención preventiva y monitoreo remoto para detectar cualquier anomalía.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>¿Qué pasa si se corta la luz?</Accordion.Header>
          <Accordion.Body>
            Si tu sistema es **on-grid** (conectado a la red), dejará de generar temporalmente por seguridad eléctrica.
            En cambio, los sistemas **off-grid o híbridos** con baterías continúan suministrando energía normalmente,
            brindándote autonomía durante cortes de suministro.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>¿Puedo acceder a subsidios o beneficios?</Accordion.Header>
          <Accordion.Body>
            Sí. HelioAndes te asesora en la postulación a subsidios **Residenciales o Pyme** según tu tipo de instalación.
            Estos beneficios pueden reducir el costo total de inversión entre un 5% y 8%, dependiendo del programa vigente y la región.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FaqPropio;
