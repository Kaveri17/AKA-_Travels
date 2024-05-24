import React from 'react'
import AdminSidebars from '../Layout/AdminSidebars'
import Adminani from '../components/Adminani'

const AdminDashboard = () => {
  return (
  <>
   <div className='flex'>
   <AdminSidebars />

   <div className='w-3/4'>
<Adminani/>
   </div>
   </div>
   
    

  </>


  )
}

export default AdminDashboard