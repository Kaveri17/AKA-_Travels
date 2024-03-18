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
       
        <div className="nav w-full h-screen" style={{backgroundImage: "url('https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/banner-bg-1.png')"}} >



            <h1 className='w-18 ps-8 font-bold text-3xl '>Uncovering Stories, One Trip At A <br>
            </br>Time</h1>
            <p className='para mt-9 mx-8'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Corrupti labore quisquam, perspiciatis assumenda
                <br />
                 voluptatibus iste eos est iusto cumque alias laborum eligendi. Sint.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">READ MORE</button>
            </div>
       
        
    </>
  )
}

export default Navbar