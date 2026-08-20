import React from "react";
import { HomeService } from "../components/home/HomeService";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";









export function About(){
    const{t}=useTranslation();
    const navigate=useNavigate()
    return<>
      <div className="sh-box">
            <h1>{t("about")}</h1>
            <h3 ><span onClick={()=>navigate('/')} className="s-c">{t('home')}</span> / <span>{t('about')}</span></h3>
         </div>
       <div className="section">
        <HomeService/>
       </div>
    </>
}