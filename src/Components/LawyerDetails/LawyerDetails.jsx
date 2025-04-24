import {  useLoaderData, useNavigate, useParams } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';
import { addToStoredDB, getStoredLawyer } from '../../Utility/addToDB';
import { toast, ToastContainer } from 'react-toastify';
import NoLawyer from '../NoLawyer/NoLawyer';

const LawyerDetails = () => {
    const navigate=useNavigate();
    const allLawyers=useLoaderData();
   
    //got id through router
    const {id}=useParams();
    //console.log(id);
    
  
    const selectedLaw=allLawyers.find(lawyer=>lawyer.id===parseInt(id))
    //console.log(selectedLaw);

    if (!selectedLaw) {
        return <NoLawyer></NoLawyer>
      }

    const {
        image,
        name,
        speciality,
        experience,
        licenseNumber,
        fee,
        availability,
        description,
      } = selectedLaw || {};

      const addBooking=(id)=>{
        const alreadyBooked=getStoredLawyer();

        if (alreadyBooked.includes(id)) {
            toast(`already scheduled for ${name}`);
        }
        else{
            addToStoredDB(id);
            setTimeout(() => {
                navigate('/booking'); 
              }, 1000);
              toast(`Appointment booked for ${name}`);
        } 
      }
    return (
        <div className='max-w-7xl mx-auto'>
            <ToastContainer />
            <div className=' py-15 bg-gray-200 rounded-2xl mt-10 text-center'>
                <h1 className='text-3xl md:text-4xl font-bold'>Lawyer’s Profile Details</h1>
                <p className='md:text-lg px-[10%] font-light mt-8'>{description}</p>
            </div>
            
            <div className='flex flex-col md:flex-row items-center gap-5 shadow-sm py-10 px-5 border border-gray-200 rounded-2xl mt-10'>
                <figure className="px-5 pt-10 border border-gray-300">
                    <img
                    src={image}
                    alt="person"
                    className="rounded-xl w-full h-40" />
                </figure>
                <div className="bg-base-100">
                    
                    <div className="items-center ">
                        <button className='btn btn-soft btn-primary rounded-2xl mb-3'>{experience}+ Experience</button>

                        <h2 className="card-title text-2xl mb-3">{name}</h2>

                        <div className='md:flex gap-8'>
                            <p className='mb-3'>{speciality} Expert</p>
                            <p className=''><span>&reg;</span>  License No : {licenseNumber} Expert</p>
                        </div>

                        <div className='md:flex items-center gap-3 my-5'>
                            <p className='mb-3'>Availability</p>
                            {
                                availability.map((day,index)=><button
                                key={index} 
                                className='btn btn-soft btn-warning rounded-2xl'>{day}</button>)
                            }
                        </div>

                        <div>
                             <p>Consultation Fee: <span className='text-green-600 font-bold'>{fee}</span></p> 
                        </div>  
                    
                    
                        
                    
                    </div>
                </div>
             </div>


             <div className='shadow-sm py-10 px-5 border border-gray-200 rounded-2xl mt-10'>
                <div className="bg-base-100">

                    <h1 className='text-3xl md:text-4xl font-bold text-center pb-5 border-b-2 border-gray-300 border-dashed'>Book an Appointment</h1>
                    
                     <div className='flex justify-between py-5 border-b-2 border-gray-300 '>
                        <h1>Availability</h1>
                        <button
                            className='btn btn-soft btn-success rounded-2xl'>
                                Lawyer Available Today
                            </button>
                     </div>

                     <div className='inline-flex items-center rounded-2xl bg-yellow-100 text-yellow-600 px-5 my-5'>
                        <FaExclamationTriangle className="mr-2" />
                        <span className='py-3'>
                            Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                        </span>
                        </div>     
                     
                            
                        <button
                        className='btn  bg-green-600 rounded-2xl btn-block text-white'
                        onClick={()=>{addBooking(id)}}>
                          Book Appointment Now
                        </button>
                </div>
             </div>
        </div>
    );
};

export default LawyerDetails;