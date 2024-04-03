import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
          <Outlet />
<<<<<<< HEAD
      <Footer />
=======
       <Footer /> 
>>>>>>> c2151b2110c62cc7f4e31bc0e4a815d9817f1b25
    </>
  );
};

export default Layout;
