import React from "react";
import "../assets/profilepic.jpeg";
import "../CSS/AboutMe.css";
const AboutMe = () => {
    return (
      <div className="about-me-container">

        <h1>About Me</h1>

        <img src="/src/assets/profilepic.jpeg" alt="profile" />
        <p>Welcome to my React Portfolio project! I'm a web developer who has created this little project with react using simply the react frame work. </p>
        <p> I enjoy learning, developing, trying diffrent foods and skateboarding</p>
      </div>
    );
  };
  
  export default AboutMe; 
  