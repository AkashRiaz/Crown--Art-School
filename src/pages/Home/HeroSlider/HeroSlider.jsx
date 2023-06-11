import React from "react";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <div>
      <div className="carousel w-full h-[350px] md:h-[550px] mt-1">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://images.pexels.com/photos/8541883/pexels-photo-8541883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
          <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#171717] to-[rgba(19, 19, 19, 0)] flex justify-center items-center  left-0 top-0 right-0 bottom-0">
            <div className=" text-white space-y-7 w-full md:w-1/2 pl-2 text-center">
              <h1 className="text-2xl md:text-5xl font-bold">
                Unleash Your Creativity at Our Art and Craft School
              </h1>
              <p>
                Unlock Your Imagination and Explore Endless
                Possibilities.Nurture Your Creative Spirit and Unleash Your
                Artistic Potential
              </p>

              <div>
              <Link to="/classes" className="btn btn-outline btn-secondary text-white">
                  Buy Classes
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://images.pexels.com/photos/7605993/pexels-photo-7605993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
          <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#171717] to-[rgba(19, 19, 19, 0)] flex justify-center items-center  left-0 top-0 right-0 bottom-0">
            <div className=" text-white space-y-7 w-full md:w-1/2 pl-2 text-center mx-auto">
              <h1 className="text-2xl md:text-5xl font-bold">
                Embrace Your Artistic Journey with Us
              </h1>
              <p>
                Embark on a Transformative Artistic Voyage and Unleash Your
                Potential.Immerse Yourself in a World of Art and Let Your
                Creativity Flourish
              </p>

              <div>
              <Link to="/classes" className="btn btn-outline btn-secondary">
                  Buy Classes
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://images.pexels.com/photos/159825/color-pencil-drawing-coloring-colored-pencils-159825.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full"
          />
          <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#171717] to-[rgba(19, 19, 19, 0)] flex justify-center items-center  left-0 top-0 right-0 bottom-0">
            <div className=" text-white space-y-7 w-full md:w-1/2 pl-2 text-center">
              <h1 className="text-2xl md:text-5xl font-bold">
                Explore the Magic of Art and Craft in Our School
              </h1>
              <p>
                Embrace the Joy of Creating and Unleash Your Artistic Passion.
                Ignite Your Artistic Journey and Embrace the Beauty of
                Self-Expression
              </p>

              <div>
                <Link to="/classes" className="btn btn-outline btn-secondary">
                  Buy Classes
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img
            src="https://images.pexels.com/photos/5063465/pexels-photo-5063465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
          <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#171717] to-[rgba(19, 19, 19, 0)] flex justify-center items-center  left-0 top-0 right-0 bottom-0 ">
            <div className=" text-white space-y-7 w-full md:w-1/2 pl-2 text-center">
              <h1 className="text-2xl md:text-5xl font-bold">
                Ignite Your Passion for Creativity at Our Art School
              </h1>
              <p className="">
                Create Beautiful and Inspiring Artworks. Connect with
                Like-minded Creatives and Collaborate
              </p>

              <div>
              <Link to="/classes" className="btn btn-outline btn-secondary">
                  Buy Classes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs btn-circle hover:btn-outline">
          a
        </a>
        <a href="#item2" className="btn btn-xs btn-circle hover:btn-outline">
          b
        </a>
        <a href="#item3" className="btn btn-xs btn-circle hover:btn-outline">
          c
        </a>
        <a href="#item4" className="btn btn-xs btn-circle hover:btn-outline">
          d
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;
