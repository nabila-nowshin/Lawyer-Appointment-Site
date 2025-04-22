import React from 'react';
import bgImage from '../../assets/banner-img-1.png'

const Banner = () => {
    return (
        <div 
        className='w-full bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center px-4 rounded-3xl shadow-2xl  max-w-7xl mx-auto'

        style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h2 className="font-bold text-5xl w-3/5 leading-tight mb-4">
            Best Lawyers
            </h2>
            <p className="text-lg text-gray-100 w-4/5">
            Connect with experienced legal professionals across a wide range of specialties. Whether you're facing a dispute, need contract advice, or seeking long-term legal support — our platform ensures trusted guidance without the legalese.
            </p>
        </div>
    );
};

export default Banner;