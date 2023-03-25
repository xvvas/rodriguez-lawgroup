import React from "react";
import "../css/cases-card.css";
function CasesCard({ title, subTitle, text, caseStyle }) {
  return (
    <div data-aos="zoom-in-up" className={caseStyle}>
      <div className="card_texBox">
        <h3 className="card_h3">{title}</h3>
        <h4 className="card_h4">{subTitle}</h4>
        <p className="card_p">{text}</p>
      </div>
    </div>
  );
}

export default CasesCard;
