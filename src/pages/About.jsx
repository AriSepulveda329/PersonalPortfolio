import React from "react";
import ImagePlaceholder from "../assets/img-placeholder.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="aboutSection">
      <h1>Ari Sepulveda</h1>
      <img src={ImagePlaceholder} />
      <p>
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
