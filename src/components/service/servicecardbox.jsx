import React from "react";
import { servicesData } from "../../assets/handle/data";
import SeriveCard from "./servicecard";





export function ServiceCardBox(){




    return(<>
    <div className="s-c-b">
        {servicesData?.map(el=>(
           <SeriveCard data={el}/> 
        ))}
    </div>
    
    
    </>)
}