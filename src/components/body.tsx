import React from 'react'
import Sidebar from './sidebar'
import Head from './head'
import { Outlet } from 'react-router-dom'

const Body: React.FC = () => {
  return (
    <div>
      <Head />
      <div className='grid grid-flow-col'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default Body