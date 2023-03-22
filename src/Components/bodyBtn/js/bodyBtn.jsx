import React from "react";
import { Link } from 'react-router-dom'
import '../css/bodyBtn.css'
function BodyBtn({ linkBtn, text, style }){
    return(
        <Link 
        to={`${linkBtn}`}
        className={style} >

            {text}

        </Link>
    )
}

export default BodyBtn;