

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    inquiryType: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://formspree.io/f/xpwyjpee", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: new FormData(e.target)
      });
      const data = await response.json();
      if (data.ok) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          institution: "",
          inquiryType: "",
          message: ""
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">
          Get in touch with our team to learn how we can support your
          educational institution.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Send us a Message</h2>
            {success ? (
              <div className="alert alert-success">We are glad to hear from you, We will be treating this as our Priority! Your message has been sent.</div>
            ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="input input-bordered"
                    placeholder="John"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="input input-bordered"
                    placeholder="Doe"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Institution</span>
                </label>
                <input
                  type="text"
                  name="institution"
                  className="input input-bordered"
                  placeholder="Your school or organization"
                  value={formData.institution}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Inquiry Type</span>
                </label>
                <select
                  name="inquiryType"
                  className="select select-bordered"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="general">General Information</option>
                  <option value="demo">Request a Demo</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered h-32"
                  placeholder="Tell us how we can help you..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {error && <div className="alert alert-error">{error}</div>}
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
            )}
          </div>
        </div>
        {/* Map Integration */}
        <div className="flex flex-col h-full">
          {/* Contact Details above the map */}
          <div className="card bg-base-100 shadow-md mb-6">
            <div className="card-body flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="opacity-70">209, Swapnapurti, Sasane Nagar<br />Hadapsar, Pune, Maharashtra - 411028</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="opacity-70">+91 90098 88333</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="opacity-70">info@MPencil.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* Map Card */}
          <div className="card bg-base-200 shadow-xl flex-1 flex flex-col justify-stretch">
            <div className="card-body flex-1 flex flex-col">
              <h3 className="card-title">Visit Our Office</h3>
              <div className="rounded-lg overflow-hidden flex-1" style={{ minHeight: '310px', height: '100%' }}>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8210861893267!2d73.93311722472092!3d18.491761632596194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1fff414a8e9%3A0xbb2498b6d4a1ea08!2sSWAPNAPURTI%20APARTMENT%2C%20Swarvihar%2C%20Sasane%20Nagar%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra%20411028!5e0!3m2!1sen!2sin!4v1759740880913!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '310px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
