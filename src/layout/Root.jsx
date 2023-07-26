import React from 'react'
// import Home from '../pages/Home'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/navbar/TopBar'
import Header from '../components/navbar/Header'

export default function Root() {
  return (
    <div>
      {/** 
       * header comes in here
       */}
       <TopBar/>
       <Header/>
      <Outlet/>
       {/** 
       * footer comes in here
       */}
    </div>
  )
}
