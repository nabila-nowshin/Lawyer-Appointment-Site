import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { deleteFromStoredDB, getStoredLawyer } from '../../Utility/addToDB';
import { toast, ToastContainer } from 'react-toastify';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { BiFullscreen } from 'react-icons/bi';

const Booking = () => {
    const [selectedLawyer,setSelectedLawyer]=useState([]);
    const datas=useLoaderData();
    
    useEffect(()=>{
        const storedDataSTR=getStoredLawyer();
        const convertedStored=storedDataSTR.map(l=>parseInt(l));
        //console.log(convertedstored);

        const selected=datas.filter(l=>convertedStored.includes(l.id));
        setSelectedLawyer(selected)

        // console.log(selected);
    },[datas])

    const deleteBooking=(id)=>{
        deleteFromStoredDB(id);
        const updatedList = selectedLawyer.filter(lawyer => lawyer.id !== Number(id));
        setSelectedLawyer(updatedList);
        toast(`schedule Cancelled `);
      }

      const colors = [
        '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
        '#FF6384', '#36A2EB', '#4BC0C0', '#9966FF',
        '#FF9F40', '#E91E63', '#9C27B0', '#3F51B5'
      ];

    const data = selectedLawyer.map(i=>(
            {
                name: i.name,
                uv: i.fee,
              }));

      const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    return (

        <div className='max-w-7xl mx-auto'>
             <ToastContainer></ToastContainer>
            {
                selectedLawyer.length !=0 &&  <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                    </Bar>
                </BarChart>
                </ResponsiveContainer>
            
                }
                {
        
                selectedLawyer.length ===0 ? 
                <div className="text-center mt-10">
                <h2 className="text-4xl font-bold mb-10">You have not booked any appointment yet</h2>
                <p className='font-light text-lg px-4'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                <Link to='/'>
                    <button className='btn  mt-5 btn-primary mb-30'> Book an appointment</button>
                </Link>
                
                </div> 
                :
                (  
                    <>
                         <div className='text-center mt-10'>
                            
                            <h1 className='font-bold text-3xl'>My Today Appointments</h1>
                            <p className='font-light text-lg'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                        </div>
                    {
                    selectedLawyer.map(l=>
                    <div 
                    key={l.id}
                        className='shadow-sm py-10 px-5 border border-gray-200 rounded-2xl mt-10'>
                        <div className="bg-base-100">

                            <h2 className="card-title text-2xl mb-3">{l.name}</h2>
                                <div className='flex justify-between py-5 border-b-2 border-dashed border-gray-300 '>
                                    <p>{l.speciality} Expert</p>
                                    <p>Consultation Fee: <span className='text-green-600 font-bold'>{l.fee} Taka</span></p> 
                                    </div>
                                    
                                <button
                                className='btn btn-outline btn-error rounded-2xl btn-block mt-10 font-bold '
                                onClick={()=>{deleteBooking(l.id)}
                                }
                                >
                                    Cancel Appointment
                                </button>
                        </div>
                    </div>)}
                    </>
                    )
            }
            
          
        </div>
    );
};

export default Booking;