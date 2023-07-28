import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/navbar/TopBar'
import Header from '../components/navbar/Header'
import Drawer from '../components/navbar/Drawer';
import { links } from '../components/navbar/links';

export default function Root() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/** 
       * header comes in here
       */}

       <TopBar/>
       <div>
         <Drawer links={links} isOpen={isOpen} toggleDrawer={toggleDrawer}/>
       <Header links={links} toggleDrawer={toggleDrawer}/>
       </div>
      
      <Outlet/>
       {/** 
       * footer comes in here
       */}
    </div>
  )
}
