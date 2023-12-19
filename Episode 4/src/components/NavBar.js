// import { Api } from "../../utils/constants";
import { Logo } from "../../utils/constants";
import { cart } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
// import UserContext from "../../utils/Hooks/UserContext";
// import { useContext } from "react";
// import appStore from "../../utils/appStore";
import { useSelector } from "react-redux";
const NavBar=()=>{
        const [colorbg,setcolorbg]=useState("bg-white text-black");
        const [buttontext,setbuttontext]=useState("Dark Mode");
        const [btncolor,setbtncolor]=useState("bg-black text-white");
        // const {loggedinuser}=useContext(UserContext);
        const cartItems=useSelector((store)=>store.cart.items);
    return(
       <div className={colorbg+" flex justify-between items-center border border-black m-1 "}>
            <div><img src={Logo} className="w-32 m-2"/></div>
            <div>
                <ul className="flex p-4 m-4"> 
                    <Link to="/" className="m-3  hover:bg-gray-700">Home</Link>
                    <Link to="/about" className="m-3 hover:bg-gray-700">About</Link>
                    <Link to="/contact" className="m-3 hover:bg-gray-700">Contact</Link>
                    <button className={btncolor+" hover:bg-gray-700 rounded m-1 p-2"} onClick={
            ()=>{
                if(buttontext==="Dark Mode"){
                    setbuttontext("Light Mode")
                    setcolorbg("bg-black text-white")
                    // settextcolor("text-white")
                    setbtncolor("bg-white text-black")
                }
                else{
                    setbuttontext("Dark Mode");
                    setcolorbg("bg-white text-black");
                    setbtncolor("bg-black text-white")
                    // settextcolor("text-black");
                }
                

            }
        }>{buttontext}</button>
                    {/* <li className="underline"> {loggedinuser}</li> */}
                    {/* {console.log(loggedinuser)} */}
                    <Link to="/usercart" className="m-3 "><img src={cart} className="w-12"/></Link>
                    <li className="font-bold from-neutral-950 text-lg hover:bg-gray-700">-{cartItems.length} Items</li>
                </ul>
            </div>
       </div>
    )
}
export default NavBar;