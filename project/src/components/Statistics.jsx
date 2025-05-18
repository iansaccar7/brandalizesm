import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function CountUp({ end, duration, suffix = '' }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime
    let animationFrame
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }
    
    animationFrame = requestAnimationFrame(step)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])
  
  return (
    <span>{count.toLocaleString()}{suffix}</span>
  )
}

function StatItem({ number, suffix, title, delay }) {
  return (
    <Col md={3} className="text-center mb-4 mb-md-0" data-aos="fade-up" data-aos-delay={delay}>
      <div className="stat-item px-3">
        <h2 className="display-4 fw-bold text-primary mb-2">
          <CountUp end={number} duration={2000} suffix={suffix} />
        </h2>
        <p className="text-muted mb-0">{title}</p>
      </div>
    </Col>
  )
}

function Statistics() {
  return (
    <section className="section py-5 bg-gradient" style={{background: 'linear-gradient(135deg, rgba(66, 103, 178, 0.1), rgba(225, 48, 108, 0.1))'}}>
      <Container>
        <div className="py-4">
          <Row className="justify-content-center">
            <StatItem 
              number={10} 
              suffix="M+" 
              title="Usuários Ativos" 
              delay={0}
            />
            <StatItem 
              number={50} 
              suffix="M+" 
              title="Publicações Diárias" 
              delay={100}
            />
            <StatItem 
              number={120} 
              suffix="+" 
              title="Países" 
              delay={200}
            />
            <StatItem 
              number={500} 
              suffix="K+" 
              title="Comunidades" 
              delay={300}
            />
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Statistics