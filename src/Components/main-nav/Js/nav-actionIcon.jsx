import React from 'react';
import '../Css/nav-actionIcon.css'
import { MdExpandMore } from 'react-icons/md';

function NavIcon ({ getClic, isActive }) {
    return (
        <div 
        onClick = {getClic}
        className='nav_icon'>
                <MdExpandMore className={`${isActive ? '--up' : '--down'}`}/>
        </div>
    )
  }

  export default NavIcon;