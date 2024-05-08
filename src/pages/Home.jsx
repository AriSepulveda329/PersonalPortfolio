import React from "react";
import ProfileImg from "../assets/profile3.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="welcomeSection">
        <h2>
          Hello there! <span className="wave">👋</span> I'm Ari
        </h2>
        <h2>Welcome to My React Portfolio</h2>
      </div>
      <div className="imageSection">
        <img src={ProfileImg} alt="Ari posing on garden" />
      </div>
      <div className="descriptionSection">
        <p>
          I'm a passionate React front-end developer dedicated to crafting
          exceptional user experiences through innovative web solutions. With a
          keen eye for detail and a love for clean, efficient code, I thrive on
          turning complex ideas into elegant, intuitive interfaces.
        </p>
      </div>
    </div>
  );
}

export default Home;
