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
    </>
  );
};

export default Layout;
