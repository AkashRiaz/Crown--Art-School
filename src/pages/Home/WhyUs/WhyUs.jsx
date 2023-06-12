import React from "react";
import CountUp from "react-countup";
import "./whyus.css";
const WhyUs = () => {
    const FeatureData = [
        {
          title: "Quick Learning",
          desc: "Our innovative teaching methods and interactive resources ensure efficient and effective knowledge acquisition. Experience accelerated learning and achieve your goals faster with our Quick Learning approach.",
          icon: 'ri-macbook-fill',
        },
      
        {
          title: "All Time Support",
          desc: "Our dedicated team is available around the clock to provide assistance, answer queries, and ensure a smooth learning experience. Count on us for reliable and prompt support, whenever you need it.",
          icon: "ri-discuss-line",
        },
      
        {
          title: "Certification",
          desc: "Our diverse range of certification enhance their professional skills. Unlock new opportunities and showcase your expertise with our comprehensive certification offerings",
          icon: "ri-contacts-book-line",
        },
      ];
      
  return (
    <div className="py-20 mt-10 bg-white shadow-md md:mx-10 rounded-lg">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-orange-600">About Us</h2>
        <p className="w-2/3 my-3 mx-auto">
        Articulates the art school's desired future state or long-term aspirations, expressing its vision for the impact it aims to make in the artistic realm. This subheading may outline the school's vision of producing skilled artists, cultural influencers, or thought leaders who contribute to the broader art world.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 text-center mt-10">
        <div className="single__counter">
          <span className="counter">
            <CountUp start={0} end={25} duration={10} suffix="K" />
          </span>

          <p className="counter__title">Total Students</p>
        </div>
        <div className="single__counter">
          <span className="counter">
            <CountUp start={0} end={36} duration={10} suffix="" />
          </span>

          <p className="counter__title">Total Courses</p>
        </div>
        <div className="single__counter">
          <span className="counter">
            <CountUp start={0} end={20} duration={10} suffix="K" />
          </span>

          <p className="counter__title">Successful Student</p>
        </div>
        <div className="single__counter">
          <span className="counter">
            <CountUp start={0} end={5} duration={10} suffix="K" />
          </span>

          <p className="counter__title">Free Scholarship</p>
        </div>
      </div>
      <div>
      <section>
      <div className="mb-10 mt-20">
        <div className="grid grid-col-1 md:grid-cols-3">
          {FeatureData.map((item, index) => (
            <div key={index} className="border-2 p-6 m-4 rounded-md">
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default WhyUs;
