import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'TGS Technology LLC',
      location: 'North Carolina, USA',
      period: 'June 2025 - August 2025',
      achievements: [
        'Developed and maintained web applications using front-end and back-end technologies, improving system performance by 15%',
        'Collaborated with team members to implement new features and resolve issues, reducing development turnaround time by 20%',
        'Wrote and optimized SQL queries, increasing data retrieval efficiency by 25%',
        'Participated in testing, debugging, and code reviews, improving code quality and reducing post-deployment bugs by 18%',
        'Communicated effectively with technical and non-technical stakeholders, leading to a 15% improvement in requirement clarity and project alignment'
      ],
      type: 'professional'
    },
    {
      title: 'Software Development Intern',
      company: 'Tara Web Studio LLP',
      location: 'Mumbai, India',
      period: 'January 2024 - May 2024',
      achievements: [
        'Designed and implemented a fully functional e-commerce site using WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL, contributing to seamless website integration and functionality',
        'Collaborated with cross-functional teams and directly engaged with clients to gather requirements, ensuring 100% project completion aligned with client expectations and industry standards',
        'Facilitated seamless communication between technical teams and stakeholders, resulting in a reduction in project revisions and improved client satisfaction'
      ],
      type: 'professional'
    },
    {
      title: 'AWS SimuLearn - Cloud Practitioner Learning Plan',
      company: 'AWS Skill Builder',
      location: 'Virtual',
      period: 'February 2026',
      achievements: [
        'Deployed and managed cloud resources including EC2 instances, RDS databases, S3 storage, IAM roles, and VPC networking components.',
        'Implemented secure access controls, configured read replicas, and resolved infrastructure issues through guided cloud-based simulations.'
      ],
      type: 'virtual'
    },
    {
      title: 'Software Engineer Design Simulation',
      company: 'Electronic Arts - The Forage',
      location: 'Virtual',
      period: 'March 2025',
      achievements: [
        'Proposed a new feature for EA Sports College Football, documented it in a Feature Proposal, and designed a class diagram with corresponding C++ class definitions',
        'Optimized the EA Sports College Football codebase by implementing an improved data structure and patching a bug fix'
      ],
      type: 'virtual'
    },
    {
      title: 'Software Development Job Simulation',
      company: 'Datacom - The Forage',
      location: 'Virtual',
      period: 'March 2025',
      achievements: [
        'Reviewed a web application, diagnosed and resolved application bugs by analyzing root causes and implementing fixes to enhance functionality and performance'
      ],
      type: 'virtual'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey and the impact I've made in various roles
        </p>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.type}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className="experience-badge">{exp.type === 'virtual' ? 'Virtual' : 'Professional'}</span>
                </div>
                <h4 className="company-name">{exp.company}</h4>
                <p className="experience-location">{exp.location}</p>
                <p className="experience-period">{exp.period}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, aIndex) => (
                    <li key={aIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


