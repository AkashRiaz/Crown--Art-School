import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Instructors from "../pages/Instructors/Instructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import DashBoard from "../Layout/DashBoard";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";

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
           path:'instructors',
           element:<Instructors></Instructors>
          },
          {
             path:'classes',
             element:<AllClasses></AllClasses>
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
    },
    {
      path:'dashboard',
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'manageClasses',
          element:<ManageClasses></ManageClasses>
        },
        {
          path:'manageUsers',
          element:<ManageUsers></ManageUsers>
        }
      ]
    }
  ])

  export default router;
