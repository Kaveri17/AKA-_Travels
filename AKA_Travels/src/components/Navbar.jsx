
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar-container mx-auto w-5/6'>
      <div className='flex items-center justify-between'>
        <Link to='/'>
        <div className='navbar-img w-24'>
          <img src="/Image/logo2.png" alt="" className='w-full h-full' />
        </div>
        </Link>
        <div className='hidden md:flex navbar text-2xl ps-2'>
          <ul className='flex items-center space-x-4 text-2xl font-semibold'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/popular">Popular</Link></li>
            <li className='relative'
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}>
              <li to="pages">Pages</li>
              
            <ul className={`dropdown absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-white rounded-lg shadow-md`}>
               <li><Link to='/activity'>Activities</Link></li>
<br />            <li><Link to='/triptypes'>TripTypes</Link></li>
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
            <i className="bi bi-gear-fill text-3xl"></i>
          </Link>
          <Link to="/register" className='text-xl'>
            <i className="fa-solid fa-user text-3xl"></i>
          </Link>
          <button className='md:hidden text-xl' onClick={toggleMobileMenu}>
            <i className="fa fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mobile-menu bg-white rounded-lg shadow-md`}>
        <ul className='flex flex-col space-y-3 text-xl p-3'>
          <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/popular" onClick={toggleMobileMenu}>Popular</Link></li>
          <li className='relative'>
            <div onClick={toggleDropdown} className='cursor-pointer'>
              Pages
            </div>
            <ul className={`dropdown ${isDropdownOpen ? 'block' : 'hidden'} bg-white rounded-lg shadow-md mt-1`}>
              <li><Link to='/activity' onClick={toggleMobileMenu}>Activities</Link></li>

              <li><Link to='/triptypes' onClick={toggleMobileMenu}>TripTypes</Link></li>
            </ul>
          </li>
          <li><Link to="gallery" onClick={toggleMobileMenu}>Gallery</Link></li>
          <li><Link to="about" onClick={toggleMobileMenu}>About</Link></li>
          <li><Link to="blogs" onClick={toggleMobileMenu}>Blogs</Link></li>
          <li><Link to="contact" onClick={toggleMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


<<<<<<< HEAD

=======
>>>>>>> 46d9f8aa43cafdfd5f0ade7e2a45a3889d72c65b
