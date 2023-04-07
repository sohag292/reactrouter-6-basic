import React from 'react'
import './Friend.css'
import { Link } from 'react-router-dom';
export default function Friend({friend}) {
    const{email,name,id,phone}=friend;
  return (
    <div className='friend'>
        <h3>{name}</h3>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <p><Link to={`/friend/${id}`}>Show me details</Link></p>
    </div>
  )
}
