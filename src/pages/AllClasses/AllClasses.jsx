import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const AllClasses = () => {
  const { user } = useContext(AuthContext);
  const [allClass, setAllClass] = useState([]);
  useEffect(() => {
    fetch("https://summer-camp-server-side-akashriaz.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setAllClass(data);
      });
  }, []);

  const handleSelectClass = (singleClass) => {
    if (!user) {
      alert("Please log in before selecting the course.");
      return;
    } else if (user) {
      const savedSelectedClass = {
        classId: singleClass._id,
        name: singleClass.name,
        studentEmail: user?.email,
        userName: user?.displayName,
        price: singleClass.price,
      };
      fetch(
        "https://summer-camp-server-side-akashriaz.vercel.app/selectedClass",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedSelectedClass),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  const isAdminOrInstructor =
    user && ["admin", "instructor"].includes(user.role);

  // Filter the classes to show only the ones with "approved" status
  const approvedClasses = allClass.filter((singleClass) => singleClass.status === "approved");

  return (
    <div className="w-full md:ml-14 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10">
        {approvedClasses.map((singleClass, index) => (
          <div key={index}>
            <div
              className={`card w-9/12 h-96 items-start ${
                singleClass.availableSeats === 0 ? "bg-red-500" : "bg-base-100"
              } shadow-xl`}
            >
              <figure>
                <img src={singleClass.photo} alt="Class" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {singleClass.className}
                  {singleClass.availableSeats === 0 && (
                    <div className="badge badge-red">Sold Out</div>
                  )}
                </h2>
                <p className="font-bold text-xl">Class: {singleClass.name}</p>
                <p>Instructor: {singleClass.instructorName}</p>
                <p>Available Seats: {singleClass.availableSeats}</p>
                <p>Price: ${singleClass.price}</p>
                <div className="card-actions">
                  {!user && <p>Please log in to select the course.</p>}
                  {singleClass.availableSeats > 0 && !isAdminOrInstructor && (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleSelectClass(singleClass)}
                    >
                      Select
                    </button>
                  )}
                  {(isAdminOrInstructor ||
                    singleClass.availableSeats === 0) && (
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
    </div>
  );
};

export default AllClasses;
