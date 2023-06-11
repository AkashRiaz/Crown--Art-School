import React, { useEffect } from "react";
import useManageClasses from "../../../../hooks/useManageClasses";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const [totalClass,refetch] = useManageClasses();
    const handleApprove = (id) => {
      fetch(`http://localhost:5000/classes/approved/${id}`,{
        method:'PATCH'
      })
      .then(res=>res.json())
      
      .then(data=> {
        if(data.modifiedCount){
          console.log(data)
        }
        refetch()
      })
        console.log(id)
      };
    
      // Function to handle the Deny button click
      const handleDeny = (id) => {
        fetch(`http://localhost:5000/classes/denied/${id}`,{
        method:'PATCH'
      })
      .then(res=>res.json())
      .then(data=> {
       
        if(data.modifiedCount){
          console.log(data)
        }
        refetch()
      })
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
              <p>Status: {cls.status}</p>
              <div className="card-actions justify-end">
                <button className="badge badge-outline" onClick={()=>handleApprove(cls._id)}>Approve</button>
                <button className="badge badge-outline" onClick={()=>handleDeny(cls._id)}>Deny</button>
                <button><Link to='/dashboard/feedBack' className="badge badge-outline">FeedBack</Link></button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default ManageClasses;
