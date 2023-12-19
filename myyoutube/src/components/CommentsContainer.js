import React from 'react'

export const CommentsContainer = () => {
    const commentsData=[
        {
            name:"Aksh",
            comment:"insightful video",
            replies:[
                {
                    name:"ChannelName",
                    comment:"Thankyou",
                    replies:[
                        {
                            name:"Aksh",
                            comment:"♥",
                            replies:[]
                        }
                    ]
                }
            ]
        },
        {
            name:"Swaraj",
            comment:"Since when are you making videos?",
            replies:[
                {
                    name:"ChannelName",
                    comment:"2015",
                    replies:[
                        {
                            name:"Swaraj",
                            comment:"okay okay",
                            replies:[
                                {
                                    name:"ChannelName",
                                    comment:"Yes",
                                    replies:[
                                        {
                                            name:"Swaraj",
                                            comment:"How long did it take to become successful in this field",
                                            replies:[
                                                {
                                                    name:"ChannelName",
                                                    comment:"It took me almost 4 long years😪",
                                                    replies:[
                                                        {
                                                            name:"Swaraj",
                                                            comment:"Oh!",
                                                            replies:[{
                                                                name:"ChannelName",
                                                                comment:"Yes!!",
                                                                replies:[]}
                                                            ]
                                                        }
                                
                                                    ]
                                                }
                                            ]
                                        }
                
                                    ]
                                }
                            ]
                        }

                    ]
                }
            ]
        },
        {
            name:"Jancy",
            comment:"Nice content keep growing",
            replies:[],
        }
    ]
    //one comment structure:
    const Comment=({data})=>{
        const {name,comment,replies}=data;
        return(
            <div className='flex'>
                <div><img className="w-9 h-9" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5958mvxyOALrWelcizzxdX48KqChi9Vh2Sr_NETQ&s"/></div>
                <div className='grid'>
                    <p className='font-bold'>{name}</p>{comment}
                </div>
            </div>
           
        )
    }
    const CommentsList=({comments})=>{
        return(
        commentsData.map((comment,index)=>
            (
                <div>
                <Comment data={comment} key={index}/>
                <div className='border border-l-black m-2'>
                {
                    <CommentsList comments={comment.replies}/>
                }
                </div>
                </div>
            )
            ))
    }
  return (
    <div>
    
        {/* rendering single comment */}
        {/* <Comment data={commentsData[0]}/> */}
        {/* rendering multiple comments (without replies)*/}
        <CommentsList comments={commentsData}/>
        
    </div>


  )
}
