import React from 'react'
// import { MainContainer } from './MainContainer'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

export const Body = () => {
  return (
    <div className='flex flex-row'>
        <SideBar/>
        {/* <MainContainer/> */}
        {/* Outlet will render the children provided by the children element of the RouterProvider */}
        <Outlet/>
    </div>
  )
}
