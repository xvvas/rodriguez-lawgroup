import React from "react";
import '../Css/bio-container.css'
function Bio(){
    return(
        <div className="bioContainer">
            <div className="bio_imgContainer">
                <img className='bio_img'
                src={'https://i.imgur.com/VddIPdK.jpg'}
                alt={'Rodriguez-Lawgroup-Ceo'} />
            </div>
            <div 
            className="bio_textContainer"
            data-aos="fade-up" >
                <h2 className="bio_h2">
                    'Javier I. Rodriguez, managing partner'
                </h2>
                <h3 className="bio_h3">
                    'Javier I. Rodriguez, a South Florida native, focuses his practice on personal injury and workers’ compensation matters.'
                </h3>
                <p className="bio_p">
                    'He graduated in 1994 from Florida International University with a bachelor’s degree, majoring in Finance and International Business and received a law degree in 1997 from Syracuse University College of Law. While attending law school, he was a member of the National Trial Team, Moot Court Honor Society and Latin American Law Students Association. He was also an associate editor of the Syracuse Journal of International Law.'
                </p>
            </div>
        </div>
    )
}
export default Bio;