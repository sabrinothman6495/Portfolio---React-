import Project from "../components/project";

const projects = [
  { title: "Project 1", image: "/images/project1.jpg", deployedLink: "#", githubLink: "#" },
  { title: "Project 2", image: "/images/project2.jpg", deployedLink: "#", githubLink: "#" },
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => <Project key={index} {...project} />)}
      </div>
    </section>
  );
};

export default Portfolio;
