import React from 'react';
import resumeImg from '../assets/resume.png';
import './Resume.css';

const Resume = () => {
  // Expect portrait in `public/parth_img.jpg` (so CRA can serve it without bundling).
  const parthImgUrl = `${process.env.PUBLIC_URL}/parth_img.jpg`;

  const education = [
    {
      degree: 'Masters of Science (MS) in Computer Science',
      school: 'Pace University, Seidenberg School of Computer Science and Information Systems',
      location: 'New York, NY',
      graduation: 'May 2026',
      gpa: 'GPA: 3.56/4',
      concentration: 'Concentration: Software Developer',
      coursework: [
        'Object Oriented Programming',
        'Data Structures and Algorithms',
        'Web Technology',
        'Applied Mathematics',
        'Statistics',
        'Operating Systems',
        'Theory of Computation',
        'DBMS',
        'Information Systems',
        'Programming Laboratory',
        'Software Engineering',
        'Full Stack Development',
        'Software Testing'
      ]
    },
    {
      degree: 'Bachelors of Technology (KJ Somaiya College of Engineering)',
      school: 'KJ Somaiya College of Engineering (KJSCE)',
      location: 'Mumbai, India',
      graduation: 'July 2024',
      gpa: 'CGPA: 8.43/10',
      concentration: 'Information Technology'
    }
  ];

  const virtualExperience = [
    {
      title: 'AWS SimuLearn - Cloud Practitioner Learning Plan',
      company: 'AWS Skill Builder',
      period: 'February 2026',
      bullets: [
        'Deployed and managed cloud resources including EC2 instances, RDS databases, S3 storage, IAM roles, and VPC networking components.',
        'Implemented secure access controls, configured read replicas, and resolved infrastructure issues through guided cloud-based simulations.'
      ]
    },
    {
      title: 'EA Sports College Football Feature - Design Simulation',
      company: 'The Forage (Electronic Arts)',
      period: 'March 2025',
      bullets: [
        'Proposed a new feature for EA Sports College Football, documented it in a feature proposal, and designed a class diagram with corresponding C++ class definitions.',
        'Optimized the EA Sports College Football codebase by implementing an improved data structure and patching a bug fix.'
      ]
    }
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title resume-title">Resume</h2>
        <p className="section-subtitle resume-subtitle">
          Dark, recruiter-ready preview + key details from your resume (CGPA + latest AWS virtual experience).
        </p>

        <div className="resume-card">
          <div className="resume-card-header reveal reveal-1">
            <div className="resume-pill">
              <i className="fas fa-file-alt" aria-hidden="true"></i>
              Latest Resume (Preview)
            </div>

            <div className="resume-actions">
              <a
                className="btn btn-primary resume-btn"
                href={resumeImg}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <a
                className="btn btn-secondary resume-btn"
                href={resumeImg}
                download="ParthDesai_Resume.png"
              >
                Download
              </a>
            </div>
          </div>

          <div className="resume-body">
            <div className="resume-left reveal reveal-2">
              <div className="resume-person">
                <div className="resume-avatar" aria-label="Profile image">
                  <img
                    src={parthImgUrl}
                    alt="Parth Desai portrait"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.parentElement.querySelector('.avatar-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="avatar-fallback">
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="resume-person-meta">
                  <div className="resume-person-name">Parth Desai</div>
                  <div className="resume-person-role">Software Engineer | Full Stack Developer</div>
                </div>
              </div>

              <div className="resume-preview" aria-label="Resume preview image">
                <img src={resumeImg} alt="Parth Desai resume preview" />
              </div>
            </div>

            <div className="resume-details reveal reveal-3">
              <div className="detail-card">
                <div className="detail-title">
                  <i className="fas fa-graduation-cap" aria-hidden="true"></i>
                  Education Snapshot
                </div>

                <div className="detail-section">
                  <div className="detail-education-item">
                    <div className="detail-education-heading">
                      {education[0].degree}
                    </div>
                    <div className="detail-subtext">{education[0].gpa}</div>
                    <div className="detail-subtext detail-accent">
                      {education[0].concentration}
                    </div>
                    <div className="detail-subtext">{education[0].school}</div>
                    <div className="detail-subtext">{education[0].location} • {education[0].graduation}</div>
                  </div>

                  <div className="detail-education-item">
                    <div className="detail-education-heading">
                      {education[1].degree}
                    </div>
                    <div className="detail-subtext">{education[1].gpa}</div>
                    <div className="detail-subtext detail-accent">{education[1].concentration}</div>
                    <div className="detail-subtext">{education[1].school}</div>
                    <div className="detail-subtext">{education[1].location} • {education[1].graduation}</div>
                  </div>
                </div>

                <div className="detail-coursework">
                  <div className="detail-mini-title">Relevant Coursework</div>
                  <div className="tag-list">
                    {education[0].coursework.map((course, idx) => (
                      <span className="tag" key={idx}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-title">
                  <i className="fas fa-cloud" aria-hidden="true"></i>
                  Virtual Experience (Latest)
                </div>

                {virtualExperience.map((exp, idx) => (
                  <div key={idx} className="detail-block">
                    <div className="detail-block-header">
                      <div className="detail-block-title">{exp.title}</div>
                      <div className="detail-block-period">{exp.period}</div>
                    </div>
                    <div className="detail-subtext">{exp.company}</div>
                    <ul className="detail-bullets">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

