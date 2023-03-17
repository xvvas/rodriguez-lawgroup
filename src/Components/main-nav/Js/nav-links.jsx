import React from "react";
import { Link } from 'react-router-dom'
import '../Css/nav-links.css'
function NavLink ({ textLink, phathLink }) {
    return (
        <Link 
        to={`${phathLink}`}
        className="nav_links" >

            {textLink}

        </Link>
    )
  }

  export default NavLink;