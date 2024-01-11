import React from 'react'

export const SignInPage = () => {
  return (
    <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
        <div className='text-3xl text-red-600 font-bold'>
            NETFLIX
        </div> 
        <div className='flex flex-row min-h-screen justify-center items-center'>

        
        <div className='border border-black bg-black opacity-90 p-4 w-1/5 h-5/6'>
            <div className='text-white m-3'>Sign In</div>
            <div className='flex flex-col justify-center items-center'>
            <><input className='w-3/4 border border-black bg-gray-700 opacity-100 m-3 text-sm p-3' placeholder='Email or Phone Number' />
            <input className='w-3/4 border border-black bg-gray-700 opacity-100 m-3 text-sm p-3' placeholder='Password' />
            <button className='w-3/4 border border-black bg-red-700 text-white m-3 text-xl'>Sign In</button></>
            </div>
        </div>   
    </div>
    </div>
      )
}
