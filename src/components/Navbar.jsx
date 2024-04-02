import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='mx-auto w-5/6 relative'>

    {/* <div className="nav items-center">
      <img src="/Image/logo2.png" alt=""className='logo w-28 h-28 rounded'/>
      <div className="navbar">
        <ul className='flex  items-center space-x-4 text-xl'>
          <li><a href=""></a>Home</li>
          <li><a href=""></a>Popular</li>
          <li><a href=""></a>Pages</li>
          <li><a href=""></a>Gallery</li>
          <li><a href=""></a>About</li>
          <li><a href=""></a>Blogs</li>
          <li><a href=""></a>contact</li>
        </ul>
        <div className="nav-right flex space-x-3 ">
        <div className="search-container flex items-center py-3 rounded-2xl relative">
          <input type="text" placeholder="Search..."/>
          <i className="fa-solid fa-magnifying-glass  right-2 text-xl absolute"></i>

        </div>
        <div>
          <i className="fa-solid fa-user text-2xl py-3 "></i>
          </div>

          
      </div>
    

      </div>
      
       
        </div> */}
       <div className='flex items-center justify-between flex-wrap   '>
        <div className="nav-img  w-24 ">
          <img src="/Image/logo2.png" alt="" className='w-full h-full' />
        </div>
       
        <div className="nav text-2xl ps-2 ">
            <li className='pe-3'>  <Link to="/">Home</Link></li>
            <li className='pe-3'>  <Link to ="/popular">Popular</Link></li>
          
            <li className='pe-3 navbar-pages'> <Link to="pages">Pages</Link>              
            <ul className='dropdown absolute  '>
              <li><Link to='/activity '>Activities</Link></li>
              <li><Link to='/triptypes '>Trip Types</Link></li>
            </ul>
            </li>
            
            <li className='pe-3'> <Link to="gallery">Gallery</Link></li>
            <li className='pe-3'> <Link to="about">About</Link></li>
            <li className='pe-3'> <Link to="blogs">Blogs</Link></li>
            <li className='pe-3'>  <Link to="contact">contact</Link></li>
              </div>
           
              <div className=' space-x-3'><input type="text" placeholder='search' className='bg-gray-200' />
              <i class="fa-solid fa-magnifying-glass text-2xl font-bold pe-3"></i>
              <i class="fa-solid fa-user text-xl bold pe-3"></i>
              <i class="fa-solid fa-bars text-xl bold"></i>
              </div>
              
                  
   
        </div>
    </div>

   
        
    </>
  )
}

export default Navbar