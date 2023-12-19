import React from 'react'

export const VideoOnSearch = ({video}) => {
    
    if(video){

           
        const videodetails=video.snippet;
        const channeltitle=videodetails.channelTitle;
        const description=videodetails.description;
        const videotitle=videodetails.title;
        const publishedAt=videodetails.publishedAt;
        const thumbnail=videodetails.thumbnails.medium.url;
        return (
            <div className='grid grid-flow-col gap-x-0 gap-y-0 m-2 mr-0 w-[1100px]'>
                <div className='w-[327px] '>
                <img className="rounded-lg w-[326px] h-[200px] hover:cursor-pointer hover:rounded-none hover:border border-black"src={thumbnail}/>
                </div>
                <div className='grid border ml-0 w-[761px] p-2'>
                   <div className='font-mono text-lg'>{videotitle}</div>
                   <div className='flex'>
                    <div className='mr-2 text-black font-thin'>views</div>
                    <div className='font-thin text-black'>{publishedAt}</div>

                   </div>
                   <div className='font-thin text-black'>{channeltitle}</div>
                   <div className='font-thin text-black'>{description}</div>
                </div>
            </div>
        )
    }
}
