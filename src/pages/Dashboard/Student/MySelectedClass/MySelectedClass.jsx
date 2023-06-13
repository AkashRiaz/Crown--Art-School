import React from "react";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [selectedClass, refetch] = useSelectedClass();
  const handleDelete = (id) => {
    fetch(
      `https://summer-camp-server-side-akashriaz.vercel.app/selectedClass/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          alert("delete successfully");
        }
      });
  };
  console.log(selectedClass);
  return (
    <div>
      <h2 className="text-center my-5 font-semibold text-3xl">
        My Selected Class: {selectedClass.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {selectedClass.map((singleSelectedClass, ind) => (
                <tr key={singleSelectedClass._id}>
                  <th>{ind + 1}</th>
                  <th>{singleSelectedClass.name}</th>
                  <th>${singleSelectedClass.price}</th>
                  <td>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleDelete(singleSelectedClass._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link
                      to="/dashboard/payment"
                      state={{ ...singleSelectedClass }}
                      className="btn btn-primary"
                    >
                      Pay
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClass;
