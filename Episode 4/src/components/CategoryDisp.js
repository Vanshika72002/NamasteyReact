import { useState } from "react";
import MenuCard from "./MenuCard";
const CategoryDisp=({catdata,showitems,setshowindex})=>{
    const resInfo=catdata.card.card.itemCards;
    const handleClick=()=>{
            setshowindex();
    }
     
    return (
        <div className="grid border-y-4 border-gray-500 m-2">
            <div className="flex justify-between shadow-lg m-2 p-4 cursor-pointer" onClick={handleClick} >
                <span className="text-xl font-bold">{catdata.card.card.title} ({catdata.card.card.itemCards.length})</span>
                <span>🔽</span> 
            </div>
            <div>
                {showitems?resInfo.map((menu)=><MenuCard 
                menuData={menu} 
                id={menu.card.info.id}
                key={menu.card.info.id}
                />):<h1></h1>}
            </div>
        </div>
    )
}
export default CategoryDisp;