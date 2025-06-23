import React ,{useEffect, useState}from 'react'
import {useDispatch,useSelector} from 'react-redux' 
import Chatmessage from './chatmessage'
import { addmessage } from '../utilities/chatslice'
import type {RootState} from '../utilities/store'
import { Namelist, RandomMessage } from '../utilities/helper'
interface Message{
  name:string,
  message:string
}
const Livechat:React.FC = () => {
  const [livemessage,setlivemessage]=useState<string>('')
  const dispatch=useDispatch()
  const chatmessages = useSelector((store:RootState)=>store.chat.messages)
  useEffect(()=>{
    const i=setInterval(()=>{
      const newmessage:Message={
        name:Namelist(),
        message:RandomMessage()
      }
      dispatch(addmessage(newmessage))
    },700)
    return()=>clearInterval(i)
  },[])
  return (
    <>
    <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {chatmessages.map((c,i)=>(
      <Chatmessage key={i} name={c.name} message={c.message}
       />))}
    </div>

    <form className='w-full p-2 ml-2 border border-black'onSubmit={(e)=>{
      e.preventDefault()
      dispatch(
        addmessage({
          name:'Navjot',
          message:livemessage

        })
      )
      setlivemessage('')
    }}>

      <input className='px-2 w-50' type='text' value={livemessage} onChange={(e)=>{
        setlivemessage(e.target.value)
      }}/>

      <button className='ml-6 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default Livechat