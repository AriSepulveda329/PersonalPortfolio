import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ title, img, url }) {
  return (
    <div className="projectCard">
      <h3>{title}</h3>
      <a href={url}>
        <img src={img} />
      </a>
    </div>
  );
}

export default ProjectCard;
