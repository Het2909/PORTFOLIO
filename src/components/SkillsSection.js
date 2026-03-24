import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 7rem 2rem 5rem;
  background: rgba(255,255,255,0.02);
  border-top: 1px solid var(--border);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 1.35rem;
  margin-top: 2.2rem;
  @media (max-width: 960px) { grid-template-columns: 1fr; }
`;

const SkillCard = styled(motion.article)`
  border-radius: 1.4rem;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  padding: 1.6rem;
`;

const SkillName = styled.p`
  font-weight: 600;
  margin: 0.5rem 0 0.3rem;
`;

const ProgressBar = styled.div`
  height: 8px;
  border-radius: 999px;
  background: rgba(255,255,255,0.12);
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #6a72f7, #1d8cf8);
`;

const data = [
  { category: 'Frontend', skills: [{ name: 'React', value: 94 }, { name: 'Next.js', value: 86 }, { name: 'Tailwind', value: 91 }] },
  { category: 'Backend', skills: [{ name: 'Python', value: 89 }, { name: 'Django', value: 85 }, { name: 'Databases', value: 80 }] },
  { category: 'Tools', skills: [{ name: 'Framer Motion', value: 92 }, { name: 'Docker', value: 75 }, { name: 'Prisma', value: 81 }] },
];

function SkillsSection() {
  return (
    <Section id="skills">
      <Title>Skills</Title>
      <Cards>
        {data.map((item) => (
          <SkillCard key={item.category} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 210 }}>
            <h3>{item.category}</h3>
            {item.skills.map((skill) => (
              <div key={skill.name} style={{ marginBottom: '0.9rem' }}>
                <SkillName>{skill.name} <span style={{ color: 'var(--muted)' }}>{skill.value}%</span></SkillName>
                <ProgressBar>
                  <Progress style={{ width: `${skill.value}%` }} />
                </ProgressBar>
              </div>
            ))}
          </SkillCard>
        ))}
      </Cards>
    </Section>
  );
}

export default SkillsSection;
