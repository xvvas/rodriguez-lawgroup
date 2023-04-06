import React from "react";
import '../Css/nav-links.css'
function NavALink ({ textLink, phathLink }) {
    return (
        <a
        href={`${phathLink}`}
        className="nav_links" >

            {textLink}

        </a>
    )
  }

  export default NavALink;