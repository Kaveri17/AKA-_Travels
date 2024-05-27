

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='mx-auto w-5/6'>
      <div className='flex items-center justify-between'>
        <div className='navbar-img w-24'>
          <img src="/Image/logo2.png" alt="" className='w-full h-full' />
        </div>

        <div className='navbar text-2xl ps-2'>
          <ul className='flex items-center space-x-3 text-2xl'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/popular">Popular</Link></li>
            <li className='relative'
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown} >
           
              
              <Link to="pages">Pages</Link>
              <ul className={`dropdown absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-white rounded-lg shadow-md`}>
                <li><Link to='/activity'>Activities</Link></li>
                <li><Link to='/triptypes'>TripTypes</Link></li>
              </ul>
            </li>
            <li><Link to="gallery">Gallery</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="blogs">Blogs</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </div>

        <div className='flex items-center space-x-3'>
          
          <Link to="/setting" className='text-xl'>
            <i className="bi bi-gear-fill"></i>
          </Link>
          <Link to="/register" className='text-xl'>
            <i className="fa-solid fa-user"></i> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



