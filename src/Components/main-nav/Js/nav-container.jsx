import React from "react";
import NavBrand from "./nav-brand";
import NavLink from "./nav-links";
function Nav() {
    return (
        <nav className="navcontainer">
            <header className="nav_header">
                <NavBrand/>
            </header>
            <div className="nav_dinamicMenu">
                <NavLink 
                textLink = {'INICIO'}
                />
                <NavLink 
                textLink = {'BIO'}
                />
                <NavLink 
                textLink = {'CASES'}
                />
                <NavLink 
                textLink = {'CONTACT'}
                />
            </div>
        </nav>
    )
  }

  export default Nav;