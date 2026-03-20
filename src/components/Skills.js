import React from 'react';
import './Skills.css';
import Reveal from './Reveal';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'PHP', 'SQL'],
      icon: 'fas fa-code'
    },
    {
      title: 'Frontend Technologies',
      skills: ['HTML5', 'CSS3', 'React', 'jQuery', 'JavaScript'],
      icon: 'fas fa-paint-brush'
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'PHP', 'Express.js'],
      icon: 'fas fa-server'
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
      icon: 'fas fa-database'
    },
    {
      title: 'Tools & Frameworks',
      skills: ['Git', 'WordPress', 'Visual Studio', 'Eclipse', 'PyCharm'],
      icon: 'fas fa-tools'
    },
    {
      title: 'Software Development',
      skills: ['Agile', 'Scrum', 'RESTful APIs', 'Software Engineering'],
      icon: 'fas fa-laptop-code'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical expertise and technologies I work with
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Reveal key={index} delay={80 + index * 60}>
              <div className="skill-category sr-card-glow">
                <div className="skill-category-header">
                  <i className={category.icon}></i>
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


