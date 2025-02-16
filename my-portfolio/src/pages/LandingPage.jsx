import { Link } from "react-router-dom";
import "../CSS/LandingPage.css";

const LandingPage = () => {
  return (
    <section className="landing-container">
      {/* Background Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="content">
        <h1>Hello, I'm Sabrin Othman</h1>
        <p>A Passionate Web Developer Creating Stunning Designs and Features </p>
        <div className="buttons">
          <Link to="/portfolio" className="btn">View My Work</Link>
          <Link to="/contact" className="btn btn-outline">Let's Connect</Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
