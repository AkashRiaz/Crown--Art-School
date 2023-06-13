import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const FeedBack = () => {
  const location = useLocation();
  const classes = location.state;
  console.log(classes);

  const handleFeedbackForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    console.log(feedback);
    if (classes) {
      fetch(
        `https://summer-camp-server-side-akashriaz.vercel.app/classes/feedback/${classes?._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ feedback }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    form.reset(" ");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 py-6"
        onSubmit={handleFeedbackForm}
      >
        <textarea
          className="w-full h-40 bg-gray-100 border-2 border-gray-200 rounded p-4 resize-none focus:outline-none focus:bg-white focus:border-blue-500"
          placeholder="Enter your feedback..."
          name="feedback"
        ></textarea>
        <div className="mt-4 flex justify-end">
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
