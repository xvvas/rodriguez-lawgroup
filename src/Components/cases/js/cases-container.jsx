import React from "react";
import CasesCard from "./cases-card";
import "../css/cases-container.css";
function Cases() {
  return (
    <div className="cases">
      <div className="cases_row">
        <CasesCard
          title={"Seaman v. Cruise Line"}
          subTitle={"$5.75 Million – Settlement – Jones Act"}
          text={
            "A cruise line employee presented himself to the ship’s infirmary for medical treatment. The cruise line deemed the employee unfit for work but was not able to fully diagnosis his condition. As such, the employee was taken to a hospital in the Caribbean which was the cruise line’s next port of call. While receiving medical care at the hospital, the crew member lapsed into a coma and was intubated. After spending a week in the hospital, he was airlifted to the United States where he received the appropriate medical attention. Under the Jones Act, our firm sought damages for the cruise line’s failure to provide adequate medical care. The settlement that was reached ensures that the crew member will be taken care of medically for the rest of his life."
          }
          caseStyle={"casesCard --bg1"}
        />

        <CasesCard
          title={"Pacheco v. Macs Construction"}
          subTitle={"$3.5 Million – Settlement – Construction Accident"}
          text={
            "Alejandro Pacheco was working as a laborer on the ground floor when the building under construction suddenly collapsed and crushed Mr. Pacheco. The collapse occurred at the time when concrete was being poured on the third floor. Mr. Pacheco sustained severe injuries including permanent damage to his spine, hip, and pelvis. Mr. Pacheco argued that the concrete slabs and walls above the first floor had not cured enabling the temporary post shores placed between the first and second floors to withstand the additional weight from above. Expert testimony and OSHA investigators concluded the defendants failed to provide sufficient shoring to provide sufficient shoring support to concrete loads of the third floor."
          }
          caseStyle={"casesCard --bg2"}
        />
        <CasesCard
          title={"Caviglia v. Adventure Sports & The Hartford"}
          subTitle={"$1.97 Million – Verdict – Workers Compensation"}
          text={
            "Alejandro Caviglia was kite surfing and testing equipment for his company when he sustained a tragic accident that left him in a coma for ten months and ultimately claimed his life soon thereafter. The Employer and Insurance Carrier denied all benefits claiming that Mr. Caviglia was not in the course in scope of his employment. Attorney, Javier Rodriguez took the case to trial where the Judge ruled in favor of Mr. Caviglia and awarded payment of all medical bills, past indemnity benefits, death benefits, funeral expenses and attorney’s fees."
          }
          caseStyle={"casesCard --bg3"}
        />
      </div>
      <div className="cases_row">
        <CasesCard
          title={"Arjona v. Associated Industries"}
          subTitle={"$400,000.00 – Settlement – Workers Compensation"}
          text={
            "Claimant was employed as a nurse case manager. As part of her job duties, she was required to be “on call” for certain days and alternating weekends. While “on call” she was involved in a tragic accident with severe injuries, including permanent brain damage. The insurance company denied the case in its entirety alleging that she was not in the course and scope of employment while on the phone as a passenger in a car. Attorney Javier Rodriguez filed a claim with the Division of Administrative Hearings and was able to secure a settlement for the Arjona Family."
          }
          caseStyle={"casesCard --bg4"}
        />

        <CasesCard
          title={"Young v. The Hartford & State Farm Insurance"}
          subTitle={"$350,000.00 – Settlement – Auto Accident"}
          text={
            "Plaintiff, a minor, was a rear seat passenger during a motor vehicle accident. Eric Young sustained multiple crush fractures to his leg as well as a laceration to his face that required over 50 stitches and left a permanent scar. Both of the insurance companies tendered their full policy limits."
          }
          caseStyle={"casesCard --bg5"}
        />
        <CasesCard
          title={"Moore v. FCCI Insurance Company"}
          subTitle={"$225,000.00 – Settlement – Workers Compensation"}
          text={
            "Claimant sustained a back injury that prevented him from a gainful employment. After receiving minimal settlement offers prior to representation, we were successful in settling the case directly with the insurance adjuster."
          }
          caseStyle={"casesCard --bg6"}
        />
      </div>
    </div>
  );
}

export default Cases;
