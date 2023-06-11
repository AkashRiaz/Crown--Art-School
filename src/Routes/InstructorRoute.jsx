import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import useInstructors from "../hooks/useInstructor";
import { AuthContext } from "../providers/AuthProviders";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructors, isInstructorsLoading] = useInstructors();
    const location = useLocation();

    if(loading || isInstructorsLoading){
        return <div>
        <div className="flex justify-center items-center w-full h-screen bg-gray-100 absolute">
          <progress
            id="progress"
            className="z-10 bg-white shadow-lg rounded-full border-2 border-gray-300 w-20 h-20 animate-spin"
            value="50"
            max="100"
          ></progress>
        </div>
      </div>
    }

    if (user && isInstructors) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;