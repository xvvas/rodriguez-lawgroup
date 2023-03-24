import React from "react";
import BodyBtn from '../../bodyBtn/js/bodyBtn'
import '../css/cta-container.css'
function Cta({title, textCtaBtn, styleCtaBtn, linkCtaBtn, textCtaBtn1, styleCtaBtn1, linkCtaBtn1, textCtaBtn2, styleCtaBtn2, linkCtaBtn2}){
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
            className="cta_btn"
            data-aos="fade-down">
                <BodyBtn
                style={styleCtaBtn}
                text={textCtaBtn}
                linkBtn={linkCtaBtn}
                />
                <BodyBtn
                style={styleCtaBtn1}
                text={textCtaBtn1}
                linkBtn={linkCtaBtn1}
                />
                <BodyBtn
                style={styleCtaBtn2}
                text={textCtaBtn2}
                linkBtn={linkCtaBtn2}
                />
            </div>
            
        </div>
    )
}

export default Cta