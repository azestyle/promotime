import React  from "react";
import hs from '../../assets/img/hs.webp'
import { useTranslation } from "react-i18next";


export function HomeService(){
const{t}=useTranslation();


    return(
        <>
        <div className="hs-big">
           
           <h1>{t("who")}</h1>
        
        <div className="home-service">
            <div className="hs-text">
                <p>{t('text1')}</p>
                     <p>{t('text2')}</p>
                         <p>{t('text3')}</p>
            </div>
            <div className="hs-img-box">
                <img src={hs} />
            </div>
        </div>
        </div>
        </>
    )
}