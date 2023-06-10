import React from "react";
import useInstructorAddClasses from "../../../../hooks/useInstructorAddClasses";

const MyClass = () => {
  const [addedClass] = useInstructorAddClasses();
  return (
    <div>
      <h2>My Class:{addedClass.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {addedClass.map((cls, ind) => (
             <tr key={cls._id}>
             <th>
               {ind+1}
             </th>
             <th>
             <div className="avatar">
             <div className="mask mask-squircle w-12 h-12">
               <img src={cls.photo} alt="Avatar Tailwind CSS Component" />
             </div>
           </div>
             </th>
             <td>
               {cls.className}
             </td>
             <td>{cls.instructorName}</td>
             <td>{cls.price}</td>
             <td>{cls.availableSeats}</td>
             <th>
               <button className="btn btn-ghost btn-xs">details</button>
             </th>
           </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
