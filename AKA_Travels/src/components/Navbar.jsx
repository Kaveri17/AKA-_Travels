

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




// import React from 'react'
// import './Navbar.css'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <>
//     <div className='mx-auto w-5/6 relative'>

//     {/* <div className="nav items-center">
//       <img src="/Image/logo2.png" alt=""className='logo w-28 h-28 rounded'/>
//       <div className="navbar">
//         <ul className='flex  items-center space-x-4 text-xl'>
//           <li><a href=""></a>Home</li>
//           <li><a href=""></a>Popular</li>
//           <li><a href=""></a>Pages</li>
//           <li><a href=""></a>Gallery</li>
//           <li><a href=""></a>About</li>
//           <li><a href=""></a>Blogs</li>
//           <li><a href=""></a>contact</li>
//         </ul>
//         <div className="nav-right flex space-x-3 ">
//         <div className="search-container flex items-center py-3 rounded-2xl relative">
//           <input type="text" placeholder="Search..."/>
//           <i className="fa-solid fa-magnifying-glass  right-2 text-xl absolute"></i>

//         </div>
//         <div>
//           <i className="fa-solid fa-user text-2xl py-3 "></i>
//           </div>

          
//       </div>
    

//       </div>
      
       
//         </div> */}
//        <div className='flex items-center justify-between flex-wrap   '>
//         <div className="nav-img  w-24 ">
//           <img src="/Image/logo2.png" alt="" className='w-full h-full' />
//         </div>
       
//         <div className="nav text-2xl ps-2 ">
//             <li className='pe-3'>  <Link to="/">Home</Link></li>
//             <li className='pe-3'>  <Link to ="/popular">Popular</Link></li>
          
//             <li className='pe-3 navbar-pages'> <Link to="pages">Pages</Link>              
//             <ul className='dropdown absolute  '>
//               <li><Link to='/activity '>Activities</Link></li>
//               <li><Link to='/triptypes '>Trip Types</Link></li>
//             </ul>
//             </li>
            
//             <li className='pe-3'> <Link to="gallery">Gallery</Link></li>
//             <li className='pe-3'> <Link to="about">About</Link></li>
//             <li className='pe-3'> <Link to="blogs">Blogs</Link></li>
//             <li className='pe-3'>  <Link to="contact">contact</Link></li>
//               </div>
           
//               {/* <div className=' space-x-3'><input type="text" placeholder='search' className='bg-gray-200' /> */}
//               {/* <i class="fa-solid fa-magnifying-glass text-2xl font-bold pe-3"></i> */}
//               <Link to="/setting" >
//               <i class="bi bi-gear-fill text-xl bold "></i>
//               </Link>
//               <Link to="/register" >
//                 <i class="fa-solid fa-user text-xl bold "></i> 
//               </Link>
              



//               {/* <i class="fa-solid fa-bars text-xl bold"></i> */}
//               {/* </div> */}
              
                  
   
//         </div>
//     </div>

   
        
//     </>
//   )
// }

// export default Navbar;



