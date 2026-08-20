import React from "react";








export function ContactMenu(){



    return(<>
     <div className="contact-info-card">
        <div className="contact-headers">
          <h3>Əlaqə Məlumatları</h3>
      <p className="contact-subtitle">
        Suallarınız və ya sifarişləriniz üçün bizimlə istənilən vaxt əlaqə saxlaya bilərsiniz.
      </p>
        </div>
      

      <div className="contact-list-box">
        <ul className="contact-list">
        
        <li>
          <span className="icon"><i className="fa-solid fa-phone"></i></span>
          <div className="info-content">
            <a href="tel:+994704492326">+994 (70) 449-23-26</a>
          </div>
        </li>

        
        <li>
          <span className="icon"><i className="fa-regular fa-envelope"></i></span>
          <div className="info-content">
            
            <a href="mailto:Promotimeprint@gmail.com">Promotimeprint@gmail.com</a>
          </div>
        </li>

       

        
        <li>
          <span className="icon"><i className="fa-solid fa-clock"></i></span>
          <div className="info-content">
            <span className="label">İş saatları:</span>
            <span>Bazar ertəsi – Şənbə: 09:00 – 19:00</span>
          </div>
        </li>
      </ul>
      </div>

   
    </div>
    </>)
}