import React, {useEffect, useState} from 'react';
import InstructorCard from '../InstructorCard/InstructorCard';

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(()=>{
        fetch('/instractor.json')
        .then(res =>res.json())
        .then(data =>{
            setInstructors(data)
        })
    })
    return (
        <div className='grid md:grid-cols-3 grid-cols-1'>
            {instructors.map((instructor,ind)=> <InstructorCard key={ind} instructor={instructor}></InstructorCard>)}
        </div>
    );
};

export default Instructors;