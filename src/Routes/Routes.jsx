import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import AddAClass from "../pages/Dashboard/Instructor/AddAClass/AddAClass";
import MyClass from "../pages/Dashboard/Instructor/MyClass/MyClass";
import MyEnrolledClass from "../pages/Dashboard/Student/MyEnrolledClass/MyEnrolledClass";
import MySelectedClass from "../pages/Dashboard/Student/MySelectedClass/MySelectedClass";
import Payments from "../pages/Dashboard/Student/Payments/Payments";
import PrivateRoutes from "./PrivateRoute";
import AdminRoutes from "./AdminRoutes";
import InstructorRoute from "./InstructorRoute";
import FeedBack from "../pages/Dashboard/Admin/ManageClasses/FeedBack";
import UpdatePage from "../pages/Dashboard/Instructor/MyClass/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "myenrolledclass",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
      {
        path: "selectedclass",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "payment",
        element: <Payments></Payments>,
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoutes>
            <ManageClasses></ManageClasses>
          </AdminRoutes>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "feedBack",
        element: <FeedBack></FeedBack>,
      },
      {
        path: "addaclass",
        element: (
          <InstructorRoute>
            <AddAClass></AddAClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },
      {
        path: "updated/:id",
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) =>
          fetch(
            `https://summer-camp-server-side-akashriaz.vercel.app/class/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
