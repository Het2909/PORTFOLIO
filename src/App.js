import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import GlobalStyle from './styles/globalStyles';
import AnimatedCursor from './components/AnimatedCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('portfolio-theme') || 'dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      <AnimatedCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: 'var(--bg)' }}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: [0.8, 1.08, 0.95, 1] }} transition={{ duration: 1.1, repeat: Infinity }} style={{ width: 90, height: 90, borderRadius: '50%', background: 'linear-gradient(135deg, #6a72f7, #1d8cf8)', boxShadow: '0 0 40px rgba(106,114,247,0.6)' }} />
          </motion.div>
        ) : (
          <motion.main key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }}>
            <Navbar theme={theme} setTheme={setTheme} />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
