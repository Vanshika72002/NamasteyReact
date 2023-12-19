import { menu_api } from "../../utils/constants";
import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
// import CouponDisplay from "./CouponDisplay";
import Offers from "./Offers";
import { useParams } from "react-router-dom";
const Menu_Tanisha = () => {
  const [resInfo, setresinfo] = useState(null);
  const [resItem,setResItem] = useState(null);
  const [offers, setoffers] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      menu_api + id + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setresinfo(json.data);
    setResItem(json.data.cards[0]);
    console.log(json);
  };

  if (resInfo === null) {
    return <ShimmerCard />;
  }
  
  const category =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (items) =>
      items?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
  );

  console.log(category);

  return (
    <div className="grid w-[800px] ml-[350px]">
      <div className="flex justify-between  border-black border-b-2 border-dashed m-2 ">
        <div className="p-1">
        
          <h1>{resItem?.card?.card?.info?.name}</h1>
          <h1>{resItem?.card?.info?.cuisines.join(",")}</h1>
          <h1>{resItem?.card?.card?.info?.areaName}</h1>
        </div>
        <div className="p-1 border m-1">
          <h1 className="border-b-2 ">
            {resItem?.card?.card?.info?.avgRating}
          </h1>
          <h1>{resItem?.card?.card?.info?.totalRatingsString}</h1>
        </div>
      </div> 
      <div className="grid  border-black border-b-2 border-solid m-2">
        <div className="flex p-2">
          <h1 className="mr-4">
            {resItem?.card?.card?.info?.sla?.deliveryTime} minutes
          </h1>
          <h1>{resItem?.card?.card?.info?.costForTwoMessage}</h1>
        </div>
        <div className="flex">
          {offers.map((offer) => (
            <Offers offerData={offer} />
          ))}
        </div>
        <div className="m-2">
          <button>veg only</button>
        </div>
      </div>
      <div className="ml-40">Top Picks</div> 

       <div className="grid border-y-4 border-gray-500 m-2">
        <div className="grid">
          <h1 className="text-xl font-bold">Recommended({resItem?.length})</h1>
        </div>
        {/* <div>
          {resItem.map((menu) => (
            <MenuCard menuData={menu} />
          ))}
        </div> */}
      </div>
    </div>
  );
};
export default Menu_Tanisha;
