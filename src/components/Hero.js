import React from 'react';
import './Hero.css';
import Reveal from './Reveal';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroImgUrl = `${process.env.PUBLIC_URL}/parth_img.jpg`;

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <Reveal delay={40}>
            <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Parth Desai</span>
            </h1>
            <h2 className="hero-subtitle">
              Software Engineer | Full Stack Developer | Web Developer
            </h2>
            <p className="hero-description">
              Passionate about building innovative software solutions and creating 
              exceptional user experiences. Currently pursuing MS in Computer Science 
              with a concentration in Full Stack Development at Pace University.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('resume')}
              >
                View Resume
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
            </div>
            <div className="hero-social">
              <a
                href="https://www.linkedin.com/in/parth-desai28/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/ParthDesaiiiiii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:parthbiren.desai@pace.edu"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="hero-image">
              <div className="hero-avatar">
              <img
                src={heroImgUrl}
                alt="Parth Desai - Software Engineer"
                className="profile-image"
                onError={(e) => {
                  const img = e.target;
                  if (!img.dataset.fallbackTried) {
                    img.dataset.fallbackTried = '1';
                    img.src = `${process.env.PUBLIC_URL}/parth_img.png`;
                    return;
                  }

                  img.style.display = 'none';
                  const placeholder = img.nextElementSibling;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="avatar-placeholder" style={{ display: 'none' }}>
                <i className="fas fa-user"></i>
              </div>
            </div>
            </div>
          </Reveal>
        </div>
        <div className="scroll-indicator">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

