import { menu_api } from "../../utils/constants";
import MenuCard from "./MenuCard";
import { useEffect , useState } from "react"; 
import ShimmerCard from "./ShimmerCard";
// import CouponDisplay from "./CouponDisplay";
import Offers from "./Offers";
import { useParams } from "react-router-dom";
const Menu=()=>{
    const [resInfo,setresinfo]=useState([]);
    const[resInfo0,setresinfo0]=useState([]);
    const[resInfo1,setresinfo1]=useState([]);
    const[resInfoo,setresinfoo]=useState([]);
    const[offers,setoffers]=useState([]);
    const {id}=useParams();
    
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{
        const data=await fetch(menu_api+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        setresinfoo(json.data.cards);
        console.log("resinfoo=");
        console.log(resInfoo);
    }
    if(resInfoo.length===0){
        console.log("resInfoo");
        console.log(resInfoo);
        return<ShimmerCard/>;
    }
    else{
        console.log("resInfoo");
        console.log(resInfoo);
        setresinfo0(resInfoo[0]);
        setresinfo1(resInfoo[1]);
        setoffers(resInfoo[1]?.card?.card?.gridElements?.infoWithStyle?.offers);
        const categories =
            resInfoo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (items) =>
                items?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
        );
        if(categories.length){
            setresinfo(categories[0]?.card?.card?.itemCards);
        }
        else{
                setresinfo(resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        }
        return(
        <div className="grid w-[800px] ml-[350px]">
            <div className="flex justify-between  border-black border-b-2 border-dashed m-2 ">
                <div className="p-1">
                    {/* <h1>this is restaurant menu</h1> */}
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
                     {offers.map((offer)=><Offers offerData={offer}/>)}   
                </div>
                <div className="m-2">
                     <input type="checkbox" name="veg only" id="veg"/>
                     <label htmlFor="veg">Veg Only</label>
                </div>
                
           </div>
           <div className="ml-40">
                    Top Picks
           </div>
           
           <div className="grid border-y-4 border-gray-500 m-2">
                <div className="grid">
                    <h1 className="text-xl font-bold">Recommended({resInfo?.length})</h1>
                </div>
                <div>
                    {resInfo.map((menu)=><MenuCard menuData={menu}/>)}
                </div>
           </div>
           
        </div>
    );
    }
        
}
export default Menu;