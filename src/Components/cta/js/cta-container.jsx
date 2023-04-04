import React from "react";
import BodyBtn from "../../bodyBtn/js/bodyBtn";
import "../css/cta-container.css";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
function Cta() {
  return (
    <div className="ctaContainer --ctaParalax" id="cases">
      <div data-aos="zoom-in">
        <p className="cta_title" data-aos="fade-up">
          NOTABLE CASES
        </p>
      </div>

      <div className="cta-Separator"></div>
      <div className="cta_btn" data-aos="fade-down">
        <BodyBtn
          styleBtn={"bodyBtn --t1"}
          text={"Visit Us"}
          linkBtn={"https://goo.gl/maps/sZ6fohEPevamv78x5"}
        />
        <BodyBtn
          styleBtn={"bodyBtn --t3"}
          text={<FaLinkedin />}
          linkBtn={"https://www.linkedin.com/in/javier-rodriguez-8a5203100/"}
        />
        <BodyBtn
          styleBtn={"bodyBtn --t3"}
          text={<FaInstagramSquare />}
          linkBtn={"#"}
        />
      </div>
    </div>
  );
}

export default Cta;
