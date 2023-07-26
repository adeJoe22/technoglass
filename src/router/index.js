import {createBrowserRouter} from 'react-router-dom'
import Root from '../layout/Root'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Facility from '../pages/Facility'
import Products from '../pages/Products'
import Sectors from '../pages/Sectors'

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
        path: 'sectors',
        element: <Sectors/>
      },
      {
        path: 'about',
        element: <About/>
      },
    ]
  }
])

export default router