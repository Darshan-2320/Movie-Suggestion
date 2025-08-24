  import Login from "./Login"
  import { createBrowserRouter } from "react-router-dom";
  import { RouterProvider } from "react-router-dom"
  import Browse from "./Browse";
  import Error from "./Error";
  import MovieDetails from "./MovieDetails";
import WatchList from "./WatchList";
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
      {
        path:"/movie/:id",
        element:<MovieDetails/>,
      },
      {
        path:"/watchlist",
        element:<WatchList/>,
      },
      {
        path:"*",
        element:<Error/>,
      },
    ]);
    return (
      <div>
        <RouterProvider router={approuter}/>
      </div>
    )
  }

  export default Body;
