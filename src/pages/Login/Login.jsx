import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProviders";
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Login = () => {
  const [error,setError] = useState('')
  const {signIn} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const onSubmit = (data)=>{
      signIn(data.email, data.password)
      .then(result =>{
        const user = result.user;
        navigate(from, {replace:true})
        setError(' ')
      }).
      catch(error =>{
            setError(error.message)
      })
    }
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
         
          <img src="https://cdn.svgator.com/images/2021/08/SVG-files-improve-user-experience.png" alt="" />
        </div>
        <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-3xl font-bold text-center">Sign In now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {required:true})}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <span className='text-red-600'>Email field is required</span>}
            </div>
            <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password', { required: true, minLength: 6 })}
            name="password"
            placeholder="Password"
            className="input input-bordered w-full pr-10"
          />
          <span
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}
          </span>
        </div>
        {errors.password && <span className="text-red-600">Password must be 6 word</span>}
      </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignIn" />
            </div>
          </form>
          <div>
          </div>
          <div className="text-center mb-5">
            <small>New to this website ? <Link to='/signup' className="text-orange-600 link-hover">Sign Up</Link></small>
            <p className="text-warning text-xl">{error}</p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
