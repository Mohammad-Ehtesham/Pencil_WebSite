import { Link } from "react-router-dom";
import InteractiveBackground from "../components/ui/InteractiveBackground";

const Home = () => {
  return (
    <div className="relative">
      <InteractiveBackground />

      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-primary/10 to-base-100 relative z-10">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold">
              Transforming Education Through Innovation
            </h1>
            <p className="py-6 text-xl opacity-80">
              Empowering educational organizations with cutting-edge tools,
              comprehensive training, and strategic partnerships to shape the
              future of learning.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/subscription" className="btn btn-primary btn-lg">
                Get Started
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose EduInnovate?</h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              We provide comprehensive solutions that address the unique
              challenges facing modern educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Digital Transformation",
                description:
                  "Modernize your institution with our cutting-edge digital tools and platforms.",
              },
              {
                icon: "👥",
                title: "Expert Consulting",
                description:
                  "Leverage our team of education experts to drive meaningful change.",
              },
              {
                icon: "📚",
                title: "Professional Development",
                description:
                  "Comprehensive training programs for educators and administrators.",
              },
            ].map((feature, index) => (
              <div key={index} className="card bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="card-title text-2xl mb-2">{feature.title}</h3>
                  <p className="opacity-70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Join hundreds of educational organizations already benefiting from
              our innovative solutions.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn bg-blue-600 text-white hover:bg-blue-500 btn-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
