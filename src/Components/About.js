import React from "react";
import abut from "./aboutpage.jpg";

const About = () =>{
    return(
        <>
       <div>
      <h2  style={{textAlign:"center", color:"tomato"}}>This is About page content</h2>
      <p style={{color:"darkblue" , fontWeight:"bold" }}>Welcome to our website!</p>
      <p style={{color:"darkblue" , fontWeight:"bold" }}>We are a team of passionate developers creating awesome web applications using React.</p>
      <p style={{color:"darkblue" , fontWeight:"bold" }}>Feel free to explore our website and learn more about our products and services.</p>
      </div>
      <img src={abut} alt="imge of about" />
        
        </>
    )
}
export default About;