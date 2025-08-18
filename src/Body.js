import Login from "./components/Login"

import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import Browse from "./components/Browse";
const Body = () => {
  const approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },
    {
      path:"/browse",
      element:<Browse/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body;
