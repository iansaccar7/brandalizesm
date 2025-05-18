import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaInstagram,
  FaChartLine,
  FaCameraRetro,
  FaBullhorn,
} from "react-icons/fa";

function FeatureCard({ icon, title, description, delay }) {
  return (
    <Col md={6} className="mb-4" data-aos="fade-up" data-aos-delay={delay}>
      <Card className="h-100 p-4 text-center">
        <div className="mb-4">
          <div
            className="mx-auto d-flex align-items-center justify-content-center"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "var(--primary)",
              color: "white",
              fontSize: "28px",
            }}
          >
            {icon}
          </div>
        </div>
        <Card.Body>
          <h4 className="mb-3">{title}</h4>
          <p className="text-muted">{description}</p>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Features() {
  const features = [
    {
      icon: <FaInstagram />,
      title: "Gestão de Redes Sociais",
      description:
        "Gerenciamento completo do seu Instagram com estratégias personalizadas para aumentar seu alcance e engajamento.",
    },
    {
      icon: <FaChartLine />,
      title: "Marketing Digital",
      description:
        "Desenvolvimento de estratégias de marketing digital para impulsionar sua presença online e converter seguidores em clientes.",
    },
    {
      icon: <FaCameraRetro />,
      title: "Produção de Conteúdo",
      description:
        "Criação de conteúdo profissional e atraente para suas redes sociais, incluindo fotos, vídeos e textos envolventes.",
    },
    {
      icon: <FaBullhorn />,
      title: "Tráfego Pago",
      description:
        "Gerenciamento de anúncios e campanhas pagas para maximizar seus resultados e alcançar seu público-alvo.",
    },
  ];

  return (
    <section id="recursos" className="section bg-light">
      <Container>
        <div className="section-heading" data-aos="fade-up">
          <h2>Nossos Serviços</h2>
          <p>Soluções completas para impulsionar sua presença digital</p>
        </div>

        <Row>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;
