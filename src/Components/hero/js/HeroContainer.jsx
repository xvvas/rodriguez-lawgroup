import React from "react";
import BodyBtn from "../../bodyBtn/js/bodyBtn";
import '../css/heroContainer.css'
function Hero({ title, heroBtnLink1, heroBtnText1, heroBtnStyle1, heroBtnLink2, heroBtnText2, heroBtnStyle2 }) {
    return (
        <main className="heroContainer --paralax">
            <h1 className="hero_h1">{title}</h1>
            <div className="hero-btnContainer">
                <BodyBtn
                linkBtn={heroBtnLink1}
                text={heroBtnText1}
                style={heroBtnStyle1} />
                <BodyBtn
                linkBtn={heroBtnLink2}
                text={heroBtnText2}
                style={heroBtnStyle2} />
            </div>
        </main>
       
    )
  }

  export default Hero;