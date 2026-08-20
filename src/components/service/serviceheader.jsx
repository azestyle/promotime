import React from "react";
import { useTranslation } from "react-i18next";
import {  useNavigate } from 'react-router-dom';





export function ServiceHeader(){
const { t } = useTranslation();
const navigate=useNavigate();
    return(<>
         <div className="sh-box">
            <h1>{t("services")}</h1>
            <h3 ><span onClick={()=>navigate('/')} className="s-c">{t('home')}</span> / <span>{t('services')}</span></h3>
         </div>
    </>)
}