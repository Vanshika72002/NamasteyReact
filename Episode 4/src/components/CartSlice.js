import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        removeLastItem:(state)=>{
            state.items.pop();
        },
        addItem:(state,action)=>{
            // console.log(state);
            console.log(action);
            state.items.push(action.payload);
        },  
        removeItem:(state,action)=>{
            
            console.log(state);
            // console.log(action.payload);
            const id1=action.payload;
            let id;
            state.items.forEach((element, index) => {
                if (element.id === id1) {
                    ind=index;
                }
              }); 
            state.items.splice(ind,1);
            
        },
        clearCart:(state)=>{
            
            state.items.length=0;
            // or
            // return {items:[]}
        }
    }
})
export const {removeItem,addItem,clearCart}=CartSlice.actions;
export default CartSlice.reducer;