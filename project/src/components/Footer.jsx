import { Container, Row, Col } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-between">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h4 className="mb-4">Brandalize Social Media</h4>
            <p>
              A plataforma de mídia social que conecta pessoas, ideias e
              oportunidades. Descubra um novo jeito de compartilhar sua vida e
              criar conexões significativas.
            </p>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/brandalizesm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3 fs-4"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/5511978796898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaWhatsapp />
              </a>
            </div>
          </Col>
          <Col lg={5}>
            <h5 className="mb-4">Contato</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex">
                <FaPhone className="me-2 mt-1" />
                <span>+55 (11) 97879-6898</span>
              </li>
              <li className="mb-3 d-flex">
                <FaEnvelope className="me-2 mt-1" />
                <span>contato@brandalize.com.br</span>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <div className="text-center text-white-50">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Brandalize Social Media. Todos os
            direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
