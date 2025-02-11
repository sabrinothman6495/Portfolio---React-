const Project = ({ title, image, deployedLink, githubLink }) => {
    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <div>
          <a href={deployedLink} target="_blank">Live Demo</a>
          <a href={githubLink} target="_blank">GitHub Repo</a>
        </div>
      </div>
    );
  };
  
  export default Project;
  