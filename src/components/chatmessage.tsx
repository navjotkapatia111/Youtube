import React from "react";
interface chatparams{
    name:string
    message:string
}
const Chatmessage:React.FC<chatparams> =({name,message})=>{
    return(
        <div className="flex items-center">
            <img 
          className='h-8 cursor-pointer' 
          alt='user' 
          src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
        </div>
    )
}
export default Chatmessage