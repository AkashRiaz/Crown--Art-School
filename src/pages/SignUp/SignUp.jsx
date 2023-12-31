import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, userUpdateProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { password, confirmPassword } = data;

    // Validate if the password and confirm password match
    if (password !== confirmPassword) {
      alert("Password and Confirm Password must match!");
      return;
    }
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        userUpdateProfile(data.name, data.photoURL)
          .then((currentUser) => {
            const saveUser = {
              name: data.name,
              email: data.email,
              photo: data.photoURL,
            };
            fetch(
              "https://summer-camp-server-side-akashriaz.vercel.app/users",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(saveUser),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  const updateUser = currentUser.user;
                  console.log(updateUser);
                }
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
    navigate("/");
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <img
              src="https://cdn.svgator.com/images/2021/08/SVG-engages-users.png"
              alt=""
            />
          </div>
          <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign Up now!</h1>
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
                {errors.name && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase and one special character.
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                  })}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">
                    Confirm Password field is required
                  </span>
                )}
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
                {errors.photoURL && (
                  <span className="text-red-600">
                    Photo URL field is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div></div>
            <div className="text-center mb-5">
              <small>
                Already have an account ?{" "}
                <Link to="/login" className="text-orange-600 link-hover">
                  Please login
                </Link>
              </small>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
