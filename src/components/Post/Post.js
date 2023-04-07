import React from 'react'
import { Link,  useNavigate } from 'react-router-dom';

export default function Post({post}) {
    const {id, title, body} = post;

    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate(`/post/${id}`)
    }
  return (
    <div>
        <h5>ID: {id}</h5>
        <h5>{title}</h5>
        <p>{body}</p>
        <Link to={`/post/${id}`}>Show post</Link>
        <Link to={`/post/${id}`}><button>Show Post Detils</button></Link>
        <button onClick={handleNavigation}>With button handler</button>
    </div>
  )
}
