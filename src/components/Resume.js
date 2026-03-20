import React from 'react';
import resumeImg from '../assets/resume.png';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">
          Recruiter-friendly preview. Click to view or download your latest resume.
        </p>

        <div className="resume-card">
          <div className="resume-card-header">
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

          <div className="resume-preview" aria-label="Resume preview image">
            <img src={resumeImg} alt="Parth Desai resume preview" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

