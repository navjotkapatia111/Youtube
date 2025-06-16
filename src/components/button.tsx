import React from 'react'

type ButtonProps={
    name:String
}
export const Button:React.FC<ButtonProps>=({name})=>{
    return(
        <div>
            <button className='px-5 py-2 m-4 bg-gray-200'>
                {name}
            </button>
        </div>
    )
}