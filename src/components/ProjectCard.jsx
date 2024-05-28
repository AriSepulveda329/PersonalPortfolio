import React from "react";
import "@/styles/ProjectCard.css";
import Image from "next/image";

function ProjectCard({ title, img, url }) {
  return (
    <div className="projectCard">
      <h3>{title}</h3>
      <a href={url}>
        <Image src={img} alt="Visual example for project" />
      </a>
    </div>
  );
}

export default ProjectCard;
