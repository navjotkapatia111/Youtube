import React from 'react'
import { Buttonlist } from './buttonlist'
import Videocontainer from './videocontainer'
import { Videos } from './videos'
import { useSearchParams } from 'react-router-dom'

const Maincontainer = () => {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q')

  return (
    <div className='col-span-1'>
      {searchQuery ? (
        <Videos />
      ) : (
        <>
          <Buttonlist />
          <Videocontainer />
        </>
      )}
    </div>
  )
}

export default Maincontainer