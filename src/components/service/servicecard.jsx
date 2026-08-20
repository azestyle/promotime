import React from "react";
import { useTranslation } from "react-i18next";
import { ServiceSpecial } from "./servicespecialbtn";







export default function SeriveCard({data}) {
    const { t } = useTranslation();
    const{id,img,header,text}=data
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{t(header)}</h5>
        <p className="card-text">
         {t(text)}
        </p>
        <div className="test-element">
         <ServiceSpecial id={id}/>   
        </div>
      </div>
    </div>
  );
}