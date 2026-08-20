import React from "react"
import HomeSlider from "../components/home/HomeSlider"
import { HomeService } from "../components/home/HomeService"
import ServiceSlider from "../components/home/ServiceSlider"
import { HomeProduct } from "../components/home/HomeProduct"


export function Home(){


    return(
        <>
        <div className="section">
          <HomeSlider/>  
          <HomeService/>
          <HomeProduct/>
          <ServiceSlider/>
        </div>
        
              
        </>
    )
}