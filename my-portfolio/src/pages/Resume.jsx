import React from "react";
import "../CSS/Resume.css";

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-header">
        <h1>Sabrin Othman's Resume</h1>
        <p>Full Stack Web Developer</p>
        <a
          href="https://docs.google.com/document/d/1VdUZ4w-nDrQmyYcfpmZ-R9Ue1t_otEPIjvOE1b_km78/export?format=pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-link"
        >
          Download Resume
        </a>
      </div>

      {/* Professional Experience Section */}
      <h3>Professional Experience</h3>
      <ul className="experience-list">
        <li className="experience-item">
          <h4>Full Stack Web Developer, Freelance</h4>
          <p>
            • Developed a full stack application for a local business using
            React, Node.js, and MongoDB
          </p>
        </li>
        <li className="experience-item">
          <h4>Delivery Driver, DoorDash and Amazon Flex</h4>
          <p>• Set my own schedule</p>
          <p>• Worked independently</p>
        </li>
      </ul>

      {/* Proficiencies Section */}
      <h3>Proficiencies</h3>
      <ul className="proficiencies-list">
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>

      {/* Education Section */}
      <h3>Education</h3>
      <ul className="education-list">
        <li>B.S. in Economics from John Jay College of Criminal Justice</li>
        <li>
          Full Stack Web Development Certificate from Case Western University
        </li>
      </ul>
    </section>
  );
};

export default Resume;
