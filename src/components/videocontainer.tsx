import React, { useEffect, useState } from 'react'
import { youtube_API } from '../utilities/contants'
import {Videocard,Advideocard} from './videocard'
import { Link } from 'react-router-dom'
interface videoitem{
  id:string
}
const Videocontainer: React.FC = () => {
  const [videos,setvideos] = useState<videoitem[]>([])
  useEffect(()=>{
    const getvideos = async()=>{
      try{
      const data = await fetch(youtube_API)
      const json = await data.json()
      console.log(json.items)
      setvideos(json.items|| [])
    }
    catch(e){
      console.log('Failed to fetch',e)
    }
  }
    getvideos()
  },[])
  
  return (
    <div className='flex flex-wrap'>
      { videos?.[0] && <Advideocard info={videos[0]}/>}
      {
      Array.isArray(videos)&&videos.map((video)=>(
      <Link key={video.id} to={"/watch?v="+video.id}>
        <Videocard  info={video}/>
      </Link>
      ))}
       
    </div>
  )
}

export default Videocontainer