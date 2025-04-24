import React from 'react';
import { NavLink } from 'react-router';
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

    const navLink=<div className='flex gap-4 text-lg'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/booking'>Bookings</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/'>Contacts</NavLink>
    </div>

    return (
        <div className="navbar bg-base-100 shadow-sm  max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                   {navLink}
                </ul>
                </div>
                <div className='flex gap-1 items-center'>
                    <img src={logo}></img>
                    <h1 className='text-lg font-medium'>Law.BD</h1>
                </div>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-green-600 text-white rounded-3xl">Contact Now</a>
            </div>
            </div>
    );
};

export default Navbar;
