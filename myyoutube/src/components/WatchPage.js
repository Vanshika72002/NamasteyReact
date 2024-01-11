import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu} from '../utils/appSlice';
import { CommentsContainer } from './CommentsContainer';

import { LiveChat } from './LiveChat';
export const WatchPage = () => {

  const urlparams=new URLSearchParams(window.location);
  const keyvalue=urlparams.get("search");
  const param1=new URLSearchParams(keyvalue);
  const videoid=param1.get("v");
  // const [videos,setvideos]=useState([]);
  //       useEffect(()=>{
  //           getVideos();
  //       },[]);
  //       const getVideos=async()=>{
  //           const data=await fetch('https://youtube.googleapis.com/youtube/v3/videos?id=FtJRfsJgtYI&key=AIzaSyAkBDqRrnlfwgg96lfhsXs6U1TbpAR9-zU');
  //           console.log(data.url);
  //           const json=await data.json();
  //           console.log(json);
  //           setvideos(json.items);
  //           console.log(videos);
  //       }
  
  const dispatch=useDispatch();
  useEffect(()=>{dispatch(closeMenu());},[]);
  return (
    <div className='flex'>
      <iframe width="900" 
      height="450" 
      src={"https://www.youtube.com/embed/"+videoid}
      title="YouTube video player" 
      // frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>

      </iframe>
      <div>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <LiveChat/>
        </div>
    </div>
      // <div className='m-32 font-extrabold text-4xl'>watch page</div>
  )
}
