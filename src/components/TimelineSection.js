import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 7rem 2rem 5rem;
  border-top: 1px solid var(--border);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.98rem;
`;

const Wrapper = styled.div`
  max-width: 860px;
  margin: 2.2rem auto 0;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #6a72f7, #1d8cf8);
  }
`;

const Item = styled(motion.article)`
  position: relative;
  margin: 1rem 0 1.8rem 48px;
  padding: 0.8rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  box-shadow: var(--shadow);
`;

const Dot = styled.span`
  position: absolute;
  left: -35px;
  top: 18px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(120deg, #6a72f7, #1d8cf8);
  box-shadow: 0 0 12px rgba(57, 106, 247, 0.8);
`;

const events = [
  { year: '2025', role: 'Senior Product Engineer', company: 'Next-Level SaaS', description: 'Led design system rollout, increased page-speed by 45%, and owned full-stack dashboard features.' },
  { year: '2023', role: 'Full-stack Consultant', company: 'Velocity Labs', description: 'Shipped 10+ enterprise applications with strong API security and low-latency realtime updates.' },
  { year: '2021', role: 'Frontend Lead', company: 'Aurora Innovations', description: 'Architected component library for high-conversion marketing platforms.' },
];

function TimelineSection() {
  return (
    <Section id="experience">
      <Title>Experience</Title>
      <Wrapper>
        {events.map((evt, index) => (
          <Item key={evt.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: index * 0.14 }}>
            <Dot />
            <h3>{evt.role}</h3>
            <p style={{ margin: '0.1rem 0 0.45rem', fontWeight: 600 }}>{evt.company} • {evt.year}</p>
            <p className="muted">{evt.description}</p>
          </Item>
        ))}
      </Wrapper>
    </Section>
  );
}

export default TimelineSection;
