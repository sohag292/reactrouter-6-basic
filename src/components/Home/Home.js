import React from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'

export default function Home() {
  const navigation = useNavigation()
  return (
    <div> 
        <Header/>
        <div>{navigation.state === 'loading' ? 'Loading...':''}</div>
        <Outlet/>
    </div>
  )
}
