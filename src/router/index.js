import {createBrowserRouter} from 'react-router-dom'
import Root from '../layout/Root'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import Profile from "../pages/about/Profile"
import QualityAndStandard from "../pages/about/QualityAndStandard"
import City from "../pages/sectors/City"
import Residential from "../pages/sectors/Residential"
import Leisure from "../pages/sectors/Leisure"
import Office from "../pages/sectors/Office"
import Retail from "../pages/sectors/Retail"
import Transport from "../pages/sectors/Transport"
import Automotive from "../pages/sectors/Automotive"
import BulletResistance from "../pages/sectors/BulletResistance"
import AboutLayout from '../layout/AboutLayout'
import SectorLayout from '../layout/SectorLayout'
import Errpage from '../Errpage'
import FacilityLayout from '../layout/FacilityLayout'
import CNC from '../pages/facility/CNC'
import DoubleGlazing from '../pages/facility/DoubleGlazing'
import Drilling from '../pages/facility/Drilling'
import Dulling from '../pages/facility/Dulling'
import Laminating from '../pages/facility/Laminating'
import Tempering from '../pages/facility/Tempering'
import Washing from '../pages/facility/Washing'
import Waterjet from '../pages/facility/Waterjet'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'facility',
        element: <FacilityLayout/>,
        children: [
          {
            path: "cnc",
            element: <CNC/>
          },
          {
            path: "dulling",
            element: <Dulling/>
          },
          {
            path: "waterjet",
            element: <Waterjet/>
          },
          {
            path: "drilling",
            element: <Drilling/>
          },
          {
            path: "washing",
            element: <Washing/>
          },
          {
            path: "laminating",
            element: <Laminating/>
          },
          {
            path: "tempering",
            element: <Tempering/>
          },
          {
            path: "double-glazing",
            element: <DoubleGlazing/>
          },
        ]
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: "sectors",
        element: <SectorLayout/>,
        children: [
          {
            path: "city",
            element: <City/>
          },
          {
            path: "home",
            element: <Residential/>
          },
          {
            path: "leisure",
            element: <Leisure/>
          },
          {
            path: "office",
            element: <Office/>
          },
          {
            path: "transport",
            element: <Transport/>
          },
          {
            path: "retail",
            element: <Retail/>
          },
          {
            path: "automotive",
            element: <Automotive/>
          },
          {
            path: "bulletresistance",
            element: <BulletResistance/>
          },
        ]
      },
      {
        path: "about",
        element: <AboutLayout/>,
        children: [
          {
            path: "profile",
            element: <Profile/>,
            
          },
          {
            path: "quality-standard",
            element: <QualityAndStandard/>
          }
        ]
      },
      {
        path: '*',
        element: <Errpage/>
      },
    ]
    
  }
  
])

export default router