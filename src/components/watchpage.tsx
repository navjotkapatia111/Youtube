import  { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {togglemenu} from '../utilities/appslice'
import {useSearchParams } from 'react-router-dom'
import Comments from './comments'
import Livechat from './livechat'

const Watchpage = () => {
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('v'))
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(togglemenu())
  },[dispatch])
  return (
    <div className='flex flex-col w-full'>
    <div className='px-5 flex w-full'>
      <div>
      <iframe width="900" height="400"
       src={"https://www.youtube.com/embed/"+searchParams.get('v') }
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       </div>
       <div className='w-full'>
        <Livechat/>
       </div>
       </div>
       <Comments/>
       </div>
  )
}

export default Watchpage