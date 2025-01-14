import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from './authindex'

const AdminRoute = () => {
  return (

    isAuthenticated() && isAuthenticated().user.role === 1 ?
    <Outlet/>
    
    :
    <Navigate to='/login'/>
  )
}

export default AdminRoute

