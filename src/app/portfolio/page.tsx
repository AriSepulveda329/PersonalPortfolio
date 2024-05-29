import React from "react";
import { projects } from "@/helpers/portfolioProjects";
import ProjectCard from "@/components/ProjectCard";
import "@/styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="grid grid-rows-4 w-full h-full justify-items-center items-center">
      <h1 className=" text-2xl font-medium">
        Take a look to some of my projects!
      </h1>
      <div className="row-span-2 flex w-full justify-around">
        {projects.map(({ name, img, url }, i) => (
          <ProjectCard key={i} title={name} img={img} url={url} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
