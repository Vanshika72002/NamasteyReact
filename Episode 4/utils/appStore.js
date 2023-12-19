import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../src/components/CartSlice'
const appStore=configureStore({
    reducer:{
        cart:cartReducer
    }
});

export default appStore;