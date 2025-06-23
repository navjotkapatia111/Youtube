import { useState, useEffect } from 'react'
import { youtube_search_api } from '../utilities/contants'
import { useNavigate, useSearchParams } from 'react-router-dom'

interface VideoItem {
  id: {
    videoId: string
  }
  snippet: {
    title: string
    channelTitle: string
    thumbnails: {
      medium: {
        url: string
      }
    }
    publishedAt: string
  }
}

export const Videos = () => {
  const [query, setquery] = useState('')
  const [videos, setvideos] = useState<VideoItem[]>([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const searchQuery = searchParams.get('q')
    if (searchQuery) {
      setquery(searchQuery)
      fetchvideos(searchQuery)
    }
  }, [searchParams])

  const fetchvideos = async (searchTerm?: string) => {
    const searchQuery = searchTerm || query
    if (!searchQuery.trim()) return

    setLoading(true)
    try {
      const res = await fetch(`${youtube_search_api}${encodeURIComponent(searchQuery)}`)
      const data = await res.json()
      setvideos(data.items || [])
    } catch (error) {
      console.error('Error fetching videos:', error)
      setvideos([])
    } finally {
      setLoading(false)
    }
  }

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     navigate(`/?q=${encodeURIComponent(query)}`)
  //     fetchvideos()
  //   }
  // }

  const handleVideoClick = (videoId: string) => {
    navigate(`/watch?v=${videoId}`)
  }

  return (
    <>      
      {loading && (
        <div className="p-4 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        </div>
      )}

      {videos.length > 0 && (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className="cursor-pointer hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden"
              onClick={() => handleVideoClick(video.id.videoId)}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt="thumbnail"
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold line-clamp-2 mb-1">
                  {video.snippet.title}
                </h3>
                <p className="text-xs text-gray-500 mb-1">
                  {video.snippet.channelTitle}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(video.snippet.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && videos.length === 0 && query && (
        <div className="p-4 text-center text-gray-500">
          No videos found for "{query}"
        </div>
      )}
    </>
  )
}