import React, { useContext } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return (
            <div>
              <div className="flex justify-center items-center w-full h-screen bg-gray-100 absolute">
                <progress
                  id="progress"
                  className="z-10 bg-white shadow-lg rounded-full border-2 border-gray-300 w-20 h-20 animate-spin"
                  value="50"
                  max="100"
                ></progress>
              </div>
            </div>
          );
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>;
};

export default PrivateRoutes;