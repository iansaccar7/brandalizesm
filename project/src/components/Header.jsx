import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import perfil from "../assets/perfil.jpg";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrolled ? "scrolled" : ""}
      bg={scrolled ? "white" : "white"}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={perfil}
            alt="Dayane Brandalize"
            className="rounded-circle me-2"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              border: "2px solid var(--primary)",
            }}
            onClick={scrollToTop}
          />
          <span className="fw-bold text-primary" onClick={scrollToTop}>
            Brandalize Social Media
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio" className="mx-2">
              Início
            </Nav.Link>
            <Nav.Link href="#recursos" className="mx-2">
              Recursos
            </Nav.Link>
            <Nav.Link href="#contato" className="mx-2">
              Contato
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/brandalizesm/"
              target="_blank"
              className="mx-2 d-flex align-items-center"
            >
              <FaInstagram className="me-1" /> Instagram
            </Nav.Link>
            <Nav.Link
              href="https://wa.me/5511978796898"
              target="_blank"
              className="mx-2 d-flex align-items-center"
            >
              <FaWhatsapp className="me-1" /> WhatsApp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
