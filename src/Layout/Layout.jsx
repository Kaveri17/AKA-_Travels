import React from 'react'
import Headers from './Headers'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Headers/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout