const Services = () => {
  const services = [
    {
      title: "Educational Consulting",
      description:
        "Strategic guidance for digital transformation and curriculum development.",
      icon: "🎯",
    },
    {
      title: "Digital Tools & Platforms",
      description:
        "Custom LMS solutions, analytics dashboards, and collaboration tools.",
      icon: "💻",
    },
    {
      title: "Teacher Training",
      description:
        "Professional development programs for modern teaching methodologies.",
      icon: "👩‍🏫",
    },
    {
      title: "Partnership Programs",
      description: "Connect with other institutions and industry partners.",
      icon: "🤝",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">
          Comprehensive solutions designed to meet the evolving needs of
          educational institutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="card-title text-2xl mb-4">{service.title}</h3>
              <p className="opacity-70 mb-6">{service.description}</p>
              <button className="btn btn-primary self-start">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
