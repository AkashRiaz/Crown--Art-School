import React, { useEffect } from "react";
import useManageClasses from "../../../../hooks/useManageClasses";

const ManageClasses = () => {
  const [totalClass] = useManageClasses();
 
    // Function to handle the Approve button click
    const handleApprove = () => {
        // Logic to update the status to 'approved' and disable the buttons
        console.log("this line", totalClass);
      };
    
      // Function to handle the Deny button click
      const handleDeny = () => {
        // Logic to update the status to 'denied' and disable the buttons
      };
    
      // Function to handle the Send Feedback button click
      const handleSendFeedback = () => {
        // Logic to open the modal or navigate to another route for sending feedback
      };
  return (
    <div>
      <h2>Total Classes:{totalClass.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {
            totalClass.map(cls =><div key={cls._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={cls.image}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {cls.name}
                <div className="badge badge-secondary">Class</div>
              </h2>
              <p>Instructor: {cls.instructor}</p>
              <p>Email: {cls?.email}</p>
              <p>availableSeat: {cls.availableSeats}</p>
              <p>Price: {cls.price}</p>
              <div className="card-actions justify-end">
                <button className="badge badge-outline" onClick={handleApprove}>Approve</button>
                <button className="badge badge-outline" onClick={handleDeny}>Deny</button>
                <button className="badge badge-outline" onClick={handleSendFeedback}>FeedBack</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default ManageClasses;
