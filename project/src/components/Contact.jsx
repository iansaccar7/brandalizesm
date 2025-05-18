import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { nome, email, assunto, mensagem };

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
      } else {
        setStatus("Erro ao enviar a mensagem.");
      }
    } catch (error) {
      setStatus("Erro ao enviar a mensagem.");
    }
  };

  return (
    <section id="contato" className="contact-form">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="display-5 fw-bold">Entre em Contato</h2>
              <p className="lead">
                Estamos aqui para ajudar você a começar sua jornada social
              </p>
            </div>

            <Form
              data-aos="fade-up"
              data-aos-delay="100"
              onSubmit={handleSubmit}
            >
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Seu nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Assunto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Assunto da mensagem"
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Digite sua mensagem aqui..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button className="btn-contact" type="submit">
                  Enviar Mensagem
                </Button>
              </div>
            </Form>

            {status && <div className="mt-3 text-center">{status}</div>}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
