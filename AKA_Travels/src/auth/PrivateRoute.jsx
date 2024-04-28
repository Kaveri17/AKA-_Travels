import React from 'react'
import { isAuthenticated } from './authindex'
import { Navigate, Outlet } from 'react-router-dom'
import AdminSidebar from '../Admin/AdminSidebar'

const PrivateRoute = () => {
  return (

    isAuthenticated() && isAuthenticated().user.role===0 ?
    <>
    {/* <AdminSidebar/> */}
    <Outlet/>
    
    
    </>
    :
    <Navigate to='/login'/>
  )
}

export default PrivateRoute