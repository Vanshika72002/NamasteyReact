import { createSlice } from "@reduxjs/toolkit";
const searchResultSlice=createSlice({
    name:"search",
    initialState:{
        Input:"",
        Open:false,
        suggestionCache:{}
    },
    reducers:{
        closeResults:(state)=>{
            state.Open=false;
        },
        openResults:(state)=>{
            state.Open=true;
        },
        setText:(state,action)=>{
            state.Input=action.payload;
        },
        cacheResults:(state,action)=>{
            state.suggestionCache={...action.payload,...state.suggestionCache}
        }
    }
})
export const {closeResults,openResults,setText,cacheResults}=searchResultSlice.actions;
export default searchResultSlice.reducer;