import React from 'react'
import Headers from './Headers'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
          <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
