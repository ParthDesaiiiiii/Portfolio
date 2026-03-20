import React, { useState } from 'react';
import './Contact.css';
import Reveal from './Reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to a backend
    setStatus('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Jersey City, NJ 07307',
      link: null
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'parthbiren.desai@pace.edu',
      link: 'mailto:parthbiren.desai@pace.edu'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '848-239-8723',
      link: 'tel:848-239-8723'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/parth-desai28/'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'View my code',
      link: 'https://github.com/ParthDesaiiiiii'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities and interesting projects
        </p>
        <Reveal delay={60}>
          <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Feel free to reach out through any of the channels below.
            </p>
            <div className="contact-items">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact-details">
                    <h4>{info.label}</h4>
                    {info.link ? (
                      <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}>
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={160}>
            <div className="contact-form-container sr-card-glow">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              {status && <div className="form-status">{status}</div>}
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
            </div>
          </Reveal>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

