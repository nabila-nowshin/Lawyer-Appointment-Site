import React from 'react';

const Lawyer = ({lawyer}) => {
    const{name,image,speciality,licenseNumber,experience}=lawyer;
    return (
        <div className='flex shadow-sm py-10 border border-gray-200 rounded-2xl'>
            <figure class="px-5 pt-10 ">
                <img
                src={image}
                alt="person"
                class="rounded-xl w-full h-40" />
            </figure>
            <div class="card bg-base-100">
                
                <div class="card-body items-center text-center">
                    <div className='flex gap-3'>
                    <button className='btn btn-soft btn-success rounded-2xl'>Available</button>
                    <button className='btn btn-soft btn-primary rounded-2xl'>{experience}+ Experience</button>
                    </div>
                
                    <h2 class="card-title">{name}</h2>
                    <p>{speciality} Expert</p>
                    <p><span>&reg;</span>   {/* shows ® */} License No : {licenseNumber} Expert</p>
                
                    <button class="btn btn-wide btn-outline btn-primary rounded-2xl ">View Details</button>
                
                </div>
             </div>
        </div>
        
    );
};

export default Lawyer;