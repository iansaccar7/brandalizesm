import { Container, Row, Col } from 'react-bootstrap'

function Hero() {
  return (
    <section id="inicio" className="hero-section py-5 mt-5">
      <Container>
        <Row className="align-items-center min-vh-75">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div data-aos="fade-right">
              <h5 className="text-secondary fw-bold mb-3">SOCIAL MEDIA</h5>
              <h1 className="display-4 fw-bold mb-4">
                Conecte-se. Crie. <span className="text-primary">Compartilhe.</span>
              </h1>
              <p className="lead mb-4">
                Brandalize é a plataforma onde suas ideias ganham vida e alcançam 
                o mundo. Compartilhe momentos especiais e conecte-se com pessoas 
                que compartilham seus interesses.
              </p>
            </div>
          </Col>
          <Col lg={6} className="position-relative">
            <div className="position-relative" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Pessoas conectadas" 
                className="img-fluid rounded-4 shadow-lg"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero