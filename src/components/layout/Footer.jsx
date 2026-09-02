import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { footerlistone } from "../../assets/handle/data";
import { Footerbtn } from "../footer/footerbtn";
import { list2 } from '../../assets/handle/data';
import { list3 } from "../../assets/handle/data";
import { Social } from "../footer/social";


export function Footer(){
 const { t, i18n } = useTranslation();
 const navigate = useNavigate();
 
 
    return(<>
   <div className="footer">
    <div className="partners">
    </div>
    <div className="footer-list-box">
       <div className="footer-list">
         <h4>{t("services")}</h4>
        {footerlistone?.map(el=>(
            <Footerbtn prompt={el}/>
        ))}
        </div> 
       <div className="footer-list">
         <h4>{t("pag")}</h4>
        {list2?.map(el=>(
            <Footerbtn prompt={el}/>
        ))}
        </div> 
       <div className="footer-list">
         <h4>{t("contact")}</h4>
        {list3?.map(el=>(
            <Footerbtn prompt={el}/>
        ))}
        </div> 
         <div className="footer-list">
         <h4>{t("socialMedia")}</h4>
         <Social/>
        </div> 
    </div>
    <div className="footer-central">
       <div className="sstop"></div>
       <div className="ssbottom">
        <p> © 2026, PromoTime Printing House.</p>
       <p className="footer-tolink">Developped by <a href="https://www.instagram.com/khayal_hsnl?igsi=YTZkd2ZvdGxqZWgy" rel="noopener noreferrer" target="_blank" className="socialContainer containerOne">Khayal Hasanli </a></p>
       </div>
    </div>
   </div>
    </>)
}

 
         
       