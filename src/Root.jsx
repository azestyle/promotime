import React, { useEffect } from "react";
import { Route, Routes, useParams, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Service } from "./pages/Service";
import { Layout } from "./pages/Layout";
import i18n from "./i18n";
import { ProductService } from "./pages/Product";
import { Order } from "./pages/Order";
import { About } from "./pages/About";
import { ContactPage } from './pages/Contact';




export function Rooter() {
//     useEffect(()=>{
//  const handler = (lng) => {
//     console.log("Dil dəyişdi:", lng);
//   };
//   i18n.on("languageChanged", handler);
//   return () => {
//     i18n.off("languageChanged", handler);
//   };


//     },[])
    
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
      <Route path="/:lang" element={<Layout />}>
        <Route index element={<Home />} />          
        <Route path="service" element={<Service />} /> 
        <Route path="service/product" element={<ProductService/>}/> 
        <Route path="order" element={<Order/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<ContactPage/>}/>
      </Route>
    </Routes>
  );
}