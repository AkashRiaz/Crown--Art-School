import React,{useEffect,useState} from 'react';

const PopularClasses = () => {
    const [classesData,setClassesData]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setClassesData(data)
        })
    })
    const sortedClasses = classesData.sort((a, b) => b.enrolledSeats - a.enrolledSeats)
    const popularClasses = sortedClasses.slice(0, 6);
    return (
        <div>
      <h2>Popular Classes</h2>
      {popularClasses.map((cls) => (
        <div key={cls.name}>
          <img src={cls.image} alt={cls.name} />
          <h3>{cls.name}</h3>
          <p>Instructor: {cls.instructor}</p>
          <p>Enrolled Seats: {cls.enrolledSeats}</p>
          <p>Available Seats: {cls.availableSeats}</p>
          <p>Price: ${cls.price}</p>
          <hr />
        </div>
      ))}
    </div>
    );
};

export default PopularClasses;