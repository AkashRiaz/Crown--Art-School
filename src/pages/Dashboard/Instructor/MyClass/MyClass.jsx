import React from "react";
import useInstructorAddClasses from "../../../../hooks/useInstructorAddClasses";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [addedClass] = useInstructorAddClasses();

  return (
    <div>
      <h2>My Class: {addedClass.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {addedClass.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={cls.photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td className="text-bold">{cls.name}</td>
                <td>{cls.instructorName}</td>
                <td>${cls.price}</td>
                <td>{cls.availableSeats}</td>
                <td className="text-red-600">{cls.status}</td>
                <td>{cls.status === "denied" ? <p>{cls.feedback}</p> : "-"}</td>
                <td>
                  <Link to={`/dashboard/updated/${cls._id}`}><button className="btn btn-primary">Update</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
