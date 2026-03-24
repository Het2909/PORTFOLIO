import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');

  :root {
    --bg: #0b0f1f;
    --bg-2: #111a32;
    --surface: rgba(255, 255, 255, 0.08);
    --surface-strong: rgba(255, 255, 255, 0.12);
    --text: rgba(255, 255, 255, 0.92);
    --muted: rgba(213, 224, 255, 0.72);
    --accent: #6a72f7;
    --accent-soft: rgba(106, 114, 247, 0.25);
    --border: rgba(255, 255, 255, 0.12);
    --shadow: 0 20px 40px rgba(5, 7, 20, 0.4);
  }

  [data-theme='light'] {
    --bg: #f6f8ff;
    --bg-2: #ffffff;
    --surface: rgba(18, 25, 49, 0.04);
    --surface-strong: rgba(18, 25, 49, 0.08);
    --text: #0f172a;
    --muted: rgba(15, 23, 42, 0.6);
    --accent: #4f46e5;
    --accent-soft: rgba(79, 70, 229, 0.2);
    --border: rgba(15, 23, 42, 0.12);
    --shadow: 0 14px 34px rgba(20, 25, 54, 0.16);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; font-family: 'Inter', 'Segoe UI', sans-serif; }

  body {
    margin: 0;
    min-height: 100vh;
    background: radial-gradient(circle at top left, rgba(106,114,247,0.35) 0%, transparent 45%),
                radial-gradient(circle at 70% 20%, rgba(0,255,255,0.18) 0%, transparent 35%),
                linear-gradient(135deg, var(--bg), var(--bg-2));
    color: var(--text);
    transition: background 0.45s ease, color 0.45s ease;
    overflow-x: hidden;
  }

  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; height: auto; display: block; }
  button, input, textarea { font: inherit; }

  .glass {
    background: var(--surface);
    border: 1px solid var(--border);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: var(--shadow);
  }

  .muted { color: var(--muted); }
  .cta { color: #fff; background: linear-gradient(135deg, #6a72f7, #1d8cf8); }
`;

export default GlobalStyle;
