import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function FooterPropio() {
    const year = new Date().getFullYear();

    return (
        <div className="row bg-dark text-white text-center py-4">
            <div className="col-lg-6 mb-3">
                <h5 className="mb-3">HelioAndes Energía</h5>
                <Stack direction="horizontal" gap={2} className="justify-content-center">
                    <Badge bg="success">Energía Solar</Badge>
                    <Badge bg="warning" text="dark">Instalaciones SEC</Badge>
                    <Badge bg="info" text="dark">Monitoreo</Badge>
                </Stack>
                <p className="mt-3 mb-0 small text-white-50">
                    Energía limpia y confiable para hogares y pymes en todo Chile.
                </p>
            </div>

            <div className="col-lg-5 offset-lg-1">
                <h6 className="mb-3">Enlaces útiles</h6>
                <Stack direction="horizontal" gap={2} className="justify-content-center flex-wrap">
                    <Badge bg="secondary">
                        <a href="#politicas" className="text-decoration-none text-white">Políticas de Privacidad</a>
                    </Badge>
                    <Badge bg="secondary">
                        <a href="#terminos" className="text-decoration-none text-white">Términos y Condiciones</a>
                    </Badge>
                    <Badge bg="secondary">
                        <a href="#contacto" className="text-decoration-none text-white">Contacto</a>
                    </Badge>
                </Stack>

                <p className="mt-4 mb-0 small text-white-50">
                    © {year} HelioAndes Energía — Todos los derechos reservados.
                </p>
            </div>
        </div>
    );
}

export default FooterPropio;
