const About = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      bio: "Former university dean with 15+ years in educational leadership.",
      image: "👩‍💼",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "EdTech expert with background in scalable learning platforms.",
      image: "👨‍💻",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Learning",
      bio: "Curriculum development specialist and educational researcher.",
      image: "👩‍🏫",
    },
    {
      name: "James Kim",
      role: "Partnership Director",
      bio: "Former school district administrator with extensive network.",
      image: "🤝",
    },
  ];

  const milestones = [
    { year: "2020", event: "Founded with vision to transform education" },
    { year: "2021", event: "Launched first digital learning platform" },
    { year: "2022", event: "Partnered with 50+ educational institutions" },
    { year: "2023", event: "Expanded to international markets" },
    { year: "2024", event: "Serving 100,000+ students worldwide" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About EduInnovate
        </h1>
        <p className="text-xl opacity-70 max-w-3xl mx-auto">
          We're on a mission to revolutionize education through innovative
          technology, expert guidance, and meaningful partnerships.
        </p>
      </div>

      {/* Story Section */}
      <section className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 opacity-80">
              <p>
                Founded in 2020 by Dr. Sarah Chen, EduInnovate emerged from a
                simple observation: educational institutions were struggling to
                keep pace with technological change while maintaining their core
                mission of student development.
              </p>
              <p>
                What started as a consulting service for local schools has grown
                into a comprehensive platform serving educational organizations
                worldwide. We've helped hundreds of institutions navigate
                digital transformation while preserving the human element that
                makes education meaningful.
              </p>
              <p>
                Today, we continue to innovate, driven by our belief that every
                student deserves access to engaging, effective, and future-ready
                education.
              </p>
            </div>
          </div>
          <div className="bg-base-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Mission</h4>
                <p className="opacity-70">
                  To empower educational institutions with innovative tools and
                  strategies that enhance learning outcomes and prepare students
                  for the future.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Vision</h4>
                <p className="opacity-70">
                  A world where every educational institution has the resources
                  and support to provide transformative learning experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
              <div className="flex-shrink-0 w-20 h-20 milestone-year rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {milestone.year}
              </div>
              <div className="pt-7">
                <p className="text-lg">{milestone.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="card-title">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
                <p className="opacity-70 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mt-20 bg-base-200 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description:
                "We constantly explore new ways to enhance learning experiences through technology and research.",
            },
            {
              title: "Collaboration",
              description:
                "We believe in the power of partnerships and work closely with educators, institutions, and students.",
            },
            {
              title: "Impact",
              description:
                "We measure our success by the positive changes we help create in educational outcomes.",
            },
          ].map((value, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="opacity-70">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
