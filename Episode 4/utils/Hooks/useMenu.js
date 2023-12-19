import { menu_api } from "../constants";
import { useEffect , useState } from "react"; 
import { useParams } from "react-router-dom";
const useMenu=()=>{

    const [resInfo,setresinfo]=useState([]);
    const[resInfo0,setresinfo0]=useState([]);
    const[resInfo1,setresinfo1]=useState([]);
    const[resInfoo,setresinfoo]=useState([]);
    const[offers,setoffers]=useState([]);
    const [categories,setcategories]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[]); 
    const fetchMenu=async()=>{
        const data=await fetch(menu_api+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        setresinfoo(json?.data?.cards);
        setresinfo0(json?.data?.cards[0]);
        setresinfo1(json?.data?.cards[1]);
        setoffers(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers);
        setcategories(
            json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (items) =>
                items?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
        ));

        if(categories){
            setresinfo(categories[0]?.card?.card?.itemCards);
            
        }
        else{
                setresinfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
                
        }
    }
    // return categories;
    // return [id,resInfo,resInfoo,resInfo0,offers];
    
     return [id,resInfo,resInfoo,resInfo0,offers,categories];
}
export default useMenu;