import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const NavBar = () => {
  const {user} = useContext(AuthContext)
    const navMenu = (
        <div className="md:flex md:space-x-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors" className={({ isActive }) => (isActive ? "active" : "")}>Instructors</NavLink>
          </li>
          <li>
            <NavLink to="/classes" className={({ isActive }) => (isActive ? "active" : "")}>Classes</NavLink>
          </li>
          {/* {user?.email && (
            <>
              <li>
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/dashboard">Dashboard</NavLink>
              </li>
            </>
          )}
          {
            user?.email ? ' ': <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/resister">Resister</NavLink>
          </li>
          } */}
        </div>
      );
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {navMenu}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navMenu}
    </ul>
  </div>
  <div className="navbar-end mr-2 md:mr-12">
        {user ? (
          <>
            <button className="mr-2 custom-primary-btn" onClick={handleLogOut}>
              LogOut
            </button>
            <label
              tabIndex={0}
              className="btn btn-ghost border border-orange-400 border-b-2 btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} title={user?.displayName} />
              </div>
            </label>
          </>
        ) : (
          <>
            <NavLink className="text-lg font-medium" to="/login" >
              Login
            </NavLink>
          </>
        )}
      </div>
</div>
    );
};

export default NavBar;