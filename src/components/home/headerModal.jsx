import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useTranslation } from "react-i18next";
import { ModalList } from './modallist';

export default function HeaderModal({children}) {
const{t,i18n}=useTranslation();

  return (
    <>
      
      <button 
        className="btn btn-primary" 
        type="button" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasRight" 
        aria-controls="offcanvasRight"
      >
       <i className="fa-solid fa-bars"></i>
      </button>

    
      <div 
        className="offcanvas offcanvas-end" 
        tabIndex="-1" 
        id="offcanvasRight" 
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">{t("menu")}</h5>
          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ModalList>
           {children}
          </ModalList>
        </div>
      </div>
    </>
  );
}