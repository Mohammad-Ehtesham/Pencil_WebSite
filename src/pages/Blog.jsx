import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of Digital Learning in Post-Pandemic Education",
      excerpt:
        "Exploring how digital learning tools have evolved and what this means for the future of education.",
      category: "Digital Transformation",
      readTime: "5 min read",
      date: "2024-01-15",
      image: "📚",
    },
    {
      id: 2,
      title: "Building Inclusive Classroom Environments with Technology",
      excerpt:
        "Strategies for using technology to create more inclusive and accessible learning spaces.",
      category: "Inclusion",
      readTime: "4 min read",
      date: "2024-01-10",
      image: "🌍",
    },
    {
      id: 3,
      title:
        "Case Study: How Riverdale School District Improved Student Outcomes",
      excerpt:
        "A detailed look at how one district implemented our platform and saw significant improvements.",
      category: "Case Study",
      readTime: "7 min read",
      date: "2024-01-05",
      image: "📊",
    },
    {
      id: 4,
      title: "Teacher Professional Development in the Digital Age",
      excerpt:
        "Best practices for ongoing teacher training and development using digital tools.",
      category: "Professional Development",
      readTime: "6 min read",
      date: "2023-12-20",
      image: "👩‍🏫",
    },
    {
      id: 5,
      title: "The Role of AI in Personalized Learning Pathways",
      excerpt:
        "How artificial intelligence is helping create customized learning experiences for students.",
      category: "AI & EdTech",
      readTime: "8 min read",
      date: "2023-12-15",
      image: "🤖",
    },
    {
      id: 6,
      title: "Measuring Success: Beyond Traditional Assessment Methods",
      excerpt:
        "Innovative approaches to measuring student success and institutional effectiveness.",
      category: "Assessment",
      readTime: "5 min read",
      date: "2023-12-10",
      image: "📈",
    },
  ];

  const categories = [
    "All Topics",
    "Digital Transformation",
    "Case Study",
    "Professional Development",
    "AI & EdTech",
    "Inclusion",
    "Assessment",
  ];

  const resources = [
    {
      type: "Whitepaper",
      title: "Digital Maturity in Education 2024",
      description:
        "Comprehensive research on technology adoption in educational institutions.",
      download: true,
    },
    {
      type: "Toolkit",
      title: "Digital Learning Implementation Guide",
      description:
        "Step-by-step guide for implementing digital learning tools.",
      download: true,
    },
    {
      type: "Webinar",
      title: "Future-Proofing Your Institution",
      description: "Recording of our latest webinar on strategic planning.",
      watch: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Resources & Insights
        </h1>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">
          Stay updated with the latest trends, research, and best practices in
          education technology.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            {/* Categories */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Categories</h3>
                <ul className="menu gap-1">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a className={index === 0 ? "active" : ""}>{category}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="card bg-primary text-primary-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Stay Updated</h3>
                <p className="text-sm">
                  Get the latest articles and resources delivered to your inbox.
                </p>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered"
                  />
                </div>
                <button className="btn btn-secondary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Featured Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="card bg-base-200 shadow-xl">
                  <div className="card-body">
                    <div className="badge badge-primary">{resource.type}</div>
                    <h3 className="card-title text-lg">{resource.title}</h3>
                    <p className="opacity-70 text-sm">{resource.description}</p>
                    <div className="card-actions justify-end">
                      {resource.download && (
                        <button className="btn btn-primary btn-sm">
                          Download
                        </button>
                      )}
                      {resource.watch && (
                        <button className="btn btn-primary btn-sm">
                          Watch Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="card bg-base-200 shadow-xl"
                >
                  <div className="card-body">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">
                        {article.image}
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="badge badge-outline">
                            {article.category}
                          </span>
                          <span className="opacity-50 text-sm">
                            {article.date}
                          </span>
                          <span className="opacity-50 text-sm">•</span>
                          <span className="opacity-50 text-sm">
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="card-title text-xl mb-3">
                          {article.title}
                        </h3>
                        <p className="opacity-70 mb-4">{article.excerpt}</p>
                        <Link
                          to={`/blog/${article.id}`}
                          className="btn btn-ghost btn-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn btn-outline">Load More Articles</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
