import { useDispatch, useSelector } from "react-redux";
import {addItem, removeItem} from './CartSlice';

const MenuCard=(props)=>{
    const {menuData}=props;
    const dispatch =useDispatch();
    const cartItems=useSelector((store)=>store.cart.items);
    const handleAddItems=(menuD)=>{
        console.log(menuD);
        dispatch(addItem(menuD?.card?.info));
    }
    const handleRemoveItem=(menuD)=>{
        console.log(menuD);
        dispatch(removeItem(menuD?.id));
    }
    if(menuData.id)
    return(
        <>

            <div><h1 className="font-bold text-lg">{menuData?.card?.info?.name}</h1>
            </div> 
            <div className="grid grid-cols-[60%_30%_10%] border-b-2">
                <div>
                    <h1>{menuData?.vegClassifier}</h1>
                    <h2>Rs.{menuData?.price/100||menuData?.defaultPrice/100}</h2>
                    <h2>{menuData?.description}</h2>
                </div>
                <div><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+menuData?.imageId} className="w-30 h-full"/>
                </div>    
                <div className="p-1">
                <button className="p-2 font-extrabold text-green-800 bg-green-100 border border-black mt-16 rounded-md opacity-80" 
                    onClick={()=>handleRemoveItem(menuData)}>
                        Remove(-)</button>
                </div>                
            </div>
        </>
    )
    else
    return(
        <>

            <div><h1 className="font-bold text-lg">{menuData?.card?.info?.name}</h1>
            </div> 
            <div className="grid grid-cols-[60%_30%_10%] border-b-2">
                <div>
                    <h1>{menuData?.card?.info?.itemAttribute.vegClassifier}</h1>
                    <h2>Rs.{menuData?.card?.info?.price/100||menuData?.card?.info?.defaultPrice/100}</h2>
                    <h2>{menuData?.card?.info?.description}</h2>
                </div>
                <div>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+menuData?.card?.info?.imageId} className="w-30 h-full"/>
                </div>  
                <div className="p-1">
                    <button className="p-2 font-extrabold text-green-800 bg-green-100 border border-black mt-16 rounded-md opacity-80" 
                    onClick={()=>handleAddItems(menuData)}>
                        Add + </button>
                </div>                  
            </div>
        </>
    )
}
export default MenuCard;