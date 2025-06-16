import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'

const Body:React.FC = () => {
  return (
    <div className='grid grid-flow-col'>
    <Sidebar/>
    <Outlet />
    </div>
  )
}

export default Body