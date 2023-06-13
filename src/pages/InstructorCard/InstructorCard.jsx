import React from "react";
import { motion } from "framer-motion";

const InstructorCard = ({instructor}) => {
    const {name, photo,email} = instructor;
  return (
    <div className="mt-20">
      <motion.div animate={{
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      transition:{duration:10}
    }}  className="card w-96 h-[400px] bg-base-100 shadow-xl">
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
      </motion.div>
    </div>
  );
};

export default InstructorCard;
