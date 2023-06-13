import React, { useEffect, useState } from "react";
import useManageClasses from "../../../../hooks/useManageClasses";
import { Link, useNavigate } from "react-router-dom";

const ManageClasses = () => {
  const [totalClass, refetch] = useManageClasses();
  const [disabledClasses, setDisabledClasses] = useState([]);

  useEffect(() => {
    const disabledClassesFromStorage = localStorage.getItem("disabledClasses");
    if (disabledClassesFromStorage) {
      setDisabledClasses(JSON.parse(disabledClassesFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("disabledClasses", JSON.stringify(disabledClasses));
  }, [disabledClasses]);

  const handleApprove = (id) => {
    fetch(`http://localhost:5000/classes/approved/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setDisabledClasses([...disabledClasses, id]);
        }
        refetch();
      });
  };

  const handleDeny = (id) => {
    fetch(`http://localhost:5000/classes/denied/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setDisabledClasses([...disabledClasses, id]);
        }
        refetch();
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-5">Total Classes: {totalClass.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:ml-20 gap-10">
        {totalClass.map((cls) => (
          <div key={cls._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={cls.photo} alt="Class" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {cls.name}
                <div className="badge badge-secondary">Class</div>
              </h2>
              <p>Instructor: {cls.instructorName}</p>
              <p>Email: {cls?.email}</p>
              <p>availableSeat: {cls.availableSeats}</p>
              <p>Price: {cls.price}</p>
              <p>Status: {cls.status}</p>
              <div className="card-actions justify-end">
                <button
                  className="badge badge-outline btn"
                  onClick={() => handleApprove(cls._id)}
                  disabled={disabledClasses.includes(cls._id) || cls.status === "approved" || cls.status === "denied"}
                >
                  Approve
                </button>
                <button
                  className="badge badge-outline btn"
                  onClick={() => handleDeny(cls._id)}
                  disabled={disabledClasses.includes(cls._id) || cls.status === "approved" || cls.status === "denied"}
                >
                  Deny
                </button>
                <button>
                  <Link
                    to="/dashboard/feedBack"
                    state={{ ...cls }}
                    className="badge badge-outline btn"
                  >
                    FeedBack
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
