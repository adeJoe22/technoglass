import Header from "./components/navbar/Header";
import TopBar from "./components/navbar/TopBar";
import {RouterProvider} from 'react-router-dom'
import router from "./router";


function App() {
  return (
   <>

  <RouterProvider router={router}/>
   </>
  );
}

export default App;
