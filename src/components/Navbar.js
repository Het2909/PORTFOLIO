import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1000;
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(12px);
  background: rgba(11, 15, 31, 0.5);
  box-shadow: 0 10px 40px rgba(3, 6, 20, 0.32);

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
`;

const LinkAnchor = styled.a`
  color: var(--text);
  font-weight: 500;
  letter-spacing: 0.02em;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6a72f7, #1d8cf8);
    transition: width 0.25s ease;
  }
  &:hover:after { width: 100%; }
`;

const Button = styled.button`
  border: 0;
  color: var(--text);
  background: rgba(255, 255, 255, 0.08);
  padding: 0.55rem 0.8rem;
  border-radius: 999px;
  cursor: pointer;
  margin-left: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: transform 0.2s ease, background 0.2s ease;
  &:hover { transform: translateY(-1px); background: rgba(255,255,255,0.16); }
`;

function Navbar({ theme, setTheme }) {
  const [show, setShow] = useState(true);
  const [top, setTop] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setShow(current < top || current < 68);
      setTop(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [top]);

  return (
    <Nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: show ? 0 : -90, opacity: show ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
    >
      <LinkAnchor href="#hero" aria-label="Home">MxDev</LinkAnchor>
      <LinkGroup>
        <LinkAnchor href="#about">About</LinkAnchor>
        <LinkAnchor href="#skills">Skills</LinkAnchor>
        <LinkAnchor href="#projects">Projects</LinkAnchor>
        {/* <LinkAnchor href="#experience">Experience</LinkAnchor> */}
        <LinkAnchor href="#contact">Contact</LinkAnchor>
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />} {theme === 'dark' ? 'Light' : 'Dark'}
        </Button>
      </LinkGroup>
    </Nav>
  );
}

export default Navbar;
