import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const Section = styled.section`
  padding: 7rem 2rem 6rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.98rem;
`;

const Form = styled.form`
  max-width: 620px;
  margin: 1.8rem auto 0;
  display: grid;
  gap: 1rem;
`;

const Input = styled.input`
  border: 1px solid var(--border);
  border-radius: 0.9rem;
  background: rgba(255,255,255,0.08);
  padding: 0.85rem 1rem;
  color: var(--text);
  outline: none;
  transition: border-color 0.2s ease;
  &:focus { border-color: #6a72f7; }
`;

const TextArea = styled.textarea`
  border: 1px solid var(--border);
  border-radius: 0.9rem;
  background: rgba(255,255,255,0.08);
  padding: 0.85rem 1rem;
  color: var(--text);
  outline: none;
  min-height: 148px;
  resize: vertical;
  &:focus { border-color: #6a72f7; }
`;

const Enroll = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 0.8rem 1.3rem;
  background: linear-gradient(110deg, #6a72f7, #1d8cf8);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(2, 8, 35, 0.35);
  transition: transform 0.2s ease;
  &:hover { transform: translateY(-1px); }
`;

const Message = styled(motion.div)`
  text-align: center;
  font-weight: 500;
  color: #5ce07f;
`;

const Error = styled.p`
  color: #f47c7c;
  font-size: 0.88rem;
  margin: 0;
`;

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      setError('Please complete all fields.');
      return false;
    }
    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) { setError('Please enter a valid email.'); return false; }
    setError('');
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <Section id="contact">
      <Title>Contact</Title>
      <p style={{ textAlign: 'center', maxWidth: '640px', margin: '0.7rem auto 1.5rem', color: 'var(--muted)' }}>
        Send a quick note or a spec for your next project. I’ll reply in 24h with a tailored plan.
      </p>
      <Form onSubmit={onSubmit}>
        <Input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <TextArea placeholder="Your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        {error && <Error>{error}</Error>}
        <Enroll type="submit">{status === 'sending' ? 'Sending...' : 'Send Message'}</Enroll>
        <AnimatePresence>
          {status === 'sent' && (
            <Message initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              Message sent successfully. I’ll be in touch soon.
            </Message>
          )}
        </AnimatePresence>
      </Form>
    </Section>
  );
}

export default ContactSection;
