import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {
  const {createUser} = useContext(AuthContext)
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm()
    const onSubmit =(data)=>{
        console.log(data)
        const { password, confirmPassword } = data;

        // Validate if the password and confirm password match
        if (password !== confirmPassword) {
          alert('Password and Confirm Password must match!');
          return;
        }
        createUser(data.email, data.password)
        .then(result =>{
          const user = result.user;
          console.log(user)
        })
        .catch(error =>{
          console.log(error.message)
        })
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center w-1/2 lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
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
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="name"
                   
                    className="input input-bordered"
                  />
                   {errors.name && <span className='text-red-600'>Name field is required</span>}
                </div>
                
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
        <input
          type="password"
          {...register("password", { required: true, minLength: 5, maxLength: 9 })}
          name="password"
          placeholder="Password"
          className="input input-bordered"
        />
        {errors.password && <span className='text-red-600'>Password field is required</span>}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <input
          type="password"
          {...register("confirmPassword", { required: true, minLength: 5 })}
          name="confirmPassword"
          placeholder="Confirm Password"
          className="input input-bordered"
        />
        {errors.confirmPassword && <span className='text-red-600'>Confirm Password field is required</span>}
      </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                   
                    className="input input-bordered"
                  />
                   {errors.photoURL && <span className='text-red-600'>Photo URL field is required</span>}
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
              </form>
              <div>
              </div>
              <div className="text-center mb-5">
                <small>Already have an account ? <Link to='/login' className="text-orange-600 link-hover">Please login</Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;