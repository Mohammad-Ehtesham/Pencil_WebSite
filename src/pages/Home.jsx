
import { Link } from "react-router-dom";

const screenshots = [
  "screenshots/Screenshot 2025-09-15 at 18.22.24.png",
  "screenshots/Screenshot 2025-09-15 at 18.23.12.png",
  "screenshots/Screenshot 2025-09-19 at 19.39.29.png",
  "screenshots/Screenshot 2025-09-17 at 21.43.04.png",
];

const features = [
  {
    icon: "🚀",
    title: "Lightning Fast Setup",
    desc: "Get your school running in days, not months."
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    desc: "Enterprise-grade security and 99.99% uptime."
  },
  {
    icon: "🤖",
    title: "AI-Powered Insights",
    desc: "Actionable analytics for smarter decisions."
  },
  {
    icon: "🎨",
    title: "Customizable",
    desc: "Tailor every module to your institution’s needs."
  },
];

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary/10 to-base-100 overflow-x-hidden">
      {/* Glassmorphic Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] pt-8 pb-16">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/30 to-base-100/80 blur-2xl opacity-60 z-0" />
        <div className="relative z-10 w-full max-w-3xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-pulse drop-shadow-lg">
            MPencil ERP<br />
            <span className="text-base-content/80 text-2xl md:text-4xl font-semibold block mt-2 animate-fade-in">
              School Management, Reinvented
            </span>
          </h1>
          <p className="text-xl md:text-2xl opacity-80 mb-8">
            Experience the future of education with a platform that’s as dynamic as your institution.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/subscription" className="btn btn-primary btn-lg glass shadow-xl">
              Get Started
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg glass">
              Learn More
            </Link>
          </div>
        </div>
        {/* Floating Feature Bubbles */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] flex gap-4 z-20">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white/40 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-lg border border-white/30 flex flex-col items-center mx-2 hover:scale-105 transition-transform duration-300"
              style={{ transform: `translateY(${i % 2 === 0 ? 0 : 20}px)` }}
            >
              <span className="text-3xl mb-2">{f.icon}</span>
              <span className="font-bold text-base mb-1">{f.title}</span>
              <span className="text-xs opacity-70">{f.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="relative py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="mt-16 text-4xl font-bold text-center mb-12 drop-shadow-lg">See MPencil in Action</h2>
          <div className="relative flex flex-wrap justify-center gap-8">
            {screenshots.map((src, idx) => (
              <div
                key={src}
                className={`relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/40 bg-white/30 backdrop-blur-lg transition-transform duration-500 hover:scale-105 hover:z-20 ${
                  idx % 2 === 0 ? "-rotate-2" : "rotate-2"
                }`}
                style={{ width: 320, height: 200, top: idx % 2 === 0 ? 0 : 24 }}
              >
                <img
                  src={src}
                  alt={`ERP Screenshot ${idx + 1}`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Background Shapes */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
      </div>
    </div>
  );
};

export default Home;
