import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about my background, passion, and what drives me as a software engineer
        </p>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Software Engineer and Full Stack Developer currently pursuing 
              my Master's degree in Computer Science with a concentration in Full Stack Development 
              at Pace University, Seidenberg School of Computer Science and Information Systems.
            </p>
            <p>
              With a strong foundation in both front-end and back-end technologies, I specialize 
              in creating robust, scalable web applications. My experience includes working with 
              modern frameworks like React and Node.js, as well as traditional technologies like 
              PHP and MySQL.
            </p>
            <p>
              I have hands-on experience from internships at TGS Technology LLC and Tara Web Studio, 
              where I've contributed to improving system performance, optimizing database queries, 
              and delivering high-quality software solutions. I'm also actively engaged in virtual 
              work experiences and have contributed to research publications in the field.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <i className="fas fa-code"></i>
                <div>
                  <h3>Clean Code</h3>
                  <p>Writing maintainable and efficient code</p>
                </div>
              </div>
              <div className="highlight-item">
                <i className="fas fa-rocket"></i>
                <div>
                  <h3>Performance</h3>
                  <p>Optimizing applications for speed and scalability</p>
                </div>
              </div>
              <div className="highlight-item">
                <i className="fas fa-users"></i>
                <div>
                  <h3>Collaboration</h3>
                  <p>Working effectively in team environments</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Project Completion</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15%+</div>
              <div className="stat-label">Performance Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


