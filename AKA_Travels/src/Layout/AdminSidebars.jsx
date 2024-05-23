import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const AdminSidebars = () => {

  function signout(){
    localStorage.clear();
    Navigate('/login')
  }
  return (
  <>

<div className='text-2xl border-solid border-2 bg-sky-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'style={{height:"100vh",}}>
  <div className="travel pt-4 sm:pl-4 md:pl-8 lg:pl-12 xl:pl-12">
    <h1 className='font-extrabold  text-pink-400  gitas'>AKA TRAVELS</h1>
    <div className=' pt-4'>
      <ul>
        <li className='py-2'>
          <Link to='/'><i class="fa-solid fa-house text-2xl"></i><span className='pl-2 font-semibold rams'>Homepage</span></Link>
        </li>
        <li className='py-2'>
          <Link to='/profile'><i class="fa-solid fa-user text-2xl"></i><span className='pl-2 font-semibold rams'>User</span></Link>
        </li>
        <li className='py-2'>
          <Link to='/admin/adminmessage'><i class="fa-solid fa-comments text-2xl"></i><span className='pl-2 font-semibold rams'>Messages</span></Link>
        </li>
        <li className='py-2'>
          <Link to='/admin/admincategory'><i class="fa-solid fa-layer-group text-2xl"></i><span className='pl-2 font-semibold rams'>Category</span></Link>
        </li>
        {/* <li className='py-2'>
          <Link to='/packages'><i className="fa-regular fa-newspaper text-2xl"></i><span className='pl-2 font-semibold rams'>Packages</span></Link>
        </li> */}
        <li className='py-2'>
          <Link to='gallery'><i class="fa-brands fa-envira text-2xl"></i><span className='pl-2 font-semibold rams'>Gallery</span></Link>
        </li>
        {/* <li className='py-2'>
          <Link to='popular'><i class="fa-solid fa-fire text-2xl"></i><span className='pl-2 font-semibold rams'>Popular</span></Link>
        </li> */}
        <li className='py-2'>
          <Link to='/setting'><i className="fa-solid fa-gear text-2xl"></i><span className='pl-2 font-semibold rams'>Settings</span></Link>
        </li>
      </ul>
      <Link to='' onClick={signout} className="flex items-center py-2">
        <i className="fa-solid fa-right-from-bracket text-2xl" />
        <span className='pl-2 font-semibold rams'>Logout</span>
      </Link>
    </div>
  </div>
</div>



  </>
  )
}

export default AdminSidebars