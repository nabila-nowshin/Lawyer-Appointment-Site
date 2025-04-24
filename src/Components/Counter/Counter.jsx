import React from 'react';
import pic1 from '../../assets/success-doctor.png'
import pic2 from '../../assets/success-patients.png'
import pic3 from '../../assets/success-review.png'
import pic4 from '../../assets/success-staffs.png'
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className='max-w-7xl mx-auto py-10'>
           <div className="text-center mt-10">
                <h2 className="text-3xl font-bold mb-5">We Provide Best Law Services</h2>
                <p className='font-light text-lg px-4'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>

            <div className='flex gap-3 justify-around mt-10'>
                <div className='bg-gray-200 p-10 rounded-2xl w-full'>
                    <img src={pic1} alt="" />
                    <h1 className='text-3xl font-bold py-3'>
                        <CountUp end={199} duration={10}>
                        </CountUp>
                        +
                    </h1>
                    <p>Total Lawyer</p>
                </div>
                <div className='bg-gray-200 p-10 rounded-2xl w-full'>
                    <img src={pic2} alt="" />
                    <h1 className='text-3xl font-bold py-3'>
                        <CountUp 
                        end={1900} 
                        duration={10}>
                        </CountUp>
                        +
                        </h1>
                    <p>Cases Initiated</p>
                </div>
                <div className='bg-gray-200 p-10 rounded-2xl w-full'>
                    <img src={pic3} alt="" />
                    <h1 className='text-3xl font-bold py-3'>
                    <CountUp 
                    end={467} 
                    duration={10}>
                    </CountUp>
                        +</h1>
                    <p>Total Reviews</p>
                </div>
                <div className='bg-gray-200 p-10 rounded-2xl w-full'>
                    <img src={pic4} alt="" />
                    <h1 className='text-3xl font-bold py-3'>
                    <CountUp end={300} duration={10}>
                    </CountUp>+
                    </h1>
                    <p>Total Stuffs</p>
                </div>
                
            </div> 
        </div>
    );
};

export default Counter;