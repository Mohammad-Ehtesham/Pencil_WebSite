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

    // URLs to your downloaded 3D icons (replace with your actual file paths)
    const iconUrls = [
      "/icons/atom.png",
      "/icons/globe.png",
      "/icons/graduation.png",
      "/icons/instructions.png",
      "/icons/learning.png",
      "/icons/microscope.png",
      "/icons/pen.png",
      "/icons/space.png",
      "/icons/vial.png",
      "/icons/magnifying-glass.png",
      "/icons/telescope.png",
      "/icons/sigma.png",
      "/icons/beaker.png",
      "/icons/icosahedron.png",
      "/icons/economic-growth.png",
    ];

    // Particle system
    const particles = [];
    const particleCount = 15; // Fewer particles since 3D icons are more detailed

    // Your brand colors as background tints
    const colors = [
      "rgba(40, 54, 24, 0.8)", // Deep Forest Green
      "rgba(188, 108, 37, 0.8)", // Rich Gold
      "rgba(96, 108, 56, 0.8)", // Olive Green
      "rgba(221, 161, 94, 0.8)", // Warm Amber
    ];

    let loadedIcons = [];

    // Load 3D icons
    const loadIcons = async () => {
      const loadPromises = iconUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = url;
        });
      });

      try {
        loadedIcons = await Promise.all(loadPromises);
        console.log("All 3D icons loaded successfully");
      } catch (error) {
        console.error("Error loading icons:", error);
        // Fallback to simple shapes if icons fail to load
        createFallbackIcons();
      }
    };

    // Fallback if icons don't load
    const createFallbackIcons = () => {
      // Create simple colored circles as fallback
      loadedIcons = colors.map((color, index) => {
        const canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext("2d");

        // Create a simple 3D-looking circle
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, color.replace("0.8", "1"));
        gradient.addColorStop(1, color.replace("0.8", "0.4"));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(32, 32, 28, 0, Math.PI * 2);
        ctx.fill();

        // Add a highlight for 3D effect
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.beginPath();
        ctx.arc(22, 22, 10, 0, Math.PI * 2);
        ctx.fill();

        const img = new Image();
        img.src = canvas.toDataURL();
        return img;
      });
    };

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 50 + 40, // Larger for 3D icons
          speedX: Math.random() * 0.6 - 0.3,
          speedY: Math.random() * 0.6 - 0.3,
          iconIndex: Math.floor(Math.random() * loadedIcons.length),
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 0.3 - 0.15,
          opacity: Math.random() * 0.3 + 0.4,
          floatOffset: Math.random() * Math.PI * 2,
          floatSpeed: Math.random() * 0.02 + 0.01,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

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

      // Add subtle gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.5
      );
      gradient.addColorStop(0, "rgba(254, 250, 224, 0.1)");
      gradient.addColorStop(1, "rgba(233, 237, 201, 0.05)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      const time = Date.now() * 0.001;

      particles.forEach((particle) => {
        // Mouse interaction
        if (mouseX !== null && mouseY !== null) {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const force = (150 - distance) / 150;
            particle.x += (dx / distance) * force * 4;
            particle.y += (dy / distance) * force * 4;
          }
        }

        // Floating animation
        particle.y +=
          Math.sin(time * particle.floatSpeed + particle.floatOffset) * 0.3;

        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off walls
        if (particle.x < -50 || particle.x > canvas.width + 50)
          particle.speedX *= -1;
        if (particle.y < -50 || particle.y > canvas.height + 50)
          particle.speedY *= -1;

        // Keep within bounds
        particle.x = Math.max(-50, Math.min(canvas.width + 50, particle.x));
        particle.y = Math.max(-50, Math.min(canvas.height + 50, particle.y));

        // Rotation
        particle.rotation += particle.rotationSpeed;

        // Pulsing size
        const pulse = Math.sin(time * particle.pulseSpeed) * 8;
        const currentSize = particle.size + pulse;

        // Draw 3D icon
        if (loadedIcons[particle.iconIndex]) {
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.rotation * Math.PI) / 180);
          ctx.globalAlpha = particle.opacity;

          // Add subtle shadow for depth
          ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;

          ctx.drawImage(
            loadedIcons[particle.iconIndex],
            -currentSize / 2,
            -currentSize / 2,
            currentSize,
            currentSize
          );

          ctx.restore();
        }
      });

      requestAnimationFrame(animate);
    };

    // Initialize
    const init = async () => {
      await loadIcons();
      createParticles();
      animate();
    };

    init();

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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default InteractiveBackground;
