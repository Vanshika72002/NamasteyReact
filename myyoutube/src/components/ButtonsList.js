import React from "react";
import Button from "./Button";
function ButtonsList(){
    return (
        <div className="flex overflow-x-auto">
            
            {["All","Mixes","News","Movies","Live","Gadgets","Trending","Bollywood Music","Programming","Gaming","Recently Uploaded","Cricket","Cooking"].map((Name)=><Button name={Name} key={Name}/>)}  </div>
    )
}
export default ButtonsList;