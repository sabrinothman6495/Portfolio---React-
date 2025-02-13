import React from "react";
import "../CSS/Resume.css";

import "../assets/Resume2.pdf";

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-header">
        <h1>Sabrin Othman's Resume</h1>
        <a href="https://docs.google.com/document/d/1VdUZ4w-nDrQmyYcfpmZ-R9Ue1t_otEPIjvOE1b_km78/edit?usp=sharing" target="_blank" rel="noreferrer">View Resume
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
