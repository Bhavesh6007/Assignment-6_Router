import React  from "react";
import serviceimg from "./Service.jpg"

export default function Services(){

    return(
        <div className="div-services">            
        <h1  style={{textAlign:"center", color:"tomato"}}>This is service page</h1>
        <img src={serviceimg} alt="Service image" width={1200}></img>
        </div>
    )

}