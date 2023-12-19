import React from 'react'
import store from '../utils/store';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SearchResults } from './SearchResults';
import { closeResults, openResults,setText } from '../utils/searchResultSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Head() {
  const [inputText,setinputText]=useState("");
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
      dispatch(toggleMenu());
  }
  
  const openSearchResultsHandler=()=>{
    dispatch(openResults());
  }
  const closeSearchResultsHandler=()=>{
    dispatch(closeResults());
  }
  const HandleChange=(e)=>{
    setinputText(e.target.value);
    dispatch(setText(e.target.value));
    // setInputText(e.target.value);
  }
  const handleEnter=(event)=>{
      if(event.key=="Enter"){
        // console.log("enter pressed");
        
        document.getElementById("search").click();
      }
         
     
  }
  return (
    <>
    
    <div className='flex w-full border-black border shadow-lg bg-white fixed'>
      {/* sticky top-0--to fix the navbar while scrolling */}
    <div className='flex m-2 w-3/12 p-2'>
      <button onClick={()=>toggleMenuHandler()}>
        <img src='https://i.pinimg.com/736x/96/33/0f/96330f95e5f907dd65fec5f6cf6a1faf.jpg' className='h-16' alt='SideBarOpener'/></button>
      <img className='h-16 m-2' src='https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg ' alt='youtube Logo'/>
    </div>

    <div className=''>
      <div className='flex m-2 w-[650px] p-2'>
      <input  onKeyDown={handleEnter} onFocus={()=>openSearchResultsHandler()} onBlur={()=>closeSearchResultsHandler()} onChange={HandleChange} value={inputText} type='text' placeholder='Search' className='h-12 m-2 mr-0 border-2 border-gray-400 rounded-l-full p-2 w-4/5'/>
      <Link to={"/search?q="+inputText}><button id="search" className='border-2 border-black rounded-r-full m-2 ml-0 mr-0 h-12 bg-slate-200'><img className='h-12' src='https://cdn4.iconfinder.com/data/icons/basic-user-interface-2/512/User_Interface-25-512.png' alt='search'/></button></Link>
      <button className='border-black rounded-full m-2 ml-0 h-12'><img className='h-8 w-10' src='https://cdn1.iconfinder.com/data/icons/material-audio-video/21/mic-512.png' alt='mic'/></button>
      </div>
      <div className='p-2 fixed'>
      <SearchResults/>
      </div>
    </div>
    <div className='flex m-2 w-3/12 p-2 place-content-end '>

      <button className='float-right'><img src='https://static.thenounproject.com/png/3750242-200.png' alt='create' className='h-7 m-2 w-7'/></button>
      <button><img src='https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2020/01/youtube-bell-icons_5e15f997b9fee.png' alt='bell' className='m-2 h-7 w-7'/></button>
      <button><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5958mvxyOALrWelcizzxdX48KqChi9Vh2Sr_NETQ&s' alt='account' className='m-2 h-7 w-7'/></button>     
    </div>
    </div>
    </>
  )
}
export default Head;