// import React, { useMemo } from 'react'
// import {useState} from 'react'
// import { Prime } from '../utilities/helper'
// const Demo = () => {
//   const [text,settext] = useState<string>('')
//   const [darktheme,setdarktheme] = useState<boolean>(false)
//   const prime=useMemo(()=>Prime(text),[text])
//   return (
//     <div className={'m-4 p-2 w-96 border border-black'+(darktheme && 'bg-gray-900 text-white')}>Demo
//     <div>
//       <button onClick={()=>setdarktheme(!darktheme)}>Toggle</button>
//     </div>
//     <div>
//       <input className="border border-black w-72 px-2"
//       type='text' value={text} onChange={(e)=>settext(e.target.value)}/>
//     </div>
//     </div>
//   )
// }

// export default Demo