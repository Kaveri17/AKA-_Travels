import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className="navbar flex items-center justify-between text-black p-4">
      <div className="flex items-center">
        <img src="/Image/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <a href="#" className="font-bold text-lg"></a>
        </div>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Popular</a></li>
          <li><a href="#" className="hover:text-gray-300">Pages</a></li>
          <li><a href="#" className="hover:text-gray-300">Gallery</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Blogs</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
        <div className="ml-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ">Sign In</button>
        </div>
      </div>
    </nav>
      
    </>
  )
}

export default Navbar