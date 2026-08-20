import React from "react";
import { useTranslation } from "react-i18next";
import {  useNavigate } from 'react-router-dom';
import { ContactMenu } from "../components/Contact/ContactMenu";





export function ContactPage(){

    const { t } = useTranslation();
    const navigate=useNavigate();
return(<>
         <div className="sh-box">
            <h1>{t("contact")}</h1>
            <h3 ><span onClick={()=>navigate('/')} className="s-c">{t('home')}</span> / <span>{t('contact')}</span></h3>
         </div>
     <div className="section">
        <ContactMenu/>
     </div>
</>)
}