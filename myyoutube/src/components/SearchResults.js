import React from 'react'
import { SearchResult } from './SearchResult'
import { useDispatch, useSelector } from 'react-redux';
import { Search_suggestions_API } from '../utils/constants';
import { useState,useEffect } from 'react';
import store from '../utils/store';
import { cacheResults } from '../utils/searchResultSlice';
export const SearchResults = () => {
  
  const cache=useSelector((store)=>store.search.suggestionCache);
  const ResultsOpen=useSelector((store)=> store.search.Open);
  const Input=useSelector((store)=> store.search.Input);
  const dispatch=useDispatch();
  const [suggestions,setsuggestions]=useState([]);
    useEffect(()=>{

        //Debouncing and caching

        const timer=setTimeout(()=>{
        if(cache[Input]){
          setsuggestions(cache[Input]);
        }
        else {getSuggestions()}
        },200);
        // getSuggestions();
        return()=>{
          clearTimeout(timer);
        }
    },[Input]);
    const getSuggestions=async()=>{
        
        const data=await fetch(Search_suggestions_API+Input);
        const json=await data.json();
        setsuggestions(json[1]);
        dispatch(cacheResults({
          [Input]:json[1],
        }));
        
    }
  if(ResultsOpen==false)
    return(<></>);
  else{
    if(suggestions.length!=0){
      return (
        <div className="border border-black w-[600px] rounded-lg  m-2 shadow-lg  bg-white">
            {suggestions.map((suggestion=><SearchResult text={suggestion} key={suggestion}/>))}
        </div> 
        )
    }
  }
}
