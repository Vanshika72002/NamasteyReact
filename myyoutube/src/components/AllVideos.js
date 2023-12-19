import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { videos_on_search_api } from '../utils/constants';
import { VideoOnSearch } from './VideoOnSearch';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export const AllVideos = () => {
    const urlparams=new URLSearchParams(window.location.search);
    console.log(window.location.search);

  const querystring=urlparams.get("q");
    const [videos,setvideos]=useState([]);
        useEffect(()=>{
            getVideos();
        },[]);
        const getVideos=async()=>{
            const data=await fetch(videos_on_search_api+querystring);
            const json=await data.json();
            console.log("json=");
            console.log(json);
            setvideos(json.items);
            
        }
        
        if(videos.length){
            return(
            <div>
                 {videos.map((video)=><Link to={"/watch?v="+video.id.videoId}>
                    <VideoOnSearch video={video}/>
                    </Link>)}
            </div>
            

        );
            }
        
}
