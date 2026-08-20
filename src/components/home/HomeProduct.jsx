import React from "react";
import { HomeBtn } from "./homebtn";
import { useTranslation } from "react-i18next";



export function HomeProduct(){
const{t}=useTranslation()


    return(
        <>
        <div className="home-product">
          <h3>{t("product.start")}</h3> 
          <h2>{t("product.header")}</h2> 
           <p>{t("product.text")}</p>
            <div className="h-btn-box">
                 <HomeBtn/>
            </div>
        </div>
        
        </>
    )
}