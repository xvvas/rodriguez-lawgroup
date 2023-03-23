import React from "react";
import '../Css/bio-container.css'
function Bio({ title, text1, text2, imgSrc, imgAlt }){
    return(
        <div className="bioContainer">
            <div className="bio_imgContainer">
                <img clasName='bio_img'
                src={imgSrc} 
                alt={imgAlt} />
            </div>
            <div 
            className="bio_textContainer"
            data-aos="fade-up" >
                <h2 className="bio_h2">
                    {title}
                </h2>
                <h3 className="bio_h3">
                    {text1}
                </h3>
                <p className="bio_p">
                    {text2}
                </p>
            </div>
        </div>
    )
}
export default Bio;