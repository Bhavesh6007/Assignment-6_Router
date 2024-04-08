import React from "react";
import Homeimgo from "./Homeimg.jpg"; // Importing the image directly

function Home() {
    return (
        <>
            <div className="div-home" style={{color:"tomato"}}>
                <h1>This is a Home page content</h1>
                <p  style={{color:"darkblue" , fontWeight:"bold" }}>Hello welcome to home page module, provide to service regard product.</p>
               {/* Using the imported image as the src */}
            </div>
            <img src={Homeimgo} alt="Home Image" /> 
        </>
    );
}

export default Home;
