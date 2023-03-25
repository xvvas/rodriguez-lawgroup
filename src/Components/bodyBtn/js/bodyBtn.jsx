import React from "react";
import { Link } from 'react-router-dom'
import '../css/bodyBtn.css'
function BodyBtn({ linkBtn, text, styleBtn }){
    return(
        <Link
        to={`${linkBtn}`}
        className={styleBtn} >

            {text}

        </Link>
    )
}

export default BodyBtn;