import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AdminSidebar from '../Admin/AdminSidebar'
import { isAuthenticated } from './authindex'

const AdminRoute = () => {
  return (

    isAuthenticated() && isAuthenticated().user.role === 1 ?
    <>
    <AdminSidebar/>
    <Outlet/>
    
    
    </>
    :
    <Navigate to='/login'/>
  )
}

export default AdminRoute

