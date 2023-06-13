import React, { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-side-akashriaz.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);

  const sortedInstructors = instructors.sort(
    (a, b) => b.number_of_students - a.number_of_students
  );

  // // Get the top six instructors
  const popularInstructors = sortedInstructors.slice(0, 6);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-orange-600 my-10">
        Popular Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:ml-10">
        {popularInstructors.map((instructor) => (
          <div
            key={instructor.email}
            className="card mx-auto md:w-96 w-80 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={instructor.image} alt={instructor.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p>Email: {instructor.email}</p>
              <p>Number of students: {instructor.number_of_students}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
