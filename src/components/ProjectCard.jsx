import React from "react";
import "@/styles/ProjectCard.css";
import Image from "next/image";

function ProjectCard({ title, img, url }) {
  return (
    <div className="flex flex-col items-center max-h-80 cursor-pointer transition-shadow rounded-3xl projectCard">
      <h3 className="text-xl font-medium py-3">{title}</h3>
      <a href={url}>
        <Image src={img} alt="Visual example for project" />
      </a>
    </div>
  );
}

export default ProjectCard;
