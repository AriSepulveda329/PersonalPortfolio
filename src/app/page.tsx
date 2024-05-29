import React from "react";
import "@/styles/Home.css";

function Home() {
  return (
    <div className={"grid h-full max-h-[92vh] grid-cols-2 grid-rows-4"}>
      <div className="h-full w-full col-span-2 flex flex-col justify-center items-center bg-green-100">
        <h2 className="text-2xl">
          Hello there! <span className="wave">👋</span> I'm Ari
        </h2>
        <h2 className="text-2xl">Welcome to My Portfolio</h2>
      </div>
      <div className="imageSection row-span-3 h-full bg-cover"></div>
      <div className="row-span-3 flex justify-center items-center text-center text-2xl p-40">
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
