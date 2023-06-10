import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProviders";
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Login = () => {
  const {signIn} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const onSubmit = (data)=>{
      signIn(data.email, data.password)
      .then(result =>{
        const user = result.user;
        console.log(user)
      }).
      catch(error =>{
            console.log(error.message)
      })
    }
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Sign In now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </p>
        </div>
        <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
        {errors.password && <span className="text-red-600">Password field is required</span>}
      </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignIn" />
            </div>
          </form>
          <div>
          </div>
          <div className="text-center mb-5">
            <small>New to this website ? <Link to='/signup' className="text-orange-600 link-hover">Sign Up</Link></small>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
