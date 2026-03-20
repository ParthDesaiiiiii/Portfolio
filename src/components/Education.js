import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Masters of Science (MS) in Computer Science',
      concentration: 'Concentration: Full Stack Development',
      school: 'Pace University, Seidenberg School of Computer Science and Information Systems',
      location: 'New York, NY',
      graduation: 'May 2026',
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
      degree: 'Bachelors of Technology (BTech) in Information Technology',
      gpa: 'GPA: 8.43/10',
      school: 'KJ Somaiya College of Engineering (KJSCE)',
      location: 'Mumbai, India',
      graduation: 'July 2024',
      coursework: []
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic background and relevant coursework
        </p>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                {edu.concentration && <p className="concentration">{edu.concentration}</p>}
                <h4 className="school-name">{edu.school}</h4>
                <div className="education-details">
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i> {edu.location}
                  </span>
                  <span className="graduation">
                    <i className="fas fa-calendar"></i> {edu.graduation}
                  </span>
                  {edu.gpa && (
                    <span className="gpa">
                      <i className="fas fa-star"></i> {edu.gpa}
                    </span>
                  )}
                </div>
                {edu.coursework.length > 0 && (
                  <div className="coursework">
                    <h5>Relevant Coursework:</h5>
                    <div className="coursework-tags">
                      {edu.coursework.map((course, cIndex) => (
                        <span key={cIndex} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

