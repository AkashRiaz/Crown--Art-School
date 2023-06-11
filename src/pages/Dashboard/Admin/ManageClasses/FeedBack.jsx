import React, { useState } from "react";

const FeedBack = () => {
    const [feedback, setFeedback] = useState("");

    const handleFeedbackChange = (e) => {
      setFeedback(e.target.value);
    };

    const handleFeedbackSubmit = (id) => {
        fetch(`http://localhost:5000/classes/feedback/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ feedback }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
        setFeedback("");
      };

  return (
    <div>
    <form>
      <textarea
        className="textarea textarea-primary"
        placeholder="Enter your feedback..."
        value={feedback}
        onChange={handleFeedbackChange}
      ></textarea>
      <input type="submit" value="Submit" onClick={handleFeedbackSubmit} />
    </form>
  </div>
  );
};

export default FeedBack;
