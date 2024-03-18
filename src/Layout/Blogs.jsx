import React from 'react'
import Header from './Header'

import './Blogs.css'


const Blogs = () => {
  return (
   <>
   <Header/>
   <div className='Blogs'>
<div className=' w-full '>
    <img src="\Image\pic3.webp" alt="" className='pic3'/>


<div className='blogscontainer border-2 border-slate-600  '>
   
        <h1 className='font-extrabold leading-10 text-3xl font-serif'>The salty breeze that carries with it the unmistakable scent of the ocean, mingling with the faint whispers of palm trees swaying in the distance.</h1>
        <p className='py-12 font-bold leading-10 text-1xl text- font-serif'>As the sun dances upon the water's surface, it paints the horizon with hues of orange and pink, a breathtaking display of nature's artistry. Footprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary. Here, time seems to slow, allowing for moments of pure tranquility and connection with the natural world.</p>
        <button>READ MORE</button>
    </div>
</div>

   
   {/* <div className='w-full'> */}
    <img src="\Image\pic2.webp" alt="" className='pic2'/>
    <div className='blogscontainer border-2 border-slate-600'>
        <h1 className='font-extrabold leading-10 text-3xl font-serif'>ootprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary.</h1>
        <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>With our extreme mobility we have lost connectedness with the land. We tend to avoid what is unique and defining of landscapes and to look for what is common or universal.</p>
       
        {/* <Button>READ MORE</Button> */}
        </div>
    

    <img src="\Image\pic1.jpeg" alt="" className='pic3'/>
    <div className='blogscontainer border-2 border-slate-600'>
        <h1 className='font-extrabold leading-10 text-3xl font-serif'>ootprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary.</h1>
        <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>With our extreme mobility we have lost connectedness with the land. We tend to avoid what is unique and defining of landscapes and to look for what is common or universal.</p>
        <button>READ MORE</button>
    </div>



   </div>
   


   
   
   </>
  )
}

export default Blogs