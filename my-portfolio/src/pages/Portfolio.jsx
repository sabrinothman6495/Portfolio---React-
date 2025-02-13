import Project from "../components/Project";

const projects = [
  { title: "Project 1", image: "/images/project1.jpg", deployedLink: "#", githubLink: "#" },
  { title: "Project 2", image: "/images/project2.jpg", deployedLink: "#", githubLink: "#" },
];

const Portfolio = () => {
  return (
    <section>
      <h1>Portfolio</h1>
      <p>Check out some of my projects:</p>
      <div>
        {projects.map((project, index) => <Project key={index} {...project} />)}
      </div>
      <a href="github.com" target="_blank">View More on GitHub</a>
    </section>
  );
};

export default Portfolio;
