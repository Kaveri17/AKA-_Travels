import React from 'react'

const Adminani = () => {
  return (
    <>
    <div className=''>
      <div className="dash font-bold text-4xl ">
        <h1 className='pt-3 ps-4 text-center '>WELCOME TO DASHBOARD <br /><span className='p'>OF AKA TRAVELS</span> </h1>
      </div>

      <div className='container pt-12 flex flex-wrap    '>

      <div className='panda  border-2 border-solid bg-blue-400 md:w-1/3  lg:1/3 sm:w-1/2 flex justify-between items-center w-full py-8 px-4  hover:bg-white 'style={{height:"24vh"}}>
          <div className='text-3xl font-bold text-center   '>
          <total className=''>12</total>
          <h1 className='lg:text-2xl sm:text-base text-2xl'>Users</h1>
          </div>
          <div className=' flex flex-col justify-between items-center w-1/3  mx-auto  '>
            <img src="/Image/123.png" alt="" className='w-full'/>
          </div>
          </div>
        <div className='panda border-2 border-solid bg-blue-400 md:w-1/3 w-full lg:1/3 sm:w-1/2 flex justify-between items-center py-8 px-4  hover:bg-white  'style={{height:"24vh"}}>
          <div className='text-3xl font-bold text-center w-3/5 overflow-hidden '>
            <total className=''>12</total>
            <h1 className='lg:text-2xl sm:text-base text-2xl'>Messages</h1>
          </div>
          <div className=' w-1/3'>
            <img src="/Image/mess.png" alt="" className='w-full'/>
          </div>
          </div>

       
          <div className='panda border-2 border-solid bg-blue-400 md:w-1/3 w-full lg:1/3 sm:w-1/2 flex justify-between items-center py-8 px-4  hover:bg-white 'style={{height:"24vh"}}>
          <div className='text-3xl font-bold text-center w-3/5 overflow-hidden '>
            <total className=''>12</total>
            <h1 className='lg:text-2xl sm:text-base text-2xl'>Packages</h1>
          </div>
          <div className=' w-1/3'>
            <img src="/Image/pngegg.png" alt="" className='w-full'/>
          </div>
          </div>

    
          
          <div className='panda border-2 border-solid bg-blue-400 md:w-1/3 w-full lg:1/3 sm:w-1/2 flex justify-between items-center py-8 px-4  hover:bg-white  'style={{height:"24vh"}}>
          <div className='text-3xl font-bold text-center w-3/5 overflow-hidden '>
            <total className=''>12</total>
            <h1 className='lg:text-2xl sm:text-base text-2xl'>Category</h1>
          </div>
          <div className=' w-1/3'>
            <img src="/Image/cat.png" alt="" className='w-full'/>
          </div>
          </div>

     
        
         
          <div className='panda border-2 border-solid bg-blue-400 md:w-1/3 w-full lg:1/3 sm:w-1/2 flex justify-between items-center py-8 px-4  hover:bg-white 'style={{height:"24vh"}}>
          <div className='text-3xl font-bold text-center w-3/5 overflow-hidden '>
            <total className=''>12</total>
            <h1 className='lg:text-2xl sm:text-base text-2xl'>Gallery</h1>
          </div>
          <div className=' w-1/3'>
            <img src="/Image/gall.png" alt="" className='w-full'/>
          </div>
          </div>

        
          
          <div className='panda border-2 border-solid bg-blue-400 md:w-1/3 w-full lg:1/3 sm:w-1/2 flex justify-between items-center py-8 px-4  hover:bg-white 'style={{height:"24vh"}}>
          <div className='text-3xl font-bold text-center w-3/5 overflow-hidden '>
            <total className=''>12</total>
            <h1 className='lg:text-2xl sm:text-base text-2xl'>Popular</h1>
          </div>
          <div className=' w-1/3'>
            <img src="/Image/pop.png" alt="" className='w-full'/>
          </div>
          </div>

        
          
      
         
  
        
       
    
   
   
      </div>

    </div>
    
    </>
  )
}

export default Adminani