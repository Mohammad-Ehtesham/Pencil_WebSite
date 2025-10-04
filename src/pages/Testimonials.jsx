const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Maria Gonzalez",
      role: "Superintendent, Oakwood School District",
      content:
        "EduInnovate transformed how we approach digital learning. Their platform and consulting services helped us increase student engagement by 40% in just one semester.",
      image: "👩‍💼",
      rating: 5,
    },
    {
      name: "James Thompson",
      role: "Principal, Lincoln High School",
      content:
        "The professional development programs are exceptional. Our teachers feel more confident and equipped to handle modern classroom challenges.",
      image: "👨‍🏫",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Technology Director, Riverside Academy",
      content:
        "Implementation was seamless, and the ongoing support has been outstanding. A true partnership that delivers real results.",
      image: "👩‍💻",
      rating: 5,
    },
    {
      name: "Dr. Robert Chen",
      role: "Dean of Education, State University",
      content:
        "Their research-based approach and innovative tools have significantly enhanced our teacher preparation programs.",
      image: "👨‍🎓",
      rating: 4,
    },
    {
      name: "Amanda Wilson",
      role: "Curriculum Director, Charter Schools Network",
      content:
        "The analytics and reporting features give us insights we never had before. We can make data-driven decisions that actually improve outcomes.",
      image: "👩‍⚖️",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "IT Director, Private School Consortium",
      content:
        "Finally, an education technology company that understands the unique challenges schools face. Their solutions are practical and effective.",
      image: "👨‍💼",
      rating: 5,
    },
  ];

  const partners = [
    { name: "State Department of Education", logo: "🏛️" },
    { name: "National Education Association", logo: "📚" },
    { name: "TechForLearning", logo: "💻" },
    { name: "Global Schools Network", logo: "🌍" },
    { name: "InnovateEd Foundation", logo: "🚀" },
    { name: "Future Ready Schools", logo: "⭐" },
  ];

  const stats = [
    { number: "250+", label: "Educational Institutions" },
    { number: "100K+", label: "Students Impacted" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "40%", label: "Avg. Improvement in Engagement" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Trusted by Educators Worldwide
        </h1>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">
          See what educational leaders are saying about their experience with
          EduInnovate.
        </p>
      </div>

      {/* Stats */}
      <section className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="stat-value text-primary">{stat.number}</div>
                <div className="stat-desc opacity-70">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Partners Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <div className="card-body">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="italic mb-6">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm opacity-70">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="card bg-base-200 shadow-xl w-full">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-2">{partner.logo}</div>
                <h3 className="card-title text-sm text-center">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="bg-base-200 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Riverdale School District</h3>
              <div className="stats shadow my-4">
                <div className="stat">
                  <div className="stat-title">Student Engagement</div>
                  <div className="stat-value text-primary">+42%</div>
                  <div className="stat-desc">in 6 months</div>
                </div>
              </div>
              <p>
                Implemented comprehensive digital learning platform across 15
                schools, serving 8,000 students.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read Case Study</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Metro Community College</h3>
              <div className="stats shadow my-4">
                <div className="stat">
                  <div className="stat-title">Course Completion</div>
                  <div className="stat-value text-primary">+28%</div>
                  <div className="stat-desc">in 1 year</div>
                </div>
              </div>
              <p>
                Deployed adaptive learning technology and professional
                development for 200+ faculty members.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read Case Study</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Join Our Success Stories?
        </h2>
        <p className="text-xl opacity-70 mb-8 max-w-2xl mx-auto">
          Become part of our growing community of educational innovators.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn btn-primary btn-lg">Schedule a Demo</button>
          <button className="btn btn-outline btn-lg">Contact Sales</button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
