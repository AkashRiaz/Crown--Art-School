import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext)
  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      const saveUser ={name:loggedUser.displayName, email:loggedUser.email, photo: loggedUser.photoURL}
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(saveUser)
      })
      .then(res=>res.json())
      .then(() =>{})
    })
    .catch(error =>{
      console.log(error.message)
    })
  }
  return (
    <div>
         <div className="divider">OR</div>
       <div className="text-center mb-5">
       <button onClick={handleGoogleSignIn} className="btn btn-square btn-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
       </div>
    </div>
  );
};

export default SocialLogin;
