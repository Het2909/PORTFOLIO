import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  { id: 1, title: 'SaaS Analytics', tagline: 'Real-time dashboards with multi-tenant pipeline', skills: ['React', 'D3.js', 'Node'], url: '#', github: '#', image: 'https://via.placeholder.com/640x400?text=SaaS+Analytics' },
  { id: 2, title: 'Design System Hub', tagline: 'Component library that ships with interactive docs', skills: ['Storybook', 'TypeScript', 'Vite'], url: '#', github: '#', image: 'https://via.placeholder.com/640x400?text=Design+System' },
  { id: 3, title: 'Fintech Portfolio', tagline: 'Secure trading platform with animated data feeds', skills: ['Next.js', 'Prisma', 'Stripe'], url: '#', github: '#', image: 'https://via.placeholder.com/640x400?text=Fintech+UI' },
];

const Section = styled.section`
  padding: 7rem 2rem 6rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 1.2rem;
  @media (max-width: 1024px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const Card = styled(motion.article)`
  position: relative;
  border-radius: 1.6rem;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  cursor: pointer;
  min-height: 210px;

  & img {
    width: 100%;
    height: 164px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }
  &:hover img { transform: scale(1.06); }
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const Label = styled.p`
  margin: 0.3rem 0 0.6rem;
  color: var(--muted);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  color: #c1d4ff;
  border: 1px solid rgba(255,255,255,0.15);
  padding: 0.22rem 0.5rem;
  border-radius: 999px;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(5, 8, 17, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
`;

const Modal = styled(motion.div)`
  width: min(90vw, 748px);
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 1.2rem;
  box-shadow: var(--shadow);
  padding: 1.6rem;
  position: relative;
  overflow: hidden;
`;

const Close = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border: 0;
  background: transparent;
  color: var(--text);
  font-size: 1rem;
  cursor: pointer;
`;

function ProjectsSection() {
  const [active, setActive] = useState(null);
  const activeProject = useMemo(() => projects.find((item) => item.id === active), [active]);

  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Grid>
        {projects.map((project) => (
          <Card key={project.id} whileHover={{ y: -8 }} onClick={() => setActive(project.id)}>
            <img src={project.image} alt={project.title} loading="lazy" />
            <CardBody>
              <h3>{project.title}</h3>
              <Label>{project.tagline}</Label>
              <Tags>{project.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}</Tags>
            </CardBody>
          </Card>
        ))}
      </Grid>

      <AnimatePresence>
        {activeProject && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <Modal
              initial={{ y: 50, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Close onClick={() => setActive(null)}>✕</Close>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.tagline}</p>
              <p className="muted" style={{ marginTop: '1rem', lineHeight: 1.6 }}>
                Deep dive with technical approach, stack, and architectural choices. This modal layout is ready to surface case studies with images, timeline and deployment details.
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
                <a href={activeProject.url} target="_blank" rel="noreferrer" className="cta" style={{ padding: '0.6rem 1rem' }}>
                  Live Demo <FiExternalLink style={{ marginLeft: 8 }} />
                </a>
                <a href={activeProject.github} target="_blank" rel="noreferrer" className="cta" style={{ padding: '0.6rem 1rem' }}>
                  GitHub <FiGithub style={{ marginLeft: 8 }} />
                </a>
              </div>
            </Modal>
          </Overlay>
        )}
      </AnimatePresence>
    </Section>
  );
}

export default ProjectsSection;
