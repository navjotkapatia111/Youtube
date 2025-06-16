import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store, { type RootState } from '../utilities/store'
import { Link } from 'react-router-dom'

const Sidebar:React.FC = () => {
  const ismenuopen = useSelector((store:RootState) =>store.app.ismenuopen)
  const dispatch = useDispatch()
  if(!ismenuopen) return null
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
      <li><Link to ='/'>Home</Link></li>
      <li>Shorts</li>
      <li>Videos</li>
      <li>Live</li>
    </ul>
      <h1 className='font-bold'>Subscriptions</h1>
    <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
    </ul>
      <h1 className='font-bold pt-4'>Watch Later</h1>
    <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
    </ul>
    </div>
  )
  
}

export default Sidebar