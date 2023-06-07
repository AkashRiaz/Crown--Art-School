import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const AllClasses = () => {
  const { user } = useContext(AuthContext);
  const [allClass, setAllClass] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setAllClass(data);
      });
  }, []);

  const handleSelectClass = (className) => {
    if (!user) {
      // Redirect to the login page if user is not present
      alert("Please log in before selecting the course.");
      return;
    }
    // Add your logic for selecting a class here
    // Implement the desired behavior based on the conditions mentioned
    // For this example, let's log the selected class name to the console
    console.log(`Selected class: ${className}`);
  };

  const isAdminOrInstructor = user && ["admin", "instructor"].includes(user.role);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {allClass.map((singleClass, index) => (
        <div key={index}>
          <div
            className={`card w-96 ${
              singleClass.availableSeats === 0 ? "bg-red-500" : "bg-base-100"
            } shadow-xl`}
          >
            <figure>
              <img src={singleClass.image} alt="Class" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {singleClass.name}
                {singleClass.availableSeats === 0 && (
                  <div className="badge badge-red">Sold Out</div>
                )}
              </h2>
              <p>Instructor: {singleClass.instructor}</p>
              <p>Available Seats: {singleClass.availableSeats}</p>
              <p>Price: ${singleClass.price}</p>
              <div className="card-actions justify-end">
                {!user && <p>Please log in to select the course.</p>}
                {singleClass.availableSeats > 0 && !isAdminOrInstructor && (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSelectClass(singleClass.name)}
                  >
                    Select
                  </button>
                )}
                {(isAdminOrInstructor || singleClass.availableSeats === 0) && (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSelectClass(singleClass.name)}
                    disabled={true}
                  >
                    Select
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClasses;