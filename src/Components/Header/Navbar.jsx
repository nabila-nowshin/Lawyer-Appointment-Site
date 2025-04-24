import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router';

const Navbar = () => {
  const navItems = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/booking">Bookings</NavLink></li>
      <li><NavLink to="/blogs">Blogs</NavLink></li>
      <li><NavLink to="/contacts">Contacts</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>

        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h1 className="text-lg font-medium">Law.BD</h1>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navItems}
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn bg-green-600 text-white rounded-3xl">Contact Now</a>
      </div>
    </div>
  );
};

export default Navbar;
