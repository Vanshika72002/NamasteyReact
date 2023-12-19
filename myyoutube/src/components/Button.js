import React from 'react'

function Button(props){
  return (
    <button className="border m-2 h-fit p-2 rounded-md bg-black text-white min-w-fit">{props.name}</button>
  )
}
export default Button;
