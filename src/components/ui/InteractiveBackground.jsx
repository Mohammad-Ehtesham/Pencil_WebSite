import { useEffect, useRef } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles = [];
    const particleCount = 25;

    // Knowledge symbols
    const symbols = ["📚", "🔬", "💡", "📖", "🎓", "⚗️", "🧮", "🌍"];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 45 + 25,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: `hsl(${Math.random() * 60 + 180}, 70%, ${
          Math.random() * 20 + 40
        }%)`,
        opacity: Math.random() * 0.9 + 0.4,
      });
    }

    // Mouse interaction
    let mouseX = null;
    let mouseY = null;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        // Mouse interaction
        if (mouseX !== null && mouseY !== null) {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            particle.x += (dx / distance) * 2;
            particle.y += (dy / distance) * 2;
          }
        }

        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Keep within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.font = `${particle.size}px Arial`;
        ctx.globalAlpha = particle.opacity;
        ctx.fillText(particle.symbol, particle.x, particle.y);
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
      style={{ background: "transparent" }}
    />
  );
};

export default InteractiveBackground;
