import React from "react";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <div>
      <div className="carousel w-full h-[350px] md:h-[550px] mt-1">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://images.unsplash.com/photo-1626278664285-f796b9ee7806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            className="w-full"
          />
          <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#171717] to-[rgba(19, 19, 19, 0)] flex justify-start items-center  left-0 top-0 ">
            <div className=" text-white space-y-7 w-full md:w-1/2 pl-2 md:pl-24">
              <h1 className="text-2xl md:text-5xl font-bold">
                20% OFF, All Avengers Toy
              </h1>
              <p>
              Get your favorite Avengers toys at discounted prices and bring the
        action-packed adventures of Earth's mightiest heroes to your home.
              </p>

              <div>
                <Link to="/allToys" className="btn btn-primary mr-5">
                  Shop Now
                </Link>
                <Link to="/addatoy" className="btn btn-outline btn-secondary">
                  Sell Your Product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-full"
          />
          <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#171717] to-[rgba(19, 19, 19, 0)] flex justify-start items-center  left-0 top-0 ">
            <div className=" text-white space-y-7 w-full md:w-1/2 pl-2 md:pl-24">
              <h1 className="text-2xl md:text-5xl font-bold">
                35% OFF, All Star Wars Toy
              </h1>
              <p>
              Get your favorite Avengers toys at discounted prices and bring the
        action-packed adventures of Earth's mightiest heroes to your home.
              </p>

              <div>
                <Link to="/allToys" className="btn btn-primary mr-5">
                  Shop Now
                </Link>
                <Link to="/addatoy" className="btn btn-outline btn-secondary">
                  Sell Your Product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://images.unsplash.com/photo-1598348341635-33a3f4205d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
            className="w-full"
          />
          <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#171717] to-[rgba(19, 19, 19, 0)] flex justify-start items-center  left-0 top-0 ">
            <div className=" text-white space-y-7 w-full md:w-1/2 pl-2 md:pl-24">
              <h1 className="text-2xl md:text-5xl font-bold">
                23% OFF, All Transformers Toy
              </h1>
              <p>
              Get your favorite Avengers toys at discounted prices and bring the
        action-packed adventures of Earth's mightiest heroes to your home.
              </p>

              <div>
                <Link to="/allToys" className="btn btn-primary mr-5">
                  Shop Now
                </Link>
                <Link to="/addatoy" className="btn btn-outline btn-secondary">
                  Sell Your Product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img
            src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-full"
          />
          <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#171717] to-[rgba(19, 19, 19, 0)] flex justify-start items-center  left-0 top-0 ">
            <div className=" text-white space-y-7 w-full md:w-1/2 pl-2 md:pl-24">
              <h1 className="text-2xl md:text-5xl font-bold">
                30% OFF, All Avengers Toy
              </h1>
              <p className="">
                Get your favorite Avengers toys at discounted prices and bring
                the action-packed adventures of Earth's mightiest heroes to your
                home.
              </p>

              <div>
                <Link to="/allToys" className="btn btn-primary mr-5">
                  Shop Now
                </Link>
                <Link to="/addatoy" className="btn btn-outline btn-secondary">
                  Sell Your Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs hover:btn-accent">
          1
        </a>
        <a href="#item2" className="btn btn-xs hover:btn-accent">
          2
        </a>
        <a href="#item3" className="btn btn-xs hover:btn-accent">
          3
        </a>
        <a href="#item4" className="btn btn-xs hover:btn-accent">
          4
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;
