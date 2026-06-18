import { useEffect, useRef } from 'react';

export default function ParticlesBackground({ color, maxParticles = 80, speed = 0.6, glow = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canvas || !context || reducedMotion) return undefined;

    let frameId = 0;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * speed - speed / 2,
      speedX: Math.random() * speed - speed / 2,
      alpha: Math.random() * (glow ? 1 : 0.9) + (glow ? 0.2 : 0),
      life: Math.random() * 120 + 60,
    });

    const drawParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.shadowColor = glow ? `${color}99` : 'transparent';
      context.shadowBlur = glow ? 8 : 0;

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = color + Math.floor(Math.max(0, particle.alpha) * 255).toString(16).padStart(2, '0');
        context.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.alpha -= 0.0028;
        particle.life -= 1;

        if (particle.alpha <= 0 || particle.life <= 0) {
          particles[index] = createParticle();
        }
      }

      if (particles.length < maxParticles) {
        particles.push(createParticle());
      }

      frameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    particles = Array.from({ length: maxParticles }, createParticle);
    window.addEventListener('resize', resizeCanvas);
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, [color, glow, maxParticles, speed]);

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />;
}
