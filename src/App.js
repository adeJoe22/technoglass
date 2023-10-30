import { RouterProvider } from "react-router-dom";
import router from "./router";
// import "node_modules/video-react/dist/video-react.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
