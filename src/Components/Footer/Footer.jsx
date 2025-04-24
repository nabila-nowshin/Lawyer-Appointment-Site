import React from 'react';
import logo from '../../assets/logo-footer.png'
import { Link, NavLink } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-black flex flex-col items-center py-20'>
            <div className='flex gap-1 items-center mb-6'>
                <img src={logo}></img>
                <h1 className='text-lg font-medium text-white'>Law.BD</h1>
            </div>  
            <div className='flex gap-4 text-lg text-white p-7'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/booking'>Bookings</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
            </div> 
            <hr className="w-full border-t-2 border-dashed border-gray-300" />
            <div className='flex gap-3.5 mt-5 text-blue-700 text-2xl'>
                <Link to='https://www.facebook.com/NabilaM.1965'><FaFacebook /></Link>
                <Link to='https://github.com/nabila-nowshin'><FaGithub /></Link>
                <Link to='https://www.linkedin.com/in/nabila-nowshin-697467292/'><FaLinkedin /></Link>
            </div>   
        </div>
    );
};

export default Footer;