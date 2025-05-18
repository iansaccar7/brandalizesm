import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaEye, FaHeart, FaUserPlus, FaChartLine } from 'react-icons/fa'

function EngagementMetric({ title, value, percentage, color, delay }) {
  return (
    <Col md={6} lg={3} className="mb-4" data-aos="fade-up" data-aos-delay={delay}>
      <Card className="text-center h-100 py-4">
        <div className="engagement-circle mx-auto mb-3" style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: `4px solid ${color}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <h3 className="mb-0 fw-bold">{value}</h3>
          <small className="text-muted">{percentage}%</small>
        </div>
        <h5>{title}</h5>
      </Card>
    </Col>
  )
}

function MetricCard({ icon, value, label, delay }) {
  return (
    <Col md={6} className="mb-3" data-aos="fade-up" data-aos-delay={delay}>
      <Card className="border-0 bg-light">
        <Card.Body className="d-flex align-items-center">
          <div className="me-3 text-primary">
            {icon}
          </div>
          <div>
            <h6 className="mb-1">{label}</h6>
            <h4 className="mb-0 fw-bold">{value}</h4>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

function Results() {
  const engagementMetrics = [
    {
      title: "Visualizações",
      value: "19.6K",
      percentage: "60.2",
      color: "#FF69B4"
    },
    {
      title: "Alcance",
      value: "12.6K",
      percentage: "39.8",
      color: "#4B0082"
    },
    {
      title: "Interações",
      value: "760",
      percentage: "35.4",
      color: "#FF1493"
    },
    {
      title: "Crescimento",
      value: "291.2",
      percentage: "64.6",
      color: "#9400D3"
    }
  ]

  const additionalMetrics = [
    {
      icon: <FaEye size={24} />,
      value: "33.2K",
      label: "Impressões totais"
    },
    {
      icon: <FaHeart size={24} />,
      value: "12.3K",
      label: "Engajamento"
    },
    {
      icon: <FaUserPlus size={24} />,
      value: "83",
      label: "Novos seguidores"
    },
    {
      icon: <FaChartLine size={24} />,
      value: "57",
      label: "Conteúdos compartilhados"
    }
  ]

  return (
    <section className="section">
      <Container>
        <div className="section-heading" data-aos="fade-up">
          <h2>Resultados de Engajamento</h2>
          <p>Números que comprovam a efetividade de nossas estratégias</p>
        </div>

        <Row className="mb-5">
          {engagementMetrics.map((metric, index) => (
            <EngagementMetric
              key={index}
              title={metric.title}
              value={metric.value}
              percentage={metric.percentage}
              color={metric.color}
              delay={index * 100}
            />
          ))}
        </Row>

        <Row>
          {additionalMetrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              delay={index * 100}
            />
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={8} className="mx-auto">
            <div className="testimonials-wrapper" data-aos="fade-up">
              <h3 className="text-center mb-4">O que dizem sobre meus serviços</h3>
              <div className="testimonial-messages">
                <div className="message-bubble bg-white p-3 rounded-4 shadow-sm mb-3">
                  <p className="mb-1">"Obrigada Day!!! Estou adorando o resultado"</p>
                  <p className="mb-0 text-primary">Ótima profissional ❤️❤️</p>
                </div>
                <div className="message-bubble bg-white p-3 rounded-4 shadow-sm mb-3">
                  <p className="mb-0">"Ameiiiii, essa nova identidade visual 😍😍"</p>
                </div>
                <div className="message-bubble bg-white p-3 rounded-4 shadow-sm">
                  <p className="mb-1">"Super te recomendo! Desde que te contratei meus resultados estão subindo a cada dia!"</p>
                  <p className="mb-0 text-primary">👏❤️</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Results