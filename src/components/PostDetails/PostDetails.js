import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
export default function PostDetails() {
    const post = useLoaderData();
    // console.log(post);
    const navigate = useNavigate();
    const {id,title,userId,body} = post
    const handleGoBack = () =>{
        navigate(-1)
    }
  return (
    <div>
        <h3>PostDetails about your post {id}</h3>
        <h5>{title}</h5>
        <h5>{userId}</h5>
        <p>{body}</p>
        <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}
