import React ,{useEffect}from 'react'
import {useDispatch} from 'react-redux' 
import Chatmessage from './chatmessage'

const Livechat:React.FC = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    const i=setInterval(()=>{

    },2000)
    return()=>clearInterval(i)
  },[])
  return (
    <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg'>
      <Chatmessage name='Navjot Kapatia' message='This is my Youtube app' />
    </div>
  )
}

export default Livechat