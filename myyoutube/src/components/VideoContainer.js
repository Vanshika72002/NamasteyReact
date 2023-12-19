import React, { useEffect, useState } from "react";
import VideoCard, { AdCard } from "./VideoCard";
import { youtubeVideoApi } from "../utils/constants";
import { Link} from "react-router-dom";
function VideoContainer(){
        const [videos,setvideos]=useState([]);
        useEffect(()=>{
            getVideos();
        },[]);
        const getVideos=async()=>{
            const data=await fetch(youtubeVideoApi);
            const json=await data.json();
            setvideos(json.items);
        }
        if(videos.length!=0)
        return(
            <>
            
            <div className="flex flex-wrap m-1">
            <AdCard info={videos[0]}/>
                {videos.map((video=><Link to={"/watch?v="+video.id} key={video.id}><VideoCard info={video}/></Link>))}
            {/* <VideoCard info={videos[0]}/> */}
            </div>
            </>
            
        )
}
export default VideoContainer;