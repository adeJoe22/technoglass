import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/navbar/TopBar'
import Navigation from '../components/navbar/Navigation';


export default function Root() {

  return (
    <div>
          
       <div>
        <TopBar/>
         <Navigation/>
       </div>
      
      <Outlet/>
      
    </div>
  )
}
