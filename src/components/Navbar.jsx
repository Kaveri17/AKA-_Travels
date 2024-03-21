import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>

    <div className="nav flex justify-between items-center w-4/5 mx-auto ">
      <img src="/Image/logo2.png" alt=""className='logo w-28 h-28 rounded'/>
      <div className="navbar">
        <ul className='flex justify-between items-center space-x-9 text-2xl'>
          <li><a href=""></a>Home</li>
          <li><a href=""></a>Popular</li>
          <li><a href=""></a>Pages</li>
          <li><a href=""></a>Gallery</li>
          <li><a href="">About</a></li>
          <li><a href="">Blogs</a></li>
          <li><a href="">contact</a></li>
        </ul>

      </div>
      <div className="nav-right flex space-x-2 ">
        <div class="search-container flex items-center py-3 rounded-2xl relative">
          <input type="text" placeholder="Search..."/>
          <i class="fa-solid fa-magnifying-glass  right-2 text-xl absolute"></i>

        </div>
          <div>
          <i class="fa-solid fa-user text-2xl py-3 "></i>
          </div>

      </div>
    
       
        </div>
        
    </>
  )
}

export default Navbar