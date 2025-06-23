import React, { useEffect, useState } from 'react'
import { togglemenu } from '../utilities/appslice'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../utilities/store'
import { youtube_search_api } from '../utilities/constants'
import { cacheResult } from '../utilities/searchSlice'
import { useNavigate } from 'react-router-dom'

const Head: React.FC = () => {
  const [searchquery, setsearch] = useState<string>('')
  const [suggestions, setsuggestions] = useState<string[]>([])
  const [showsuggestion, setshowsuggestion] = useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const handletogglemenu = () => {
    dispatch(togglemenu())
  }
  const searchcache = useSelector((store: RootState) => store.search)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[searchquery]) {
        setsuggestions(searchcache[searchquery])
      }
      else {
        getsearch()
      }
    }, 200);
    return () => {
      clearTimeout(timer)
    }
  }, [searchquery])

  const getsearch = async () => {
    try {
      const data = await fetch(youtube_search_api + searchquery)
      const json = await data.json()
      const suggestions = json.items?.map((item: any) => item.snippet.title) || []
      setsuggestions(suggestions)
      dispatch(
        cacheResult({
          [searchquery]: suggestions
        })
      )
    } 
    catch (error) {
      console.error('Error fetching suggestions:', error)
      setsuggestions([])
    }
  }

  const handleSearch = () => {
    if (searchquery.trim()) {
      navigate(`/?q=${encodeURIComponent(searchquery)}`)
      setshowsuggestion(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setsearch(suggestion)
    navigate(`/?q=${encodeURIComponent(suggestion)}`)
    setshowsuggestion(false)
  }

  return (
    <div className='flex justify-between items-center px-4 py-2 shadow-lg sticky top-0 bg-white z-50'>
      <div className='flex items-center'>
        <img 
          onClick={handletogglemenu} 
          className='h-8 cursor-pointer' 
          alt='menu' 
          src='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png'
        />
        <img 
          className='h-8 mx-2 cursor-pointer' 
          alt='youtube-logo' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/1200px-YouTube_2024.svg.png'
        />
      </div>

      <div className='flex-1 max-w-2xl mx-4'>
        <div className='flex'>
          <input 
            className='w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500'
            type='text' 
            value={searchquery}
            onChange={(e) => setsearch(e.target.value)}
            onFocus={() => setshowsuggestion(true)}
            onBlur={() => setshowsuggestion(false)}
            placeholder='Search'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch()
              }
            }}
          />
          <button 
            onClick={handleSearch}
            className='px-6 py-2 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200'
          >
            🔍
          </button>
        </div>
        {showsuggestion && suggestions.length > 0 && (
          <div className="absolute bg-white py-2 w-[32rem] shadow-lg rounded-lg border border-gray-200 mt-1">
            <ul>
              {suggestions.map((s) => (
                <li 
                  key={s} 
                  className='py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center'
                  onClick={() => handleSuggestionClick(s)}
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='flex items-center'>
        <img 
          className='h-8 cursor-pointer' 
          alt='user' 
          src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
      </div>
    </div>
  )
}

export default Head