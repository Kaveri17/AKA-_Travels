import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPackages } from '../api/Package'
import { API } from '../config'

const Packages = () => {
    const [packages,setPackages]=useState([])
    useEffect(()=>{
        getPackages()
        .then(data=>{
            if(data?.error){
                console.log(data.error)
            }
            else{
                setPackages(data)
                console.log(data)
            }
        })


    },[])
    

console.log(packages)




  return (
   
   <>
        <div className='mx-auto w-5/6 pt-6'>
           
        <h1 className='text-4xl font-bold  '>CITY TOUR</h1>
        <div className="tour flex flex-wrap pt-6 pb-6 ">
        {
        packages.length>0 && packages.map( pack=>{

            
            <div className="img-tour  w-full md:w-1/2  lg:w-2/5 ">
                <img src="/Image/pic4.jpeg" alt="" className='w-full h-full' />


                {/* <img src={`${API}/${package.image}`} alt="" className='w-full h-full' /> */}
            </div>
     })}
       
            <div className="beauty  w-full md:1/2  lg:w-1/3 ps-4">
                <h1 className='text-2xl font-bold pb-4'> {packages.title} <i class="fa-solid fa-heart text-red-800 ps-14"></i></h1>

            <div className=" pb-14 ">
                <h1 ><i class="fa-solid fa-location-dot font-bold pe-2 pb-2 text-xl "></i>{packages.product_location}</h1>
                <h1><i class="fa-regular fa-clock  font-bold pe-2 pb-2 text-xl"></i>{packages.days}</h1>
                <h1><i class="fa-solid fa-user-group  font-bold pe-2 pb-2 text-xl"></i>{packages.product_person}</h1>
                <h1><i class="fa-solid fa-signal  font-bold pe-2 text-xl "></i>Easy</h1>
                <p className='pt-3'>{packages.overview}

                </p>
            </div>
            </div>
            <div className="flex flex-col md:pt-12  ps-10  border-l-2   ">
            <div>
               <button className='border-2 border-solid rounded-full  border-red-300 hover:bg-slate-400 px-6 py-1'>10% Off</button>
               </div>
               <div className='pt-4  flex'>
                <div className='text-4xl font-bold'>
                {packages.price}
                </div>
           
               
                 <strike className=' ps-3 '>{packages.price}</strike>
                
               
            </div>
        
          
            <div className="div pt-3">
               <h1>Next Departure</h1>
                <h1><i class="fa-solid fa-check pt-2 pe-2 text-red-400"></i>Apr 02</h1>
                <h1><i class="fa-solid fa-check pt-2 pe-2 text-red-400"></i>Apr 03</h1>
                <h1><i class="fa-solid fa-check pt-2 pe-2 text-red-400"></i>Apr 04</h1>

            </div>
        
            </div>
          



        </div>





        
    
    <div className="year border-t-2 pb-14 pt-2  ">
        <h1 className='text-xl'>Available through out the year:</h1>
        <div className="flex flex-wrap justify-between">
            <div className="div flex flex-wrap  w-full  lg:w-1/2 pt-3  ">
                <h1 className='pe-2'><i class="fa-regular fa-calendar-check text-xl font-bold text-red-500"></i></h1>
                <h1 className='pe-2'>Jan</h1>
                <h1 className='pe-2'>Feb</h1>
                <h1 className='pe-2'>Mar</h1>
                <h1 className='pe-2'>Apr</h1>
                <h1 className='pe-2'>May</h1>
                <h1 className='pe-2'>June</h1>
                <h1 className='pe-2'>Jul</h1>
                <h1 className='pe-2'>Aug</h1>
                <h1 className='pe-2'>Sep</h1>
                <h1 className='pe-2'>Oct</h1>
                <h1 className='pe-2'>Nov</h1>
                <h1 className='pe-2'>Dec</h1>
            
            </div>
            <div className=''>
                <Link to='/details/{product._id}'>
                    <button className='border-2 border-solid border-red-300 px-3 py-2 rounded-md hover:bg-slate-400 '>View Trip</button>
                </Link>
            </div>
   
            
        </div>


    
        
        
    </div>



    
   
            
            <div className="tour flex flex-wrap pt-6 pb-6 ">
            <div className="img-tour  w-full md:w-1/2  lg:w-2/5 ">
                <img src="/Image/pic8.jpeg" alt="" className='w-full h-full' />
            </div>
            <div className="beauty  w-full md:1/2  lg:w-1/3 ps-4">
                <h1 className='text-2xl font-bold pb-4'> 7 Days tour to Explore the beauty of USA <i class="fa-solid fa-heart text-red-800 ps-16"></i></h1>

            <div className=" pb-14 ">
                <h1 ><i class="fa-solid fa-location-dot font-bold pe-2 pb-2 text-xl "></i>USA, shipview</h1>
                <h1><i class="fa-regular fa-clock  font-bold pe-2 pb-2 text-xl"></i>6 Days</h1>
                <h1><i class="fa-solid fa-user-group  font-bold pe-2 pb-2 text-xl"></i>2 People</h1>
                <h1><i class="fa-solid fa-signal  font-bold pe-2 text-xl "></i>Easy</h1>
                <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsa nam vel nemo obcaecati facilis asperiores fuga error, quas modi a quisquam aspernatur alias velit.

                </p>
            </div>
            </div>
            <div className="flex flex-col md:pt-12  ps-10  border-l-2   ">
                <div>
               <button className='border-2 border-solid rounded-full  border-red-300 hover:bg-slate-400 px-6 py-1'>10% Off</button>
               </div>
               <div className='pt-4  flex'>
                <div className='text-4xl font-bold'>
                $900 
                </div>
           
               
                 <strike className=' ps-3 '>$100</strike>
                
               
            </div>
          
            <div className="div pt-3">
               <h1>Next Departure</h1>
                <h1><i class="fa-solid fa-check pt-2 pe-2 text-red-400"></i>Apr 02</h1>
                <h1><i class="fa-solid fa-check pt-2 pe-2 text-red-400"></i>Apr 03</h1>
                <h1><i class="fa-solid fa-check pt-2 pe-2 text-red-400"></i>Apr 04</h1>


            </div>
            </div>
            
            
        </div>
        <div className="year border-t-2 pb-14 pt-2  ">
        <h1 className='text-xl'>Available through out the year:</h1>
        <div className="flex flex-wrap justify-between">
            <div className="div flex  flex-wrap  w-full  lg:w-1/2 pt-3  ">
                <h1 className='pe-2'><i class="fa-regular fa-calendar-check text-xl font-bold text-red-500"></i></h1>
                <h1 className='pe-2'>Jan</h1>
                <h1 className='pe-2'>Feb</h1>
                <h1 className='pe-2'>Mar</h1>
                <h1 className='pe-2'>Apr</h1>
                <h1 className='pe-2'>May</h1>
                <h1 className='pe-2'>June</h1>
                <h1 className='pe-2'>Jul</h1>
                <h1 className='pe-2'>Aug</h1>
                <h1 className='pe-2'>Sep</h1>
                <h1 className='pe-2'>Oct</h1>
                <h1 className='pe-2'>Nov</h1>
                <h1 className='pe-2'>Dec</h1>
            
            </div>
            <div className=''>
                <Link to='/details'>
                    <button className='border-2 border-solid border-red-300 px-3 py-2 rounded-md hover:bg-slate-400 '>View More</button>
                </Link>
            </div>
            
        </div>
        
        
    </div>
        
        
    </div>



   
    
    </>
  )
}

export default Packages





