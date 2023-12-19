import { useState } from "react";

const CheckingDarkMode=()=>{
        const [colorbg,setcolorbg]=useState("bg-white");
        const [textcolor,settextcolor]=useState("text-black")
        const [buttontext,setbuttontext]=useState("Dark Mode");
    return(
        <>        
            <button className="bg-sky-500 hover:bg-sky-700 rounded m-1 p-2" onClick={
            ()=>{
                if(buttontext==="Dark Mode"){
                    setbuttontext("Light Mode")
                    setcolorbg("bg-black")
                    settextcolor("text-white")
                }
                else{
                    setbuttontext("Dark Mode");
                    setcolorbg("bg-white");
                    settextcolor("text-black");
                }
                

            }
        }>{buttontext}</button>
        <h1 className={colorbg+" "+textcolor}> this is a text</h1>
        </>

      )  
}
export default CheckingDarkMode;