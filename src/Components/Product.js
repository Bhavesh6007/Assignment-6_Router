import React  from "react";
import watchs from "./watch.jpeg"

export  default function Product(){
    return(
        <>
                    <h1  style={{textAlign:"center", color:"tomato"}}>This is Product page content</h1>

        <div className="div-product" style={{textAlign:"center"}} >
            {/* <p style={{color:"darkblue" , fontWeight:"bold" }}>hi, welcome to the product.</p>
            <p style={{color:"darkblue",fontWeight:"bold"}} >here we can provide deferent types of products.</p>
        */}

        <div className="watch"  style={{color:"darkblue" , fontWeight:"bold" }}><h3>Watch</h3>
        <p ><strong>Price:</strong> $450</p>
        <p><strong>Description:</strong>Welcome to Timepiece Tales, your ultimate destination for all things horological! Dive into the fascinating world of watches with our carefully curated collection of content designed to educate, entertain, and inspire both seasoned enthusiasts and budding aficionados alike.

From the intricate mechanisms ticking within classic mechanical watches to the cutting-edge technology powering modern smartwatches, we unravel the mysteries behind every timepiece. Immerse yourself in the rich history, craftsmanship, and innovation that define the art of watchmaking.</p>
        <p><strong>Image:</strong></p>
        <img  src={watchs} alt="Watch Image" width={900}/></div>
        
        </div> 
        </>
    )

}