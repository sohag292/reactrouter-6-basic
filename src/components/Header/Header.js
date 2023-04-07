import React from 'react'
// import { Link } from 'react-router-dom'
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink'
export default function Header() {
  return (
    <div>
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/friends">Friends</ActiveLink>
        <ActiveLink to="/posts">Posts</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
        <ActiveLink to="/contact">Contact</ActiveLink> 
    </div>
  )
}
