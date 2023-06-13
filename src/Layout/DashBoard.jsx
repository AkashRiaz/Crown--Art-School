import React from "react";
import { Outlet, Link } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructors from "../hooks/useInstructor";
import {AiOutlineLogin} from 'react-icons/ai'
import {AiOutlineLogout} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {GrUserManager} from 'react-icons/gr'
import {SiGoogleclassroom} from 'react-icons/si'
import {FaShoppingCart} from 'react-icons/fa'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {MdSubject} from 'react-icons/md'
import {MdOutlineBookmarkAdded} from 'react-icons/md'

const DashBoard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructors] = useInstructors();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className="text-center text-4xl mb-4 text-orange-600">Welcome to Dashboard</h2>
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {isAdmin ? (
            <> 
              <li><h2 className="text-2xl font-bold">Admin Dashboard</h2></li>
              <li className="font-bold text-[17px] hover:text-orange-600">
                <Link to="/dashboard/manageClasses"><SiGoogleclassroom></SiGoogleclassroom>Manage Classes</Link>
              </li>
              <li className="font-bold text-[17px] hover:text-orange-600">
                <Link to="/dashboard/manageUsers"><GrUserManager></GrUserManager>Manage Users</Link>
              </li>
            </>
          ) : isInstructors ? (
            <>
            <li><h2 className="text-2xl font-bold">Instructors Dashboard</h2></li>
              <li className="font-bold text-[17px] hover:text-orange-600">
                <Link to="addaclass"><AiOutlineAppstoreAdd></AiOutlineAppstoreAdd> Add A Class</Link>
              </li>
              <li className="font-bold text-[17px] hover:text-orange-600">
                <Link to="myclass"><MdSubject></MdSubject>My Class</Link>
              </li>
            </>
          ) : (
            <>
            <li><h2 className="text-2xl font-bold">Student Dashboard</h2></li>
              <li className="font-bold text-[17px] hover:text-orange-600">
                <Link to="myenrolledclass"><MdOutlineBookmarkAdded></MdOutlineBookmarkAdded>Enrolled Class</Link>
              </li>
              <li className="font-bold text-[17px] hover:text-orange-600">
                <Link to="selectedclass"><FaShoppingCart></FaShoppingCart>Selected Class</Link>
              </li>
            </>
          )}
          <div className="divider"></div>

          <li className="font-bold text-[17px] hover:text-orange-600">
            <Link to="/"><AiOutlineHome></AiOutlineHome>Home</Link>
          </li>
          <li className="font-bold text-[17px] hover:text-orange-600">
            <Link to="/login"><AiOutlineLogin></AiOutlineLogin> Login</Link>
          </li>
          <li className="font-bold text-[17px] hover:text-orange-600">
            <Link to="/signup"><AiOutlineLogout></AiOutlineLogout>Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
