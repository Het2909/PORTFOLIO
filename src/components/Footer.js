import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Root = styled.footer`
  padding: 2rem 2rem 2.4rem;
  text-align: center;
  border-top: 1px solid var(--border);
  color: var(--muted);
`;

const Social = styled.div`
  margin: 0.5rem auto 0.8rem;
  display: inline-flex;
  gap: 1rem;
  a { color: var(--muted); transition: color 0.22s ease; &:hover { color: #6a72f7; } }
`;

const Contact = styled.div`
  margin: 1rem auto 0;
  display: inline-flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0.95rem;
  a { color: var(--muted); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; transition: color 0.22s ease; &:hover { color: #6a72f7; } }
`;

function Footer() {
  return (
    <Root>
      <Social>
        <a href="https://github.com/your-username" aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
        <a href="https://linkedin.com/in/your-username" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
        <a href="https://twitter.com/your-username" aria-label="Twitter" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
      </Social>
      <br />
      <Contact>
        <a href="tel:+1234567890" aria-label="Phone"><FaPhone size={16} />+91 8238446578</a>
        <a href="mailto:contact@example.com" aria-label="Email"><FaEnvelope size={16} />hetjain2909@gmail.com</a>
      </Contact>
      <p>© {new Date().getFullYear()} Het Jain — Full-stack Developer | SEO specialist</p>
    </Root>
  );
}

export default Footer;
