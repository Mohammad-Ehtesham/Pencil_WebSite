const Services = () => {
  const services = [
    {
      title: "ERP Implementation & Setup",
      description:
        "Tailored deployment for your school’s unique structure.",
      icon: "⚙️",
    },
    {
      title: "Data Migration",
      description:
        "Smooth transition from existing systems or manual records.",
      icon: "💾",
    },
    {
      title: "Training & Onboarding",
      description:
        "Helping staff and teachers adopt the platform with ease.",
      icon: "🎓",
    },
    {
      title: "Custom Integrations",
      description: "Connecting MPencil with accounting, attendance, or payment systems.",
      icon: "🔗",
    },
    {
      title: "Ongoing Support & Maintenance",
      description: "Continuous updates and prompt assistance.",
      icon: "🛠️",
    },
    {
      title: "Analytics & Insights",
      description: "Helping management make data-driven decisions.",
      icon: "📊",
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
