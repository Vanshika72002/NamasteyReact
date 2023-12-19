import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonsList from './ButtonsList'
import { AllVideos } from './AllVideos'
import LiveChats from './LiveChats'
export const MainContainer = () => {
  return (
    <>

    <div className='grid basis-10/12'>
      <ButtonsList/>
      <VideoContainer/>
      {/* <AllVideos/> */}
    </div>
    <div className='mt-40'>
      <LiveChats/>
    </div>
    </>
  )
}
