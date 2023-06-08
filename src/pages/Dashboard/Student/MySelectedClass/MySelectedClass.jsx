import React from 'react';
import useSelectedClass from '../../../../hooks/useSelectedClass';
import { Link } from 'react-router-dom';

const MySelectedClass = () => {
    const [selectedClass, refetch]=useSelectedClass();
    const handleDelete =(id)=>{
        fetch(`http://localhost:5000/selectedClass/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
           if(data.deletedCount > 0){
            refetch()
            alert('delete successfully')
           }
        })
    }
    console.log(selectedClass)
    return (
        <div>
            <h2>My Selected Class: {selectedClass.length}</h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Class Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        selectedClass.map((singleSelectedClass, ind )=><tr key={singleSelectedClass._id}>
            <th>{ind+ 1}</th>
            <th>{singleSelectedClass.name}</th>
            <td><button className='btn btn-sm btn-warning' onClick={()=>handleDelete(singleSelectedClass._id)}>Delete</button></td>
            <td><Link className='btn btn-sm'>Pay</Link></td>
            <td>Blue</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default MySelectedClass;