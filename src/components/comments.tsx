import React from 'react'

interface commentsdata{
    name:string
    text:string
    replies?:commentsdata[]
  }
  interface commentprops{
    data:commentsdata
  }
  interface commentlistprops{
    comments:commentsdata[]
  }
  const commentdata:commentsdata[]=[{
    name:'Navjot',
    text:'Great Video',
    replies:[{
      name:'gpt',
      text:'Tanks!',
    }]
}]
const Comment:React.FC<commentprops>=({data})=>{
  const {name,text}=data
 return (
 <div className='flex'>
  <img className='w-10 h-10' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'></img>
  <div className='px-3'>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
  </div>
 </div>
 )
}
const Commentlist:React.FC<commentlistprops> = ({comments})=>{
  return comments.map((comment,index)=>(
    <div key={index} >
      <Comment data = {comment}/>
      {comment.replies && comment.replies.length > 0 && (
      <div className='pl-5 border border-black ml-5'>
        <Commentlist comments={comment.replies}/>

      </div>
      )}
    </div>
  ))
}
const CommentsContainer:React.FC = () => {
  return (
    <div className='m-5 p-2'>
       <h1 className='text 2xl font-bold'>Comments:</h1> 
       <Commentlist comments={commentdata} />
        </div>
  )
}

export default CommentsContainer