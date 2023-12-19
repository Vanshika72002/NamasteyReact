import { Api } from "../constants"
import { useEffect,useState } from "react"
const useRestList=()=>{

    const [RestList,setRestList]=useState([]);
   
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6906285&lng=77.2764329&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const Json=await data.json();
        
        setRestList(Json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    return RestList;
}
export default useRestList;