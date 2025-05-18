import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

function TestimonialCard({ name, role, image, testimonial, rating, delay }) {
  return (
    <Col md={6} lg={4} className="mb-4" data-aos="fade-up" data-aos-delay={delay}>
      <Card className="h-100 p-4 position-relative">
        <div className="position-absolute text-primary opacity-25" style={{ top: '20px', left: '20px', fontSize: '32px' }}>
          <FaQuoteLeft />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <img 
              src={image} 
              alt={name} 
              className="rounded-circle me-3"
              width="60"
              height="60"
              style={{ objectFit: 'cover' }}
            />
            <div>
              <h5 className="mb-0">{name}</h5>
              <p className="text-muted mb-0">{role}</p>
            </div>
          </div>
          <div>
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < rating ? "text-warning" : "text-muted"}
              />
            ))}
          </div>
        </div>
        <Card.Body className="px-0 pb-0">
          <p className="mb-0">{testimonial}</p>
        </Card.Body>
      </Card>
    </Col>
  )
}

function Testimonials() {
  const testimonials = [
    {
      name: "Marina Silva",
      role: "Influenciadora Digital",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      testimonial: "Brandalize revolucionou minha presença online. A facilidade de compartilhar conteúdo e interagir com meus seguidores é incomparável. Meu engajamento aumentou 200% em apenas dois meses!",
      rating: 5
    },
    {
      name: "Ricardo Oliveira",
      role: "Empresário",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      testimonial: "Como dono de uma pequena empresa, encontrei no Brandalize a plataforma perfeita para conectar com meus clientes. Os recursos de análise me ajudam a entender melhor meu público.",
      rating: 4
    },
    {
      name: "Ana Beatriz",
      role: "Fotógrafa",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      testimonial: "A qualidade de imagem e os filtros disponíveis são simplesmente incríveis. Como fotógrafa, valorizo muito uma plataforma que preserva a integridade das minhas fotos.",
      rating: 5
    }
  ]

  return (
    <section id="depoimentos" className="section bg-light">
      <Container>
        <div className="section-heading" data-aos="fade-up">
          <h2>O Que Dizem Nossos Usuários</h2>
          <p>Experiências reais de pessoas que transformaram sua presença digital com o Brandalize</p>
        </div>
        
        <Row>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              delay={index * 100}
            />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials