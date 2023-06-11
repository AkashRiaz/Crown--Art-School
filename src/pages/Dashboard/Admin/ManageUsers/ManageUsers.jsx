import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH"
    })
      .then((res) => res.json)
      .then((data) => {
        if (data.modifiedCount) {
          console.log(modifiedCount);
          alert("Admin");
        }
        refetch();
      });
  };

  const handleMakeInstructor = (id) => {
    fetch(`http://localhost:5000/users/instructors/${id}`, {
      method: "PATCH"
    })
      .then((res) => res.json)
      .then((data) => {
        if (data.modifiedCount) {
          console.log(modifiedCount);
        }
        refetch();
      });
  };

  return (
    <div>
      <h2>Manage Users: {users.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
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
                  <th>{ind + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role || "user"}</td>
                  <th>
                    <div>
                      <button
                        className="btn btn-ghost btn-xs bg-orange-800 text-white"
                        onClick={() => handleMakeAdmin(user._id)}
                        disabled={user.role === "admin" || user.role === "instructors"}
                      >
                        Make Admin
                      </button>
                    </div>
                    <div className="mt-2">
                      <button
                        onClick={() => handleMakeInstructor(user._id)}
                        className="btn btn-ghost btn-xs bg-orange-600 text-white"
                        disabled={user.role === "admin" || user.role === "instructors"}
                      >
                        Make Instructor
                      </button>
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
