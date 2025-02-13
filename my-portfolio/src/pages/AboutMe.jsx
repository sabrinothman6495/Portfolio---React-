import React from "react";
import "../assets/profilepic.jpeg";
import "../CSS/AboutMe.css";
const AboutMe = () => {
    return (
      <div className="about-me-container">

        <h1>About Me</h1>

        <img src="/src/assets/profilepic.jpeg" alt="profile" />
        <p>Welcome to my portfolio! I'm a web developer</p>
      </div>
    );
  };
  
  export default AboutMe; 
  