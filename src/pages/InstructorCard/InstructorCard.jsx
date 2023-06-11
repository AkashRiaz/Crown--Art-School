import React from "react";

const InstructorCard = ({instructor}) => {
    const {name, photo,email} = instructor;
  return (
    <div className="mt-20">
      <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-48">
          <img
            src={photo}
            
            alt="Shoes"
            className="rounded-xl "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
