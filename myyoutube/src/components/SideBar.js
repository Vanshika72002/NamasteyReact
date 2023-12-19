import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function SideBar() {
  const isMenuOpen=useSelector((store)=> store.app.isMenuOpen);
  if(!isMenuOpen)
    return(
        <div className='bg-white fixed top-20 h-screen'>

            <div>
              <Link to="/"><img className='w-[40px] m-5 mb-2' alt='home' src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png'/>
              <h3 className='m-5 mt-0 font-bold'>Home</h3></Link>
            </div>
            <div>
              <img className='w-[40px] m-5 mb-2' alt='home' src='https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png'/>
              <h3 className='m-5 mt-0'>Shorts</h3>
            </div>
            <div>
              <img className='w-[40px] m-5 mb-2' alt='Subscription' src='https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png'/>
              <h3 className='m-5 mt-0'>Subscription</h3>
            </div>
            <div>
              <img className='w-[50px] h-[40px] m-5 mb-2' alt='You' src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202007/youtube-2935416_1280_0.png?size=690:388'/>
              <h3 className='m-5 mt-0'>You</h3>
            </div>
        </div>
  
      );
  return (
    
    <div className='basis-2/12 max-w-[12.75rem]'>
    <div className='border-b-2 m-2'>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        
        <li>
           Shorts
        </li>
        
        <li>
           Subscription
        </li>
      </ul>
    </div>
    <div className='border-b-2 m-2'>
      <button className='bg-gray-300 w-full font-bold'>You</button>
      <ul>
        <li>
            Your Channel
        </li>
        
        <li>
          History
        </li>
        
        <li>
          Your Videos
        </li>
        <li>
          Watch Later
        </li>
      </ul>
      
    </div>
    <div className='border-b-2 m-2'>
      <h2 className='bg-gray-300 w-full font-bold'>Subscriptions</h2>
      <ul>
        <li>
          GeekMonk
        </li>
      </ul>
    </div>
    <div className='m-2'>
      <h2 className='bg-gray-300 w-full font-bold'>Explore</h2>
      <ul>
        <li>
          Trending
        </li>
        <li>
          Shopping
        </li>
        <li>
          Music
        </li>
      </ul>
    </div>
    
    </div>
  )
}
