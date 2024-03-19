import React from 'react'
import Header from './Header'
// import { MailIcon } from '@heroicons/react/outline'

import './Blogs.css'


const Blogs = () => {
  return (
   <>
   <Header/>
   <div className='Blogs flex '>
        <div className="blog-left w-4/6">

        
            <div className=' w-full '>
            <img src="\Image\pic3.webp" alt="" className='pic3'/>


        <div className='blogscontainer border-2 border-slate-600  '>
        
                <h1 className='font-extrabold leading-10 text-3xl font-serif'>The salty breeze that carries with it the unmistakable scent of the ocean, mingling with the faint whispers of palm trees swaying in the distance.</h1>
                <p className='py-12 font-bold leading-10 text-1xl text- font-serif'>As the sun dances upon the water's surface, it paints the horizon with hues of orange and pink, a breathtaking display of nature's artistry. Footprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary. Here, time seems to slow, allowing for moments of pure tranquility and connection with the natural world.</p>
                <button className='font-bold'>READ MORE</button>
            </div>
            </div>

        
        {/* <div className='w-full'> */}
            <img src="\Image\pic2.webp" alt="" className='pic2'/>
            <div className='blogscontainer border-2 border-slate-600'>
                <h1 className='font-extrabold leading-10 text-3xl font-serif'>ootprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary.</h1>
                <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>With our extreme mobility we have lost connectedness with the land. We tend to avoid what is unique and defining of landscapes and to look for what is common or universal.</p>
            
                <button className='font-bold'>READ MORE</button>
            </div>
            

            <img src="\Image\pic1.jpeg" alt="" className='pic1'/>
            <div className='blogscontainer border-2 border-slate-600'>
                <h1 className='font-extrabold leading-10 text-3xl font-serif'>ootprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary.</h1>
                <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>With our extreme mobility we have lost connectedness with the land. We tend to avoid what is unique and defining of landscapes and to look for what is common or universal.</p>
                <button className='font-bold'><span></span>READ MORE</button>
            </div>        
        </div>
            
                    
      
      <div className="blog-right w-2/6 flex flex-col">
        <div className="search">
            <h1 className='font-extrabold leading-10 text-3xl font-serif underline m-5'>SEARCH</h1>
             <input  type="text"
            className="w-2/5 py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-6 "
            />SEARCH
        </div>
        
        <div className="blogdown">
        <h1 className='font-extrabold leading-10 text-3xl font-serif underline m-5'>RECENT POSTS</h1>
      </div>
      <img src="\Image\pic3.webp" alt="" className='h-24 w-24 py-2 rounded-full'/>
      <img src="\Image\pic2.webp" alt="" className='h-24 w-24 py-2 rounded-full'/>
      <img src="\Image\pic1.jpeg" alt="" className='h-24 w-24 py-2 rounded-full'/>









      </div>
      
    </div>
     
                
   
   


   
   
   </>
  )
}

export default Blogs