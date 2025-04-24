import React from 'react';
import { Link } from 'react-router';

const Lawyer = ({lawyer}) => {
    const{name,image,speciality,licenseNumber,experience,id}=lawyer;

    return (
        <div className='flex flex-col  items-center shadow-sm py-10 border border-gray-200 rounded-2xl mt-5'>
            
                <img
                src={image}
                alt="person"
                className="rounded-xl h-40" />
            
            <div className="card bg-base-100">
                
            <div className="card-body items-center text-center">
                <div className='flex gap-3'>
                <button className='btn btn-soft btn-success rounded-2xl'>Available</button>
                <button className='btn btn-soft btn-primary rounded-2xl'>{experience}+ Experience</button>
                </div>
            
                <h2 className="card-title">{name}</h2>
                <p>{speciality} Expert</p>
                <p><span>&reg;</span>License No : {licenseNumber} Expert</p>
            
                <Link to={`../Lawyer/${id}`}>
                    <button

                    className="btn btn-wide btn-outline btn-primary rounded-2xl ">View Details</button>
                </Link>
                
            
            </div>
        </div>
        </div>
        
    );
};

export default Lawyer;