import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 7rem 2rem 5rem;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.05rem;
  margin-bottom: 1.5rem;
  letter-spacing: 0.015em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 2rem;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const Card = styled(motion.div)`
  background: var(--surface);
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: var(--shadow);
  backdrop-filter: blur(14px);
`;

const Feature = styled.p`
  color: var(--muted);
  line-height: 1.6;
`;

function AboutSection () {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;
    gsap.from(container.current.querySelectorAll('.item'), {
      y: 40,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      },
    });
  }, []);

  return (
    <Section id="about" ref={container}>
      <Title>About Me</Title>
      <Grid>
        <Card className="item">
          <h3>Crafting UI with intention</h3>
          <Feature>
            I specialize in polished experiences combining React architecture and potent animation. Habitually turn complex requirements into elegant flows through component abstraction and performance-first rendering.
          </Feature>
        </Card>

        <Card className="item">
          <h3>Production-ready full stack</h3>
          <Feature>
            Strong expertise in building scalable, end-to-end web applications using modern technologies like React, javascript, and databases. Focused on clean architecture, efficient API design, secure authentication, and seamless deployment workflows—ensuring fast, reliable, and maintainable products from development to production.
          </Feature>
        </Card>

        <Card className="item">
          <h3>Machine Learning Systems & Model Engineering</h3>
          <Feature>
            Strong analytical and problem-solving skills with a deep understanding of data patterns, feature engineering, and model optimization. Build scalable and reusable ML pipelines using modular architectures, efficient data workflows, and production-ready deployment practices.
          </Feature>
        </Card>

        <Card className="item">
          <h3>Search-Centric Performance & Optimization</h3>
          <Feature>
            Data-driven SEO strategies focused on maximizing visibility, organic traffic, and user intent alignment. Achieve high search performance through technical SEO, on-page optimization, keyword strategy, site speed improvements, and structured data—ensuring websites rank higher while delivering seamless user experiences.
          </Feature>
        </Card>
      </Grid>
    </Section>
  );
}

export default AboutSection;
