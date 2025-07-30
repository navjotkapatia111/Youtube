import React, { useEffect, useState } from 'react';
import { togglemenu } from '../utilities/appslice';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../utilities/store';
import { youtube_search_api } from '../utilities/constants';
import { cacheResult } from '../utilities/searchSlice';
import { useNavigate } from 'react-router-dom';

const Head: React.FC = () => {
  const [searchquery, setsearch] = useState<string>('');
  const [suggestions, setsuggestions] = useState<string[]>([]);
  const [showsuggestion, setshowsuggestion] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const searchcache = useSelector((store: RootState) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[searchquery]) {
        setsuggestions(searchcache[searchquery]);
      } else {
        getsearch();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchquery]);

  const getsearch = async () => {
    try {
      const data = await fetch(youtube_search_api + searchquery);
      const json = await data.json();
      const opts = json.items?.map((item: any) => item.snippet.title) || [];
      setsuggestions(opts);
      dispatch(cacheResult({ [searchquery]: opts }));
    } catch (err) {
      console.error('Error fetching suggestions:', err);
      setsuggestions([]);
    }
  };

  const handleSearch = () => {
    if (searchquery.trim()) {
      navigate(`/?q=${encodeURIComponent(searchquery)}`);
      setshowsuggestion(false);
    }
  };

  const handleSuggestionClick = (s: string) => {
    setsearch(s);
    navigate(`/?q=${encodeURIComponent(s)}`);
    setshowsuggestion(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between gap-2 px-2 py-2 sm:px-4 md:gap-4">
        {/* LEFT – logo & hamburger */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            onClick={() => dispatch(togglemenu())}
            className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8"
            alt="menu"
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
          />
          <img
            className="h-6 cursor-pointer sm:h-8"
            alt="YouTube logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/1200px-YouTube_2024.svg.png"
          />
        </div>

        {/* CENTER – search */}
        <div className="relative flex-1 min-w-0 sm:max-w-2xl">
          <div className="flex">
            <input
              type="text"
              value={searchquery}
              onChange={(e) => setsearch(e.target.value)}
              onFocus={() => setshowsuggestion(true)}
              onBlur={() => setshowsuggestion(false)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search"
              className="w-full rounded-l-full border border-gray-300 px-4 py-1.5 text-sm focus:border-blue-500 focus:outline-none sm:text-base"
            />
            <button
              onClick={handleSearch}
              className="rounded-r-full border border-gray-300 bg-gray-100 px-4 py-1.5 hover:bg-gray-200"
            >
              🔍
            </button>
          </div>

          {showsuggestion && suggestions.length > 0 && (
            <div className="absolute left-0 top-full mt-1 w-full sm:w-[32rem] rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSuggestionClick(s)}
                    className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

    
        <div className="flex-shrink-0">
          <img
            className="h-6 cursor-pointer sm:h-8"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Head;
