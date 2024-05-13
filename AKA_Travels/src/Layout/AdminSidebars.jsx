import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const AdminSidebars = () => {

  function signout(){
    localStorage.clear();
    Navigate('/login')
  }
  return (
  <>
  
  <div className='text-2xl border-solid border-2 bg-sky-200 ' style={{height:"100vh", width:"25vw"}}>
   <div className="travel pt-4 ps-12" >
    <h1 className='font-extrabold text-4xl  text-pink-400 '>AKA TRAVELS
    </h1>
    <div  className='pt-4'>
      <ul>
        <li className='py-2'><Link to='/'><i class="fa-solid fa-house text-2xl"></i><span className='ps-2 font-semibold'>Homepage</span></Link></li>
        <li ><Link to=''><i class="fa-solid fa-user text-2xl"></i> <span className='ps-2 font-semibold'>User</span></Link></li>

        <li className='py-2'><Link to=''><i class="fa-solid fa-comments text-2xl"></i><span className='font-semibold ps-2'>Comments</span></Link></li>

        <li><Link to=''><i class="fa-solid fa-blog text-2xl"></i><span className='font-semibold ps-2'>Blogs</span></Link> </li>
        <li className='py-2'> <Link to='packages'><i className="fa-regular fa-newspaper text-2xl"></i><span className='font-semibold ps-2'>Packages</span></Link> </li>
        <li><Link to='' className=''>
        <i className="fa-solid fa-gear text-2xl"></i>
        <span className='font-semibold ps-2'>Settings</span>
            </Link></li>
      </ul>
      <Link to='' onClick={signout}>
        <i className="fa-solid fa-right-from-bracket text-2xl " />
        <span className='font-semibold ps-2'>Logout</span>
      </Link>

    </div>
   </div>
    
  </div>

  </>
  )
}

export default AdminSidebars