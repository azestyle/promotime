import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { detailimg } from "../../assets/handle/data";
import { DetailBtn } from "./detailbtn";
export default function ServiceDetail({id}) {
  const { t,i18n } = useTranslation();
  const navigate=useNavigate();
  const featuresList = t(`serviceDetails.${id}.features`, { returnObjects: true });

  useEffect(() => {
   
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [id]);

  return (
    <div className="service-detail-container">
        <div className="sh-box">
         <h1>{t(`serviceDetails.${id}.title`)}</h1>  
         <h3 ><span onClick={()=>navigate('/')} className="s-c">{t('home')}</span> / <span className="s-c" onClick={() => navigate(`/${i18n.language}/service`)}>{t('services')}</span> / <span>{t(`serviceDetails.${id}.title`)}</span></h3>
        </div>
       <div className="section">
        <div className="detail-img">
         <img src={detailimg[id]} alt="" />
        </div>
        <p className="detail-text">{t(`serviceDetails.${id}.description`)}</p>
        <ul className="detail-list">
        {Array.isArray(featuresList) && featuresList.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

       <div className="detailbtn-box">
        <DetailBtn/>
       </div>

       </div>
      
    </div>
  );
}