import React from "react";
import '../css/heroContainer.css'
function Hero({ title }) {
    return (
        <main className="heroContainer --paralax">
                <h1 className="hero_h1">{title}</h1>
        </main>
    )
  }

  export default Hero;