import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [classesData, setClassesData] = useState([]);
  useEffect(() => {
    fetch("https://summer-camp-server-side-akashriaz.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClassesData(data);
      });
  });

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-orange-600 my-10">
        Popular Classes
      </h2>
      <div className="grid grid-col-1 md:grid-cols-3 gap-6 md:ml-10">
        {classesData.slice(0, 6).map((cls) => (
          <div
            key={cls._id}
            className="card md:w-96 mx-auto w-80 bg-base-100 shadow-xl"
          >
            <figure className="p-3">
              <img src={cls.photo} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name: {cls.name}</h2>
              <p>Instructor: {cls.instructorName}</p>
              <p>Available Seats: {cls.availableSeats}</p>
              <p>Price: ${cls.price}</p>
              <p>Students:{cls.num_student}</p>
              <div className="card-actions">
                <Link to="http://localhost:5173/classes">
                  <button className="btn btn-primary">Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
