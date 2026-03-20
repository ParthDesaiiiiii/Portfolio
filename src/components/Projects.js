import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Expense Management System',
      type: 'Research Publication',
      description: 'A comprehensive expense management system developed as part of a research project published in the 2023 4th IEEE Global Conference for Advancement in Technology (GCAT).',
      contributions: [
        'Undertook a literature survey for the topic',
        'Contributed to the development of flowchart of the application present in the paper',
        'Solely crafted the algorithm of the application mentioned in the paper'
      ],
      publication: 'E. Johri, P. Desai, P. Soni, H. Jain and N. Sanganeria, "Expense Management System," 2023 4th IEEE Global Conference for Advancement in Technology (GCAT), Bangalore, India, 2023, pp. 1-6',
      icon: 'fas fa-file-alt',
      color: 'primary'
    },
    {
      title: 'E-Commerce Website',
      type: 'Web Development',
      description: 'A fully functional e-commerce site built using WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL during my internship at Tara Web Studio.',
      contributions: [
        'Designed and implemented complete e-commerce functionality',
        'Integrated payment and shopping cart features',
        'Ensured seamless website integration and functionality',
        'Achieved 100% project completion aligned with client expectations'
      ],
      technologies: ['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      icon: 'fas fa-shopping-cart',
      color: 'secondary'
    },
    {
      title: 'EA Sports College Football Feature',
      type: 'Software Engineering',
      description: 'Proposed and designed a new feature for EA Sports College Football, including comprehensive documentation and code optimization.',
      contributions: [
        'Created Feature Proposal documentation',
        'Designed class diagram with C++ class definitions',
        'Optimized codebase with improved data structures',
        'Implemented bug fixes and performance improvements'
      ],
      technologies: ['C++', 'Object-Oriented Design', 'Software Engineering'],
      icon: 'fas fa-gamepad',
      color: 'primary'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects & Publications</h2>
        <p className="section-subtitle">
          Showcasing my work in software development, research, and engineering
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.color}`}>
              <div className="project-header">
                <div className="project-icon">
                  <i className={project.icon}></i>
                </div>
                <div className="project-type">{project.type}</div>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-contributions">
                <h4>Key Contributions:</h4>
                <ul>
                  {project.contributions.map((contribution, cIndex) => (
                    <li key={cIndex}>{contribution}</li>
                  ))}
                </ul>
              </div>
              {project.technologies && (
                <div className="project-technologies">
                  {project.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
              )}
              {project.publication && (
                <div className="project-publication">
                  <h4>Publication:</h4>
                  <p>{project.publication}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


