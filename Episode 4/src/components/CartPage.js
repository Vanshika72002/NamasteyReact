import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import { clearCart } from "./CartSlice";
const CartPage=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{ 
        dispatch(clearCart());
    }
    return(
        <>
            <h1 className="font-extrabold text-2xl text-center">Welcome to the Cart</h1>

            {cartItems.length===0
                ?
                (<><h1 className="font-xl text-center m-3">Your cart is empty<br/>Fill it with delicious food😋</h1> 
                <Link to="/"><button className="bg-slate-700 p-2 border border-black w-2/12 ml-[630] mt-2">Visit Restaurants</button></Link>
                </>)
                :
                <div className="w-6/12 m-auto">
                {console.log(cartItems)}
                {cartItems?.map((cartitem)=>
                    <MenuCard menuData={cartitem} key={cartitem.id}/>
                )}
                <div >
                <button className="border bg-slate-950 text-sky-300 rounded-lg border-black w-2/12 ml-52 mt-3" onClick={handleClearCart}>
                    Clear Cart
                </button>
                </div>
                </div>
            }
        </>
    )
}
export default CartPage;
