import React from "react";
import OrderForm from "../components/order/orderform";
import { useTranslation } from "react-i18next";






export function Order(){
    const{t}=useTranslation();
    return(<>
        <div className="sh-box">
          <h1>{t('sendQuery')}</h1>
          <h3 ><span onClick={()=>navigate('/')} className="s-c">{t('home')}</span> / <span>{t('sendQuery')}</span></h3>
        </div>
        <div className="section">
          <OrderForm/>
        </div>
    </>
    )
}