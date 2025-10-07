const Services = () => {
  const services = [
    {
      title: "ERP Implementation & Setup",
      description:
        "Seamless setup customized to your school’s structure, ensuring MPencil runs perfectly from day one.",
      icon: "⚙️",
    },
    {
      title: "Data Migration",
      description:
        "We safely transfer your existing student, staff, and fee data into MPencil with zero disruption.",
      icon: "💾",
    },
    {
      title: "Training & Onboarding",
      description:
        "Hands-on training sessions to help teachers and staff easily adapt and get the most out of MPencil.",
      icon: "🎓",
    },
    {
      title: "Custom Integrations",
      description: "Connect MPencil with your preferred tools: accounting, SMS, or payments, for a unified experience.",
      icon: "🔗",
    },
    {
      title: "Ongoing Support & Maintenance",
      description: "Reliable support, regular updates and system monitoring to keep your ERP running flawlessly.",
  icon: "🧰",
    },
    {
      title: "Analytics & Insights",
      description: "Turn daily school operations into powerful insights that drive smarter decisions.",
  icon: "�",
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
          <div
            key={index}
            className="card bg-base-200 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10"
          >
            <div className="card-body">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="card-title text-2xl mb-4">{service.title}</h3>
              <p className="opacity-70">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
