import { Link } from "react-router-dom";
import { Api } from "../../utils/constants";
import { useState,useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../utils/Hooks/UserContext";
export const Filter=()=>{
    const [text,settext]=useState("Enter Restaurant or cafe");
    const {loggedinuser,setvalue}=useContext(UserContext);
    const handleOnChange=(e)=>{
        setvalue(e.target.value);
    }
    return (
        <div className="h-16 flex m-1 border border-black p-2 flex-wrap justify-between items-center">
            <div className="flex" >
                <Link to="/Top" className="bg-sky-500 hover:bg-sky-700 rounded m-1 p-2 ">Top</Link>
                <Link to="/FastDelivery" className="bg-sky-500 hover:bg-sky-700 rounded m-1 p-2">Fast Delivery</Link>
                <Link to="/LessThan300" className="bg-sky-500 hover:bg-sky-700 rounded m-1 p-2">Less than Rs. 300</Link>
                <Link to="/between300and600" className="bg-sky-500 hover:bg-sky-700 rounded m-1 p-2">Rs. 300-Rs. 600</Link>
                {/* <form action="/UserChoice">
                <input type="submit" value="Submit"/>
                    <label for="cuisine">Select cuisines:</label>
                    <select name="cuisine" id="cuisine" multiple>
                        <option value="Italian">Italian</option>
                        <option value="North Indian">North Indian</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Pizzas">Pizzas</option>
                    </select>
                    
                </form> */}
                
           </div>
           <div>
                <label htmlFor="searchBar m-2">Click</label>
                <input type="search" id="searchBar" value={loggedinuser} onChange={handleOnChange} className="p-1 border border-black m-2"/>
                
                <Link to="/userChoice" className="bg-sky-500 hover:bg-sky-700 rounded m-1 p-2" id={text}>Submit</Link>
           </div>
        </div>
    )
}
// export default Filter;
export let listcopy;