import React, { useEffect, useRef } from 'react';

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;

    // Configuration
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100); // Responsive count
    const connectionDistance = 150;
    const mouseDistance = 200;
    
    // Mouse state
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Extremely slow movement: random between -0.3 and 0.3
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2 + 1; // Size between 1 and 3
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        
        // Calculate distance to mouse to determine brightness
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Logic: Very faint by default, lights up (darkens) when near mouse
        if (dist < mouseDistance) {
            const alpha = 0.6 * (1 - dist / mouseDistance);
            ctx.fillStyle = `rgba(80, 80, 80, ${Math.max(0.1, alpha)})`;
        } else {
            // Faded state
            ctx.fillStyle = 'rgba(200, 200, 200, 0.2)'; 
        }
        
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections
      particles.forEach((a, index) => {
        // Connect to other particles
        for (let j = index + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            
            // Check if either particle is influenced by mouse to "light up" the connection
            const distAMouse = Math.sqrt((a.x - mouse.x)**2 + (a.y - mouse.y)**2);
            const distBMouse = Math.sqrt((b.x - mouse.x)**2 + (b.y - mouse.y)**2);
            
            if (distAMouse < mouseDistance || distBMouse < mouseDistance) {
                 // Lit up connection (Darker)
                 // Opacity based on how close particles are to each other AND how close to mouse
                 const mouseFactor = Math.min(1, (2 - (distAMouse + distBMouse)/mouseDistance)); // Rough proximity factor
                 ctx.strokeStyle = `rgba(100, 100, 100, ${0.4 * (1 - distance / connectionDistance) * mouseFactor})`;
            } else {
                 // Faded connection (Very light)
                 ctx.strokeStyle = `rgba(220, 220, 220, ${0.1 * (1 - distance / connectionDistance)})`;
            }

            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        const dx = a.x - mouse.x;
        const dy = a.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          ctx.beginPath();
          // Strong connection to cursor
          ctx.strokeStyle = `rgba(60, 60, 60, ${0.6 * (1 - distance / mouseDistance)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none bg-slate-50"
    />
  );
};

export default NeuralBackground;