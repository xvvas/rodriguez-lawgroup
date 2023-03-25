import React from "react";
import Bio from "../../../Bio/Js/bio-container";
import Cases from "../../../cases/js/cases-container";
import Cta from "../../../cta/js/cta-container";
import Hero from "../../../hero/js/HeroContainer";
import "../css/home.css";
function Home() {
  return (
    <div className="home">
      <Hero />
      <Bio />
      <Cta />
      <Cases />
      <div className="cases"></div>
      <div className="contact"></div>
    </div>
  );
}

export default Home;
