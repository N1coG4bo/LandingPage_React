import Accordion from 'react-bootstrap/Accordion';

function FaqPropio() {
  return (
    // ✅ id coincide con el Navbar (#faq)
    <section id="faq" className="container anchor mt-5 mb-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1>Preguntas Frecuentes (FAQ)</h1>
          <p className="text-muted">
            Encuentra respuestas rápidas sobre instalación, mantenimiento y beneficios de nuestros sistemas solares.
          </p>
        </div>
      </div>

      {/* ✅ Componente Accordion de React-Bootstrap */}
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Qué incluye la instalación de un sistema solar HelioAndes?</Accordion.Header>
          <Accordion.Body>
            Nuestros sistemas incluyen el estudio técnico, instalación completa con equipos certificados SEC,
            estructura de montaje, cableado, inversor, puesta en marcha y capacitación básica sobre el uso y monitoreo.
            Además, ofrecemos garantía y soporte postventa.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Cuánto dura la instalación y activación?</Accordion.Header>
          <Accordion.Body>
            En promedio, una instalación residencial toma entre 2 y 4 días hábiles.
            En proyectos Pyme o de mayor potencia, el plazo varía según la complejidad del sitio.
            Tras finalizar, realizamos pruebas y entregamos la documentación necesaria para la certificación SEC.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Qué mantenimiento requiere el sistema?</Accordion.Header>
          <Accordion.Body>
            Los sistemas solares requieren muy poco mantenimiento. Se recomienda limpiar los paneles cada 4–6 meses
            y realizar una revisión técnica anual. HelioAndes ofrece planes de mantención preventiva y monitoreo remoto
            para detectar cualquier anomalía.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>¿Qué pasa si se corta la luz?</Accordion.Header>
          <Accordion.Body>
            Si tu sistema es <strong>on-grid</strong> (conectado a la red), se detiene temporalmente por seguridad.
            En cambio, los sistemas <strong>off-grid o híbridos</strong> con baterías continúan entregando energía,
            brindando autonomía durante cortes de suministro.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>¿Puedo acceder a subsidios o beneficios?</Accordion.Header>
          <Accordion.Body>
            Sí. HelioAndes asesora en la postulación a subsidios <strong>Residenciales o Pyme</strong>,
            que pueden reducir el costo total de inversión entre un 5% y 8% dependiendo del programa y región.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default FaqPropio;
