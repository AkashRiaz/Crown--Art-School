import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const FeedBack = () => {
  const location = useLocation();
  const classes = location.state;
  console.log(classes)

  const handleFeedbackForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    console.log(feedback)
    if(classes){
      fetch(`http://localhost:5000/classes/feedback/${classes?._id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({feedback})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleFeedbackForm}>
        <input
          type="text"
          className="textarea textarea-primary"
          placeholder="Enter your feedback..."
          name="feedback"
        ></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FeedBack;
