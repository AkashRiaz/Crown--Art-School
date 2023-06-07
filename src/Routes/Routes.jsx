import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
          {
             path:'/',
             element:<Home></Home>
          },
            {
                path:'login',
                element:<Login></Login>
            },
            {
              path:'signup',
              element:<SignUp></SignUp>
            }
        ]
    }
  ])

  export default router;
