import React from "react";
import BodyBtn from '../../bodyBtn/js/bodyBtn'
import '../css/cta-container.css'
function Cta({title, textCtaBtn, styleCtaBtn, linkCtaBtn}){
    return(
        <div className="ctaContainer --ctaParalax">
            <div data-aos="zoom-in">
                <p 
                className="cta_title"
                data-aos="fade-up" >
                    {title}
                </p>                
            </div>
          
            <div className="cta-Separator"></div>
            <div 
            className="Buttons"
            data-aos="fade-down">
                <BodyBtn
                style={styleCtaBtn}
                text={textCtaBtn}
                linkBtn={linkCtaBtn}
                />
            </div>
            
        </div>
    )
}

export default Cta