import React from "react";
import ProfileImg2 from "@/assets/profile1.jpg";
import Image from "next/image";
import "@/styles/About.css";

function About() {
  return (
    <div className="flex max-w-full flex-col items-center justify-center mx-40 my-0 pt-8 gap-y-8 aboutSection">
      <h1 className=" text-2xl font-medium">Ari Sepulveda</h1>
      <Image src={ProfileImg2} alt="Ari looking at the beach" />
      <p className="text-center py-3 px-[20vw] text-lg">
        Hi, I'm Ari Alonso Sepulveda Rosales, a passionate software developer
        with experience in programming with React and JavaScript. I love
        creating dynamic and efficient web applications using modern tools like
        Next.js, Node, Express, and Tailwind. I have experience as a full stack
        developer and QA, but my passion and preference lie in development. My
        goal is to continue improving my skills and bringing innovative
        solutions to every project.
      </p>
    </div>
  );
}

export default About;
