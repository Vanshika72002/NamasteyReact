import React from 'react'
import { setText } from '../utils/searchResultSlice'
export const SearchResult = ({text}) => {
  function searchOnClick(){
      console.log("function called");
      setText("yourrrrr");
  }  return (
    <div className='h-12 w-12/12 mb-0 p-2 flex hover:bg-gray-200' onClick={()=>searchOnClick()}>
        <img className='h-12' src='https://cdn4.iconfinder.com/data/icons/basic-user-interface-2/512/User_Interface-25-512.png' alt='search'/>
        <h2>{text}</h2>
    </div>
  )
}
