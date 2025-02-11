import React from "react";
import './CSS/Resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-header">
        <h1>Sabrin Othman's Resume</h1>
        <a href="/resume.pdf" download className="download-link">
          Download My Resume
        </a>
      </div>
      <h3>Proficiencies</h3>
      <ul className="proficiencies-list">
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
    </section>
  );
};

export default Resume;
