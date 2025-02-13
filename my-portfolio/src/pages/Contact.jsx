import React, { useState } from "react";
import "../CSS/contact.css"; 


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-container">
      <h3>Connect with Me</h3>
      <p><strong>Email:</strong> <a href="mailto:Sabrinothman95@gmail.com">Sabrinothman95@gmail.com</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sabrin-othman-344219207" target="_blank" rel="noopener noreferrer">Sabrin Othman</a></p>

      <h3>Send an Inquiry</h3>
      {submitted ? (
        <p className="success-message">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
