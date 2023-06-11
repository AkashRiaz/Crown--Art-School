import React, { useState } from "react";
import HeroSlider from "../HeroSlider/HeroSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import WhyUs from "../WhyUs/WhyUs";
import './Home.css'

const Home = () => {
    const [themeColor, setThemeColor] = React.useState("white");
  
    const handleToggle = () => {
      setThemeColor(themeColor === "white" ? "black" : "white");
    };
  
    return (
      <div className={`home-page ${themeColor} relative pb-10`}>
        <div className="form-control w-52">
          <label className="cursor-pointer label fixed z-50 top-0 left-2">
            <input
              type="checkbox"
              className={`toggle ${themeColor === "white" ? "toggle-primary" : "toggle-secondary"}`}
              checked={themeColor === "black"}
              onChange={handleToggle}
            />
          </label>
        </div>
        <HeroSlider></HeroSlider>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <WhyUs></WhyUs>
      </div>
    );
  };
  
  export default Home;
  
  
