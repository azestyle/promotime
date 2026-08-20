import React from "react";
import ServiceDetail from "../components/service/servicedetails";





export function ProductService(){

const id =localStorage.getItem('productid');

    return(<>
    <ServiceDetail id={id}/>  
    </>  
    )
}