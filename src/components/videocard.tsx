import React from 'react'
interface videoinfo{
  snippet: {
    title: string;
    channeltitle: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
}
interface videocardprops {
  info: videoinfo
}
export const Videocard:React.FC <videocardprops> = ({info}) => {
  if (!info) return null;
  const {snippet,statistics} = info
  return (
    <div className='p-2 m-2 w-72'>
     <img className='rounded-lg' alt='thumbnails' src={info?.snippet?.thumbnails?.medium.url}/>
      <ul>
        <li className='font-bold'>{snippet.title}</li>
        <li>{snippet.channeltitle}</li>
        <li>{statistics.viewCount} views</li>
        <li>{statistics.likeCount} likes</li>
      </ul>
    </div>
  )
}

export const Advideocard:React.FC <videocardprops>= ({info})=>{
  return(
    <div className='p-1 m-1 border border-red-900'>
       <Videocard info={info}/>
    </div>
  )
}