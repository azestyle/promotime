import React from "react"
import { ServiceHeader } from "../components/service/serviceheader"
import { ServiceGive } from "../components/service/servicegive"
import { ServiceCardBox } from "../components/service/servicecardbox"




export function Service(){


    return(<>
      <ServiceHeader/>
        <div className="section">
        <ServiceGive/>
        <ServiceCardBox/>
        </div>
        </>
    )
}