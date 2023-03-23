import React from "react";
import Bio from "../../../Bio/Js/bio-container";
import Hero from "../../../hero/js/HeroContainer";
import '../css/home.css'
function Home() {
    return (
        <div className="home">
            <Hero 
            title={'PERSONAL INJURY AND WORKERS COMPENSATION ATTORNEY'} 
            heroBtnText1={'Call Us'}
            heroBtnLink1={'tel:3054424323'}
            heroBtnStyle1={'bodyBtn --t1'}
            heroBtnText2={'Visit Us'}
            heroBtnLink2={'#Contact'}
            heroBtnStyle2={'bodyBtn --t2'}/>
            
            <Bio 
            title={'Javier I. Rodriguez, managing partner'}
            text1={'Javier I. Rodriguez, a South Florida native, focuses his practice on personal injury and workers’ compensation matters.'}
            text2={'He graduated in 1994 from Florida International University with a bachelor’s degree, majoring in Finance and International Business and received a law degree in 1997 from Syracuse University College of Law. While attending law school, he was a member of the National Trial Team, Moot Court Honor Society and Latin American Law Students Association. He was also an associate editor of the Syracuse Journal of International Law.'}
            imgSrc={'https://i.imgur.com/quT0uz9.png'}
            imgAlt={'Rodriguez-Lawgroup-Ceo'} />  
            <div className='cta'>
    
            </div>
            <div className='cases'>
    
            </div>
            <div className='contact'>
    
            </div>
        </div>
    )
  }

  export default Home;