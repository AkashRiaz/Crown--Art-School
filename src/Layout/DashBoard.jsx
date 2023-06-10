import React from "react";
import {Outlet,Link} from 'react-router-dom'
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin()
  const isInstructors = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
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

         {
          isAdmin ? (<>
            <li>
            <Link to='/dashboard/manageClasses'>Manage Classes</Link>
          </li>
          <li>
            <Link to='/dashboard/manageUsers'>Manage Users</Link>
          </li>
          </>) :( isInstructors? ( <><li>
            <Link to='addaclass'>Add A Class</Link>
          </li>
          <li>
            <Link to='myclass'>My Class</Link>
          </li></>) :<>
             <li>
            <Link to='myenrolledclass'>My Enrolled Class</Link>
          </li>
          <li>
            <Link to='selectedclass'>My Selected Class</Link>
          </li>
          </>
         )}

          
         
          
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
