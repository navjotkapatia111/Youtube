import React from 'react'
import { Buttonlist } from './buttonlist'
import Videocontainer from './videocontainer'

const Maincontainer = () => {
  return (
    <div className='col-span-1'>
        <Buttonlist/>
        <Videocontainer/>
    </div>
  )
}

export default Maincontainer