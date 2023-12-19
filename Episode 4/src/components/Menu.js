import MenuCard from "./MenuCard";
import ShimmerCard from "./ShimmerCard";
import Offers from "./Offers";
import { Link } from "react-router-dom";   
import CategoryDisp from "./CategoryDisp"; 
import { useState } from "react";
const Menu=(props)=>{
        const id=props.props[0];
        const resInfo=props.props[1];
        const resInfo0=props.props[3];
        const offers =props.props[4];
        const categories=props.props[5];
        const [showindex,setshowindex]=useState(null);
         if(!categories) 
             return <ShimmerCard/>;

        return(
                // {setcategories(props.props[5]);}
            <div className="grid w-[800px] ml-[350px]">
                <div className="flex justify-between  border-black border-b-2 border-dashed m-2 ">
                    <div className="p-1">
                        <h1>{resInfo0?.card?.card?.info?.name}</h1>
                        <h1>{resInfo0?.card?.card?.info?.cuisines.join(",")}</h1>
                        <h1>{resInfo0?.card?.card?.info?.areaName}</h1>
                    </div>
                    <div className="p-1 border m-1">
                        <h1 className="border-b-2 ">{resInfo0?.card?.card?.info?.avgRating}</h1>
                        <h1>{resInfo0?.card?.card?.info?.totalRatingsString}</h1>
                    </div>
                </div>
                <div className="grid  border-black border-b-2 border-solid m-2">
                        <div className="flex p-2">
                            <h1 className="mr-4">{resInfo0?.card?.card?.info?.sla?.deliveryTime} minutes</h1>
                            <h1>{resInfo0?.card?.card?.info?.costForTwoMessage}</h1>
                        </div>
                        <div className="flex">
                            {offers.map((offer)=><Offers offerData={offer} key={offer.info.offerIds}/>)}   
                        </div>
                        <div className="m-2">
                            <Link to={"/restaurants/"+id+"/vegonly"}>
                                <input id="vegonly" type="checkbox" />
                                <label htmlFor="vegonly">Veg Only</label>
                            </Link>
                        </div>
                        
                </div>
                <div className="ml-40">
                            Top Picks
                </div>
                <div>
                        {categories?.map((category,index)=><CategoryDisp 
                        catdata={category} 
                        showitems={index===showindex?true:false } 
                        setshowindex={()=>setshowindex(index)}
                        key={category.card.card.title}/>
                        )}
                </div>
                
            </div>
        );
}
export default Menu;
// import MenuCard from "./MenuCard";
// import ShimmerCard from "./ShimmerCard";
// import Offers from "./Offers";
// import { Link } from "react-router-dom";    
// import { useState } from "react";
// const Menu=(props)=>{
//         const id=props.props[0];
//         const resInfo=props.props[1];
//         const resInfoo=props.props[2];
//         const resInfo0=props.props[3];
//         const offers =props.props[4];
//         const [vegornonveg,setvegornonveg]=useState("Veg Only");
//         const [menulist,setmenulist]=useState([]);
//          if(!resInfo) 
//              return <ShimmerCard/>;
//             setmenulist(resInfo);
//             return(
//             <div className="grid w-[800px] ml-[350px]">
//                 <div className="flex justify-between  border-black border-b-2 border-dashed m-2 ">
//                     <div className="p-1">
//                         <h1>{resInfo0?.card?.card?.info?.name}</h1>
//                         <h1>{resInfo0?.card?.card?.info?.cuisines.join(",")}</h1>
//                         <h1>{resInfo0?.card?.card?.info?.areaName}</h1>
//                     </div>
//                     <div className="p-1 border m-1">
//                         <h1 className="border-b-2 ">{resInfo0?.card?.card?.info?.avgRating}</h1>
//                         <h1>{resInfo0?.card?.card?.info?.totalRatingsString}</h1>
//                     </div>
//            </div>
//            <div className="grid  border-black border-b-2 border-solid m-2">
//                 <div className="flex p-2">
//                     <h1 className="mr-4">{resInfo0?.card?.card?.info?.sla?.deliveryTime} minutes</h1>
//                     <h1>{resInfo0?.card?.card?.info?.costForTwoMessage}</h1>
//                 </div>
//                 <div className="flex">
//                      {offers.map((offer)=><Offers offerData={offer}/>)}   
//                 </div>
//                 <div className="m-2">
//                     {/* {console.log("id is")}
//                     {console.log(id)}
//                     {console.log("path is")}
//                     {console.log("restaurants/"+id+"/vegonly")}
//                      */}
    
//                         <input id="vegonly" type="checkbox" onClick={
//                             ()=>{
//                                 if(vegornonveg==="Veg Only"){
//                                      setvegornonveg("All");
//                                     setmenulist(resInfo.filter((menu)=>menu?.card?.info?.itemAttribute.vegClassifier=='VEG'));
//                                 }
//                                 else{
//                                      setvegornonveg("Veg Only");
//                                     setmenulist(resInfo);

//                                 }
//                             }
//                         } />
//                         <label htmlFor="vegonly">{vegornonveg}</label>
                   
//                 </div>
                
//            </div>
//            <div className="ml-40">
//                     Top Picks
//            </div>
           
//            <div className="grid border-y-4 border-gray-500 m-2">
//                 <div className="grid">
//                     <h1 className="text-xl font-bold">Recommended({menulist?.length})</h1>
//                 </div>
//                 <div>
//                     {menulist.map((menu)=><MenuCard menuData={menu} id={menu.card.info.id}/>)}
//                 </div>
//            </div>
           
//         </div>
//     );
// }
// export default Menu;