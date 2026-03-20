import React, { useMemo, useState } from 'react';
import './Projects.css';
import Reveal from './Reveal';

const Projects = () => {
  const projects = useMemo(
    () => [
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
    ],
    []
  );

  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const activeProject = activeProjectIndex == null ? null : projects[activeProjectIndex];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects & Publications</h2>
        <p className="section-subtitle">
          Showcasing my work in software development, research, and engineering
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={index} delay={80 + index * 80}>
              <div
                className={`project-card ${project.color} sr-card-glow`}
                role="button"
                tabIndex={0}
                onClick={() => setActiveProjectIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveProjectIndex(index);
                }}
                aria-label={`Open details for ${project.title}`}
              >
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
                    {project.contributions.slice(0, 3).map((contribution, cIndex) => (
                      <li key={cIndex}>{contribution}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-footer">
                  {project.technologies && (
                    <div className="project-technologies">
                      {project.technologies.slice(0, 3).map((tech, tIndex) => (
                        <span key={tIndex} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  )}
                  <button
                    type="button"
                    className="btn btn-secondary project-details-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProjectIndex(index);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {activeProject && (
          <div
            className="project-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={`Project details for ${activeProject.title}`}
            onClick={() => setActiveProjectIndex(null)}
          >
            <div
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="project-modal-header">
                <div className="project-modal-title">
                  <i className={activeProject.icon}></i>
                  <span>{activeProject.title}</span>
                </div>
                <button
                  type="button"
                  className="project-modal-close"
                  aria-label="Close"
                  onClick={() => setActiveProjectIndex(null)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="project-modal-body">
                <div className="project-modal-type">{activeProject.type}</div>
                <p className="project-modal-description">{activeProject.description}</p>

                <div className="project-modal-section">
                  <h4>Key Contributions</h4>
                  <ul>
                    {activeProject.contributions.map((contribution, cIndex) => (
                      <li key={cIndex}>{contribution}</li>
                    ))}
                  </ul>
                </div>

                {activeProject.technologies && (
                  <div className="project-modal-section">
                    <h4>Technologies</h4>
                    <div className="project-technologies">
                      {activeProject.technologies.map((tech, tIndex) => (
                        <span key={tIndex} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                {activeProject.publication && (
                  <div className="project-modal-section">
                    <h4>Publication</h4>
                    <p className="project-modal-publication">{activeProject.publication}</p>
                  </div>
                )}
              </div>

              <div className="project-modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setActiveProjectIndex(null)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;


