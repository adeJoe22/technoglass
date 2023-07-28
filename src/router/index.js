import {createBrowserRouter} from 'react-router-dom'
import Root from '../layout/Root'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Facility from '../pages/Facility'
import Products from '../pages/Products'
import Profile from "../pages/about/Profile"
import QualityAndStandard from "../pages/about/QualityAndStandard"
import City from "../pages/sectors/City"
import HomeSector from "../pages/sectors/Home_Sector"
import Leisure from "../pages/sectors/Leisure"
import Office from "../pages/sectors/Office"
import Retail from "../pages/sectors/Retail"
import Transport from "../pages/sectors/Transport"
import World from "../pages/sectors/World"
import AboutLayout from '../layout/AboutLayout'
import SectorLayout from '../layout/SectorLayout'


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
        element: <Facility/>
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
            element: <HomeSector/>
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
            path: "world",
            element: <World/>
          },
        ]
      },
      {
        path: 'about',
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
    ]
  }
])

export default router