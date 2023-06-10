import React, { useEffect, useState } from "react";

const PopularClasses = () => {
  const [classesData, setClassesData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClassesData(data);
      });
  });
  const sortedClasses = classesData.sort(
    (a, b) => b.enrolledSeats - a.enrolledSeats
  );
  const popularClasses = sortedClasses.slice(0, 6);
  return (
    <div>
      <h2 className="text-center my-10 text-4xl font-semibold">Popular Classes</h2>
      <div className="grid grid-col-1 md:grid-cols-3 gap-6 md:ml-10">
        {popularClasses.map((cls) => (
          <div key={cls._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={cls.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name: {cls.name}</h2>
              <p>Instructor: {cls.instructor}</p>
              <p>Available Seats: {cls.availableSeats}</p>
              <p>Price: ${cls.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
