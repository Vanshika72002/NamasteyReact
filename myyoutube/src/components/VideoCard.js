import React from "react";
import { useState } from "react";
function VideoCard({info}){
    const imgsrc=info.snippet.thumbnails.medium.url;
    var [views,setviews]=useState(0);

     ///getting the error ---  Too many rerenders.React limits the number of renders wihtout the following if condition
    if(!views)
        setviews(info.statistics.viewCount);
    if(views>=1000000){
        views=views/1000000;
        views=views.toFixed(2);
        views=views.toString()+"M";
    }
    else if(views>=1000){
        views=views/1000;
        views=views.toFixed(1);
        views=views.toString()+"K";
    }
    var published;
    var date=new Date(info.snippet.publishedAt);
    var current = new Date();
    const diffdate=current.getDate()-date.getDate();
    const diffmonth=current.getMonth()-date.getMonth();
    
    const diffyear=current.getFullYear()-date.getFullYear();
    if(diffyear>0){
        published=diffyear.toString();
        if(diffyear==1)
            published=published+"year ago";
        else if(diffyear>1)
            published=published+"years ago";

    }
    else if(diffmonth>0){
        published=diffmonth.toString();
        if(diffmonth==1)
            published=published+"month ago";
        else if(diffmonth>1)
            published=published+"months ago";

    }
    else if(diffdate>0){
        if(diffdate<=1)
            published=diffdate.toString()+"day ago";
        else
            published=diffdate.toString()+"days ago";
    }
    else{
        published="today"
    }
    if(info)    
    {
        return (
        
            <div className="shadow-lg w-[310px] mr-1 p-3">
                <div>
                    <img src={imgsrc}/>
                </div>
                
                       <div className="m-2 ml-0 flex">
                           <img className="rounded-full w-10 h-10" src={imgsrc}/>
                           <h5>{info.snippet.localized.title}</h5>
                       </div>
                 
                       <div>
                           <h5>{info.snippet.channelTitle}</h5>
                       </div>
        
                       <div>
                          <h5>{views} Views</h5>
                          <h5>{published}</h5>
                       </div>
                    </div>
         ) 
    }    
                
}
export default VideoCard;
export const AdCard=({info})=>{
    
        return(
            <div className="border border-black">
                <VideoCard info={info}/>
            </div>
        )

    
}