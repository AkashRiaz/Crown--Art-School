import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const handleAddAClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const className = form.className.value;
    const instructorName = form.instructorName.value;
    const email = form.email.value;
    const price = form.price.value;
    const availableSeats = form.availableSeats.value;
    const classInfo = {
      photo,
      className,
      instructorName,
      email,
      price,
      availableSeats,
    };
     
    fetch(`http://localhost:5000/classes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classInfo),
    })
      .then((res) => res.json())
      .then((data) => {});
      form.reset();
  };

  return (
    <div className="my-20">
      <form
        className="max-w-3xl mx-auto border-1 border-gray-100 shadow-2xl p-10"
        onSubmit={handleAddAClass}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="pictureUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Picture URL
            </label>
            <input
              type="text"
              id="pictureUrl"
              name="photo"
              placeholder="photo url"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Class Name
            </label>
            <input
              type="text"
              id="name"
              name="className"
              placeholder="Class name"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="instructorName"
              className="block text-sm font-medium text-gray-700"
            >
              Instructor name
            </label>
            <input
              type="text"
              id="instructorName"
              name="instructorName"
              readOnly
              defaultValue={user?.displayName}
              placeholder="instructorName"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700"
            >
              Instructor Email
            </label>
            <input
              type="email"
              id="InstructorEmail"
              name="email"
              readOnly
              defaultValue={user?.email}
              placeholder="Instructor email"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
           
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="price"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700"
            >
              Available seats
            </label>
            <input
              type="text"
              id="availableSeats"
              name="availableSeats"
              placeholder="Available seats"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <input className="btn btn-block mt-7" type="submit" value="Add A Class" />
      </form>
    </div>
  );
};

export default AddAClass;
