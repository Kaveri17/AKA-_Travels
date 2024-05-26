// import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
// import { API } from '../config'

const Adminani = () => {
  // const [gallery, setGallery]=useState([])
 
  // useEffect(()=>{
  //     axios.get(`${API}/getgallery`)
  //     .then(res=>{
  //         console.log(res.data)
  //         setGallery(res.data)

  //     })
  //     .catch(err=>console.log(err))


  // },[])

  return (
    <>
    <div className=''>
      <div className="dash font-bold text-4xl ">
        <h1 className='pt-3 ps-4 text-center '>WELCOME TO DASHBOARD <br /><span className='p'>OF AKA TRAVELS</span> </h1>
      </div>

      <div className='container pt-12 flex flex-wrap    '>
          
      <div className='panda border-2 border-solid bg-blue-400 md:w-1/3 w-full lg:1/3 sm:w-1/2 flex justify-between items-center py-8 px-4  hover:bg-white 'style={{height:"24vh"}}>
          <div className='text-3xl font-bold text-center w-3/5 overflow-hidden '>
            <Link to='/'>
            {/* <total className=''>12</total> */}
            <h1 className='lg:text-3xl sm:text-base text-3xl'>Home</h1>
            </Link>
          </div>
          <div className=' w-1/3'>
          <i class="fa-solid fa-house text-6xl"></i>
          </div>
          </div>

      <div className='panda  border-2 border-solid bg-blue-400 md:w-1/3  lg:1/3 sm:w-1/2 flex justify-between items-center w-full py-8 px-4  hover:bg-white 'style={{height:"24vh"}}>
    
          <div className='text-3xl font-bold text-center   '>
          <Link to='/profile'> 
          {/* <total className=''>12</total> */}
         
          <h1 className='lg:text-3xl sm:text-base text-3xl'>Users</h1>
          </Link>
          </div>
          
          <div className=' flex flex-col justify-between items-center w-1/3  mx-auto  '>
            <img src="/Image/123.png" alt="" className='w-full'/>
            
          </div>
          
          </div>
         
        <div className='panda border-2 border-solid bg-blue-400 md:w-1/3 w-full lg:1/3 sm:w-1/2 flex justify-between items-center py-8 px-4  hover:bg-white  'style={{height:"24vh"}}>
       
          <div className='text-3xl font-bold text-center w-3/5 overflow-hidden '>
          <Link to='/admin/adminmessage'>
            {/* <total className=''>12</total> */}
           <h1 className='lg:text-2xl sm:text-base text-2xl'>Messages</h1>
           </Link>
          </div>
          <div className=' w-1/3'>
            <img src="/Image/mess.png" alt="" className='w-full'/>
          </div>
         
          </div>
    
          
          <div className='panda border-2 border-solid bg-blue-400 md:w-1/3 w-full lg:1/3 sm:w-1/2 flex justify-between items-center py-8 px-4  hover:bg-white  'style={{height:"24vh"}}>
         
          <div className='text-3xl font-bold text-center w-3/5 overflow-hidden '>
          <Link to='/admin/showcategories'>
            {/* <total className=''>12</total> */}
            <h1 className='lg:text-3xl sm:text-base text-3xl'>Category</h1>
            </Link>
          </div>

          <div className=' w-1/3'>
            <img src="/Image/cat.png" alt="" className='w-full'/>
          </div>
        
          </div>

     
        
         
          <div className='panda border-2 border-solid bg-blue-400 md:w-1/3 w-full lg:1/3 sm:w-1/2 flex justify-between items-center py-8 px-4  hover:bg-white 'style={{height:"24vh"}}>
         
          <div className='text-3xl font-bold text-center w-3/5 overflow-hidden '>
          <Link to='/admin/showgallery '>
            {/* <total className=''>{gallery.length}</total> */}
            <h1 className='lg:text-3xl sm:text-base text-3xl'>Gallery</h1>
            </Link>
          </div>
          <div className=' w-1/3'>
            <img src="/Image/gall.png" alt="" className='w-full'/>
          </div>
          
          </div>
          <div className='panda border-2 border-solid bg-blue-400 md:w-1/3 w-full lg:1/3 sm:w-1/2 flex justify-between items-center py-8 px-4  hover:bg-white 'style={{height:"24vh"}}>
        
          <div className='text-3xl font-bold text-center w-3/5 overflow-hidden '>
          <Link to='/setting'>
            {/* <total className=''>12</total> */}
            <h1 className='lg:text-3xl sm:text-base text-3xl'>Setting</h1>
            </Link>
          </div>
          <div className=' w-1/3'>
          <i className="fa-solid fa-gear text-6xl"></i>
          </div>
       
          </div>

        
        

        
          
      
         
  
        
       
    
   
   
      </div>

    </div>
    
    </>
  )
}

export default Adminani