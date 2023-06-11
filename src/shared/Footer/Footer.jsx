import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
   <div className="bg-[#191E24]">
     <footer className="footer p-10  text-white mt-24">
      <div>
        <img src={logo} alt="" />
        <h6 className="fw-bold">Get in Touch</h6>
        <p>Address: Magura, Bangladesh</p>
        <p> Phone: +88 01612264090 </p>
        <p>Email: akashriaz05@gmail.com</p>
      </div>
      <div>
        <span className="footer-title">Others Page</span>
        <Link to="/classes" className="link link-hover">All Classes</Link>
        <Link to="/instructors" className="link link-hover">All Instructors</Link>
        <Link to="/signup" className="link link-hover">Sign Up</Link>
        <Link to='/login' className="link link-hover">Login</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="text-white">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
     
    </footer>
     <div>
     <div className="border-t-[1px] "></div>
     <p className="text-white text-center py-5 text-sm">
       Copyright ©2023 All rights reserved | This template is made with by <span className="link link-hover text-orange-600">Md Akashuzzaman Riaz</span>
     </p>
   </div>
   </div>
  );
};

export default Footer;
