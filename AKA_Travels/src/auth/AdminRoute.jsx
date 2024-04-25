import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AdminSidebar from '../Admin/AdminSidebar'

const AdminRoute = () => {
  return (

    isAuthenticated() && isAuthenticated().user.role===0 ?
    <>
    <AdminSidebar/>
    <Outlet/>
    
    
    </>
    :
    <Navigate to='/login'/>
  )
}

export default AdminRoute

