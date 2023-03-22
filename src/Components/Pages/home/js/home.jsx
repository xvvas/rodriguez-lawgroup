import React from "react";
import Hero from "../../../hero/js/HeroContainer";
import '../css/home.css'
function Home() {
    return (
        <div className="home">
            <Hero 
            title={'PERSONAL INJURY AND WORKERS COMPENSATION ATTORNEY'} 
            heroBtnText1={'Call Us'}
            heroBtnLink1={'tel:3054424323'}
            heroBtnStyle1={'bodyBtn --t1'}/>
            <div className='bio'>
            
            </div>
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