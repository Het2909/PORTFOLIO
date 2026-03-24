import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const CursorRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const Dot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(106, 114, 247, 0.95), rgba(106, 114, 247, 0.25));
  transform: translate(-50%, -50%);
  transition: transform 0.12s ease-out, width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
  pointer-events: none;
  box-shadow: 0 0 16px rgba(106, 114, 247, 0.8);
`;

function AnimatedCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });

    const enter = () => setActive(true);
    const leave = () => setActive(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', enter);
    window.addEventListener('mouseup', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', enter);
      window.removeEventListener('mouseup', leave);
    };
  }, []);

  const scale = active ? 1.9 : 1;

  const style = useMemo(() => ({
    transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
    opacity: position.x === -100 ? 0 : 1,
  }), [position, scale]);

  return (
    <CursorRoot>
      <Dot style={style} />
    </CursorRoot>
  );
}

export default AnimatedCursor;
