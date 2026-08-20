import React from "react";
import { useTranslation } from "react-i18next";
import { ServiceQuestionBox } from "./serviceqbtn";





export function ServiceGive(){
const { t } = useTranslation();



    return(<>
          <div className="s-give">
            <h2>{t("whatWeOffer")}</h2>
            <p>{t('aboutText')}</p>
            <ServiceQuestionBox/>
          </div>
    </>)
}