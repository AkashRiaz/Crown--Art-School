import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  return (
    <div>
      <h2>MAnage Users:{users.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {users.map((user, ind) => (
             <tr key={user._id}>
             <th>
               {ind+ 1}
             </th>
             <th>
             <div className="avatar">
             <div className="mask mask-squircle w-12 h-12">
               <img src={user.photo} alt="Avatar Tailwind CSS Component" />
             </div>
           </div>
             </th>
             <td>
               {user.name}
             </td>
             <td>{user.email}</td>
             <th>
              <div>{
                user.role=='admin'? 'admin': <button className="btn btn-ghost btn-xs bg-orange-800 text-white">Make Admin</button>
                }</div>
              <div className="mt-2">
              {
                user.role =="instructor"? 'instructor':<button className="btn btn-ghost btn-xs bg-orange-600 text-white">Make Instructor</button>
              }
              </div>
             </th>
           </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
