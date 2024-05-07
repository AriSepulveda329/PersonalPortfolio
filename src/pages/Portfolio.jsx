import React from "react";
import { projects } from "../helpers/portfolioProjects";
import ProjectCard from "../components/ProjectCard";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolioSection">
      <h1>Take a look to some of my projects!</h1>
      <div className="projectsSection">
        {projects.map(({ name, img, url }, i) => (
          <ProjectCard key={i} title={name} img={img} url={url} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
