// import { menu_api } from "../../utils/constants";
// import MenuCard from "./MenuCard";
// import { useEffect , useState } from "react"; 
// import ShimmerCard from "./ShimmerCard";
// import CouponDisplay from "./CouponDisplay";
// import Offers from "./Offers";
// const RestMenu=()=>{
//     const [resInfo,setresinfo]=useState(null);
//     const[resInfo0,setresinfo0]=useState(null);
//     const[resInfo1,setresinfo1]=useState(null);
//     const[offers,setoffers]=useState(null);

//     // const [res]
//     useEffect(()=>{
//         fetchMenu();
//     },[]);
//     const fetchMenu=async()=>{
//         const data=await fetch(menu_api);
//         const json=await data.json();
//         setresinfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
//         setresinfo0(json?.data?.cards[0]);
//         setresinfo1(json?.data?.cards[1]);
//         setoffers(json.data.cards[1].card.card.gridElements.infoWithStyle.offers);
        
//            
//     }
//     return [1].length===0?<ShimmerCard/>:(
//         <div className="grid border border-black w-[800px] ml-[350px]">
//             <div className="flex justify-between  border-black border-b-2 border-dashed m-2 ">
//                 <div className="p-1">
//                     {/* <h1>this is restaurant menu</h1> */}
//                     <h1>{resInfo0?.card?.card?.info?.name}</h1>
//                     <h1>{resInfo0?.card?.card?.info?.cuisines.join(",")}</h1>
//                     <h1>{resInfo0?.card?.card?.info?.areaName}</h1>
//                  </div>
//                  <div className="p-1 border m-1">
//                     <h1 className="border-b-2 ">{resInfo0?.card?.card?.info?.avgRating}</h1>
//                     <h1>{resInfo0?.card?.card?.info?.totalRatingsString}</h1>
//                  </div>
//            </div>
//            <div className="grid  border-black border-b-2 border-solid m-2">
//                 <div className="flex p-2">
//                     <h1 className="mr-4">{resInfo0?.card?.card?.info?.sla?.deliveryTime} minutes</h1>
//                     <h1>{resInfo0?.card?.card?.info?.costForTwoMessage}</h1>
//                 </div>
//                 <div className="flex">
//                      {offers.map((offer)=><Offers offerData={offer} />)}   
//                 </div>
//                 <div className="m-2">
//                       <button>veg only</button>
//                 </div>
                
//            </div>
//            <div className="ml-40">
//                     Top Picks
//            </div>
           
//            <div className="grid border-y-4 border-gray-500 m-2">
//                 <div className="grid">
//                     <h1 className="text-xl font-bold">Recommended({resInfo?.length})</h1>
//                 </div>
//                 <div>
//                     {resInfo.map((menu)=><MenuCard menuData={menu}/>)}
//                 </div>
//            </div>
           
//         </div>
//     );
// }
// export default RestMenu;