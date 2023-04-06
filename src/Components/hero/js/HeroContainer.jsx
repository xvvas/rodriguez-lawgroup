import React from "react";
import BodyBtn from "../../bodyBtn/js/bodyBtn";
import "../css/heroContainer.css";
function Hero() {
  return (
    <main className="heroContainer --paralax" id="hero">
      <h1 className="hero_h1">
        PERSONAL INJURY AND WORKERS COMPENSATION ATTORNEY
      </h1>
      <div className="hero-btnContainer">
        <BodyBtn
          linkBtn={"tel:3054424323"}
          text={"Call Us"}
          styleBtn={"bodyBtn --t1"}
        />
        <BodyBtn
          linkBtn={"mailto:javier@rodriguez-lawgroup.com"}
          text={"Contact"}
          styleBtn={"bodyBtn --t2"}
        />
      </div>
    </main>
  );
}

export default Hero;
