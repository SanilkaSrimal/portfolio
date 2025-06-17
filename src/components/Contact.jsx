import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "dilmijayanetthi66@gmail.com",
      link: "mailto:dilmijayanetthi66@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+94 764 199 842",
      link: "tel:+94764199842",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Unawatuna, Sri Lanka",
      link: "#",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/dilmijayanetthi/",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            Let's work together on your next project
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's talk about everything!</h3>
            <p>
              Don't like forms? Send me an email. 👋 I'm always excited to
              discuss new opportunities and interesting projects.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Connect with me:</h4>
              <div className="social-icons">
                <a
                  href="https://github.com/DilmiJ"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/dilmijayanetthi/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:dilmijayanetthi66@gmail.com"
                  className="social-link"
                >
                  Email
                </a>
                <a href="tel:+94764199842" className="social-link">
                  Call
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
