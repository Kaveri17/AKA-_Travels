import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
          <Outlet />
      <Footer />
<<<<<<< HEAD
      
       
=======
>>>>>>> 7671563af816c0623f4f484c9f77b9f894c5ae38
    </>
  );
};

export default Layout;
