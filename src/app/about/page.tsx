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
        Hello, I'm Ari Alonso Sepulveda Rosales, a 25-year-old software engineer
        who graduated from the University of Colima. I have +2 years of
        experience in front-end development at CIMA Group, a logistics company
        in Manzanillo, Colima, Mexico. While I have also worked as a QA on other
        projects for TCS, my true passion lies in front-end development. I am
        committed to further developing my skills in React and JavaScript,
        continually pushing myself to new limits. My goal is to expand my
        knowledge and capabilities to create increasingly sophisticated and
        innovative projects.
      </p>
    </div>
  );
}

export default About;
