import '../Css/nav-container.css'
import React, { useState } from "react";
import NavBrand from "./nav-brand";
import NavLink from "./nav-links";
import NavIcon from "./nav-actionIcon";
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
        <NavLink 
				  textLink={'HOME'} 
				  phathLink={'/'} />
        <NavLink 
				  textLink={'BIO'} 
				  phathLink={'#BIO'} />
        <NavLink 
				  textLink={'CASES'} 
				  phathLink={'#CASES'} />
        <NavLink 
				  textLink={'CONTACT'}
				  phathLink={'#BIO'} />
      </nav>
    </nav>
  );
}

export default Nav;
