import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
function NavIcon ({getClic}) {
    return (
        <div 
        onClick = {getClic}
        className="nav_icon">
            <MdMoreHoriz />
        </div>
    )
  }

  export default NavIcon;