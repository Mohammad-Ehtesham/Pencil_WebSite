const About = () => {
  const team = [
    {
      name: "Mayank Gupta",
      role: "Founder & CEO",
      bio: "Over 6 years of distinguished experience in IT, leading complex projects as a Full Stack Developer and AIML Specialist. Renowned for driving innovation, architecting scalable solutions and delivering transformative results across the tech landscape.",
      image: "👨‍💻",
    },
    {
      name: "Mohammed Danish",
      role: "Strategic Advisor",
      bio: "A visionary Strategic Advisor with 4.5 years of expertise in IT, Cloud DevOps and AI/ML. Instrumental in shaping the startup’s direction, leveraging deep technical knowledge and strategic insight to drive innovation, operational excellence and rapid business growth.",
      image: "♟️",
    },
    {
      name: "Aman Verma",
      role: "Sales Regional Manager",
      bio: "Over 6 years of proven excellence in sales and marketing, driving region and consistently exceeding targets across diverse markets.",
      image: "🤝",
    },
  ];

  // const milestones = [
  //   { year: "2020", event: "Founded with vision to transform education" },
  //   { year: "2021", event: "Launched first digital learning platform" },
  //   { year: "2022", event: "Partnered with 50+ educational institutions" },
  //   { year: "2023", event: "Expanded to international markets" },
  //   { year: "2024", event: "Serving 100,000+ students worldwide" },
  // ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About MPencil
        </h1>
        <p className="text-xl opacity-70 max-w-3xl mx-auto">
          MPencil’s mission is to simplify school management with intuitive technology that 
          empowers educators and focuses on student growth.
        </p>
      </div>

      {/* Story Section */}
      <section className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 opacity-80">
              <p>
                Founded in 2025 by Mayank Gupta, MPencil is a modern, 
                all-in-one ERP designed to help schools embrace technology without losing focus on student growth. 
                By automating tedious tasks and simplifying operations. From admissions and attendance to communication and 
                finance. MPencil empowers every institution to work smarter, stay organized, and focus on what truly matters.
              </p>
              <p>
                What began as a small initiative to support Indian schools has grown into MPencil, a complete ERP platform transforming how schools operate and students learn. 
                We help schools save time, reduce manual work, and improve communication with parents, while keeping the human touch at the heart of education.
              </p>
              <p>
                Driven by our belief that every student deserves access to effective, engaging, and future-ready learning, 
                we continue to innovate and make school management smarter, simpler, and more impactful.
              </p>
            </div>
          </div>
          <div className="bg-base-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Mission</h4>
                <p className="opacity-70">
                  To provide schools with an easy-to-learn, 
                  interactive ERP that covers every detail of school management, 
                  helping educators save time, stay organized, 
                  and focus on what matters most
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Vision</h4>
                <p className="opacity-70">
                  To redefine school management by making digital tools intuitive, 
                  comprehensive, and accessible, so every school big or small can 
                  run smoothly and every student can thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="mb-20">
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
      </section> */}

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              title: "Simplicity in Innovation",
              description:
                "We build technology that’s powerful yet easy to use, ensuring schools can adopt digital tools without complexity.",
            },
            {
              title: "Empowering Education",
              description:
                "Every feature we create aims to free educators from administrative burdens so they can focus on student growth.",
            },
            {
              title: "Integrity in Service",
              description:
                "We believe in honest, reliable support and transparent solutions that schools can truly trust.",
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
