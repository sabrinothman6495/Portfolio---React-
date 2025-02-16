import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div>
        <a href={deployedLink} target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

// Adding PropTypes validation
Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;

  