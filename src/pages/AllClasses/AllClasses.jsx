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

  const handleSelectClass = (singleClass) => {
    if (!user) {
      // Redirect to the login page if user is not present
      alert("Please log in before selecting the course.");
      return;
    }
    else if(user){
      const savedSelectedClass ={classId:singleClass._id,name:singleClass.name,studentEmail:user?.email,userName:user?.displayName, price: singleClass.price}
      fetch('http://localhost:5000/selectedClass',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(savedSelectedClass)
      })
      .then(res=>res.json())
      .then(data =>{
        console.log(data)
      })
    }
  };

  const isAdminOrInstructor = user && ["admin", "instructor"].includes(user.role);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-y-10">
      {allClass.map((singleClass, index) => (
        <div key={index}>
          <div
            className={`card w-9/12 h-96 items-start ${
              singleClass.availableSeats === 0 ? "bg-red-500" : "bg-base-100"
            } shadow-xl`}
          >
            <figure>
              <img src={singleClass.image} alt="Class" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {singleClass.className}
                {singleClass.availableSeats === 0 && (
                  <div className="badge badge-red">Sold Out</div>
                )}
              </h2>
              <p>Instructor: {singleClass.instructorName}</p>
              <p>Available Seats: {singleClass.availableSeats}</p>
              <p>Price: ${singleClass.price}</p>
              <div className="card-actions justify-end">
                {!user && <p>Please log in to select the course.</p>}
                {singleClass.availableSeats > 0 && !isAdminOrInstructor && (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSelectClass(singleClass)}
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
    </div>
  );
};

export default AllClasses;