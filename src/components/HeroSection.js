import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(140deg, rgba(22,28,54,0.8), rgba(15,22,47,0.72));
  pointer-events: none;
`;

const Content = styled.div`
  position: relative;
  max-width: 940px;
  z-index: 1;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.4rem);
  color: var(--muted);
  margin: 1.2rem auto 2rem;
  max-width: 760px;
  line-height: 1.6;
`;

const Tagline = styled.div`
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  font-weight: 500;
  margin-top: 1.3rem;
  letter-spacing: 0.01em;
  color: var(--text);
`;

const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.88rem 1.5rem;
  border-radius: 999px;
  border: 1px solid transparent;
  background: linear-gradient(110deg, #6a72f7 0%, #1d8cf8 100%);
  color: #fff;
  font-weight: 600;
  margin-top: 1.8rem;
  box-shadow: 0 12px 30px rgba(7, 10, 34, 0.38);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 22px 45px rgba(7, 10, 34, 0.5); }
`;

const BackgroundBlob = styled.div`
  position: absolute;
  width: 640px;
  height: 640px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.6;
  z-index: 0;
  top: -20%;
  left: -25%;
  background: linear-gradient(120deg, #6a72f7, #1d8cf8, #a5f3fc);
  animation: blob 22s infinite;
  @keyframes blob {
    0%,100% { transform: translate(0,0) scale(1); }
    33% { transform: translate(35px, -45px) scale(1.05); }
    66% { transform: translate(-25px, 20px) scale(0.95); }
  }
`;

function HeroSection() {
  const phrase = "I build high-performing web experiences for ambitious products.";
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (idx >= phrase.length) { setDone(true); return; }
    const timeout = setTimeout(() => setIdx(idx + 1), 45);
    return () => clearTimeout(timeout);
  }, [idx, phrase.length]);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' } },
      modes: { repulse: { distance: 200, duration: 0.4 } },
    },
    particles: {
      color: { value: ['#6a72f7', '#1d8cf8', '#00d4ff'] },
      links: { color: '#6a72f7', distance: 150, enable: true, opacity: 0.5, width: 1 },
      move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 1, straight: false },
      number: { density: { enable: true }, value: 30 },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <Section id="hero">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      <HeroOverlay />
      <BackgroundBlob aria-hidden="true" />
      <Content>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p style={{ margin: 0, color: '#6c78f8', textTransform: 'uppercase', fontWeight: 700 }}>Full-stack developer + ML Engineer + SEO specialist</p>
          <Title>Hi, I'm Het. I provide premium digital sevices.</Title>
          <Subtitle>
            Ultra-smooth, crisp interfaces with performant engineering. I help scale ideas into sophisticated user experiences that convert.
          </Subtitle>
          <Tagline>{phrase.slice(0, idx)}{!done && <span style={{ opacity: 0.8 }}>|</span>}</Tagline>
          <CTA href="#projects">Explore My Work</CTA>
        </motion.div>
      </Content>
    </Section>
  );
}

export default HeroSection;
