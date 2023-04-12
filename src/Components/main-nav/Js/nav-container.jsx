import '../Css/nav-container.css'
import React, { useState } from "react";
import NavBrand from "./nav-brand";
import NavIcon from "./nav-actionIcon";
import NavALink from './nav-alink';
function Nav() {
  const [isActive, setActive] = useState(false);
	const getListenerClic = () => {
		setActive(!isActive);
	}
  return ( 
    <nav className="navContainer">
      <header className={`nav_header ${isActive ? '--enabled' : '--disabled'}`}>
        <NavBrand />
        <NavIcon 
          getClic={getListenerClic}
          isActive={isActive} />
      </header>
      <nav className={`nav_dinamicMenu ${isActive ? '--open' : '--close'}`}>
        <NavALink 
          getClic={getListenerClic}
				  textLink={'HOME'} 
				  phathLink={'#hero'} />
        <NavALink
          getClic={getListenerClic}
				  textLink={'BIO'} 
				  phathLink={'#bio'} />
        <NavALink
          getClic={getListenerClic}
				  textLink={'CASES'} 
				  phathLink={'#cases'} />
        <NavALink
          getClic={getListenerClic}
				  textLink={'CONTACT'}
				  phathLink={'#contact'} />
      </nav>
    </nav>
  );
}

export default Nav;
