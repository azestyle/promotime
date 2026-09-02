import React, { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import himage from '../../assets/img/promo.webp';
import { HeaderList } from './../home/HeaderList';
import 'flag-icons/css/flag-icons.min.css';
import HeaderModal from "../home/headerModal";



export function Header() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    function changeLang(lang) {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
        console.log(location, 'first');
        console.log(location.pathname, 'second');
        const parts = location.pathname.split("/");
        console.log(parts);
        parts[1] = lang;
        const newPath = parts.join("/");
        console.log(newPath);

        navigate(newPath);
    }
 function handleChange(){
    console.log('workedd');
    window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    
 }


    return (
        <>
            <header>
                <nav>

                    <div className="h-logo"><img src={himage} alt="header" /></div>
                    <div className="h-list">
                        <HeaderList >
                            <div className="btn" onClick={() =>{ handleChange(), navigate(`/${i18n.language}`)}}>{t("home")}</div>
                            <div className="btn" onClick={() => {handleChange(),navigate(`/${i18n.language}/service`)}}>{t("services")}</div>
                            <div className="btn" onClick={() => {handleChange(),navigate(`/${i18n.language}/about`)}}>{t('about')}</div>
                            <div className="btn" onClick={() => {handleChange(),navigate(`/${i18n.language}/contact`)}}>{t('contact')}</div>
                        </HeaderList>
                    </div>
                    <div className="h-activate">
                     <div className="h-language">
                         <button className="change-lang" onClick={() => setIsActive(prew => prew = !prew)}><span className={`fi fi-${i18n.language === 'en' ? 'sh' : i18n.language}`}></span></button>
                         <div className={isActive ? "active" : 'passive'} onClick={() => setIsActive(prew => prew = !prew)}>
                            <button onClick={() => changeLang('az')}><span className="fi fi-az"></span></button>
                            <button onClick={() => changeLang('en')}><span className="fi fi-sh"></span></button>
                            <button onClick={() => changeLang('ru')}><span className="fi fi-ru"></span></button>
                        </div>
                    </div>
                    </div>
                    
                    <div className="h-modal">
                        <HeaderModal>
                            <div className="cards">
                                <div data-bs-dismiss="offcanvas"  className="card-container twitter-card" onClick={() =>{ handleChange(), navigate(`/${i18n.language}`)}}>{t("home")}</div>
                                <div data-bs-dismiss="offcanvas"  className="card-container twitter-card"  onClick={() => {handleChange(),navigate(`/${i18n.language}/service`)}}>{t("services")}</div>
                                <div data-bs-dismiss="offcanvas"  className="card-container twitter-card"  onClick={() => {handleChange(),navigate(`/${i18n.language}/about`)}}>{t('about')}</div>
                                <div data-bs-dismiss="offcanvas"  className="card-container twitter-card"  onClick={() => {handleChange(),navigate(`/${i18n.language}/contact`)}}>{t('contact')}</div>
                                <div className="modal-lang">
                                       <div className="h-language">
                                       <button className="change-lang" onClick={() => setIsActive(prew => prew = !prew)}><span className={`fi fi-${i18n.language === 'en' ? 'sh' : i18n.language}`}></span></button>
                                        <div className={isActive ? "actives" : 'passive'} onClick={() => setIsActive(prew => prew = !prew)}>
                                       <button onClick={() => changeLang('az')}><span className="fi fi-az"></span></button>
                                       <button onClick={() => changeLang('en')}><span className="fi fi-sh"></span></button>
                                       <button onClick={() => changeLang('ru')}><span className="fi fi-ru"></span></button>
                                       </div>
                                        </div>
                                </div>
                               
                            </div>
                        
                        </HeaderModal>
                    </div>
                </nav>

            </header>


        </>
    )
}