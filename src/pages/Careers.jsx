const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description:
        "Join our team to build innovative educational technology solutions using modern React and TypeScript.",
      requirements: [
        "5+ years React experience",
        "TypeScript proficiency",
        "Experience with educational technology",
      ],
    },
    {
      id: 2,
      title: "Educational Consultant",
      department: "Services",
      type: "Full-time",
      location: "Hybrid",
      description:
        "Work directly with schools and institutions to implement our solutions and drive educational outcomes.",
      requirements: [
        "Education background",
        "Consulting experience",
        "Strong communication skills",
      ],
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      type: "Full-time",
      location: "San Francisco",
      description:
        "Lead product strategy and development for our core educational platforms.",
      requirements: [
        "3+ years product management",
        "EdTech experience",
        "Data-driven decision making",
      ],
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
      description:
        "Design intuitive and accessible interfaces for educational tools used by teachers and students.",
      requirements: [
        "Portfolio required",
        "Figma expertise",
        "Accessibility knowledge",
      ],
    },
    {
      id: 5,
      title: "Sales Development Representative",
      department: "Sales",
      type: "Full-time",
      location: "New York",
      description:
        "Help educational institutions discover how our solutions can transform their learning environments.",
      requirements: [
        "Sales experience",
        "Education sector knowledge",
        "Goal-oriented mindset",
      ],
    },
    {
      id: 6,
      title: "Summer Intern - Engineering",
      department: "Engineering",
      type: "Internship",
      location: "Remote",
      description:
        "Gain hands-on experience working on real educational technology projects with mentorship.",
      requirements: [
        "Computer Science student",
        "React knowledge",
        "Passion for education",
      ],
    },
  ];

  const benefits = [
    {
      icon: "💼",
      title: "Remote-First Work",
      description: "Work from anywhere with flexible schedules",
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance",
    },
    {
      icon: "📚",
      title: "Learning Stipend",
      description: "Annual budget for professional development",
    },
    {
      icon: "🏖️",
      title: "Unlimited PTO",
      description: "Take time off when you need it to recharge",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Support",
      description: "Parental leave and family planning benefits",
    },
    {
      icon: "⚡",
      title: "Cutting-Edge Tech",
      description: "Work with modern tools and technologies",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Build the Future of Education With Us
        </h1>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">
          Join our mission-driven team working to transform educational
          experiences worldwide.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <div key={position.id} className="card bg-base-200 shadow-xl">
                  <div className="card-body">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-grow">
                        <h3 className="card-title text-xl mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="badge badge-outline">
                            {position.department}
                          </span>
                          <span className="badge badge-outline">
                            {position.type}
                          </span>
                          <span className="badge badge-outline">
                            {position.location}
                          </span>
                        </div>
                        <p className="opacity-70 mb-4">
                          {position.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Key Requirements:</h4>
                          <ul className="list-disc list-inside space-y-1 opacity-70">
                            {position.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <button className="btn btn-primary">Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* No Match Section */}
          <section className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title text-xl justify-center">
                Don't See a Perfect Match?
              </h3>
              <p className="opacity-70 mb-4">
                We're always looking for talented people who are passionate
                about education technology. Send us your resume and tell us how
                you can contribute to our mission.
              </p>
              <button className="btn btn-outplace self-center">
                Submit General Application
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            {/* Why Join Us */}
            <section className="card bg-primary text-primary-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Why Join EduInnovate?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Mission-driven work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Impact thousands of students</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Collaborative culture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Career growth opportunities</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h3 className="text-xl font-bold mb-6">Our Benefits</h3>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h4 className="font-semibold">{benefit.title}</h4>
                      <p className="text-sm opacity-70">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hiring Process */}
            <section className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Our Hiring Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-semibold">Initial Screen</div>
                      <div className="text-sm opacity-70">
                        30-minute video call
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-semibold">Skills Assessment</div>
                      <div className="text-sm opacity-70">
                        Role-specific exercise
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-semibold">Team Interviews</div>
                      <div className="text-sm opacity-70">
                        Meet the team (2-3 rounds)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <div className="font-semibold">Offer</div>
                      <div className="text-sm opacity-70">
                        Decision within 48 hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
