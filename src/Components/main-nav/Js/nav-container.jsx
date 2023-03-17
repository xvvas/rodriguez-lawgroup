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
      <header className="nav_header">
        <NavBrand />
        <NavIcon getClic={getListenerClic} />
      </header>
      <nav className={`nav_dinamicMenu ${isActive ? '--open' : '--close'}`}>
        <NavLink textLink={'INICIO'} />
        <NavLink textLink={'BIO'} />
        <NavLink textLink={'CASES'} />
        <NavLink textLink={'CONTACT'} />
      </nav>
    </nav>
  );
}

export default Nav;
