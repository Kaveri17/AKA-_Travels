import React from 'react'
import Header from './Header'
// import { MailIcon } from '@heroicons/react/outline'

import './Blogs.css'


const Blogs = () => {
  return (
   <>
  
   <div className='Blogs flex justify-between'>

    <div className="w-5/6 mx-auto flex">
        <div className="blog-left w-4/6 ps-12">
        <a href="/blogdetail">
            <div className=' w-full my-12 overflow-hidden'>
            
            <img src="\Image\picc.webp" alt="" className='pic3 h-96'/>
        <div className='blogscontainer border-2 border-slate-600 '>
                <h1 className='font-extrabold leading-10 text-3xl font-serif'>The salty breeze that carries with it the unmistakable scent of the ocean, mingling with the faint whispers of palm trees swaying in the distance.</h1>
                <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>As the sun dances upon the water's surface, it paints the horizon with hues of orange and pink, a breathtaking display of nature's artistry. Footprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary. Here, time seems to slow, allowing for moments of pure tranquility and connection with the natural world.</p>
               {/* <div className='m-3'>
               <i className="bi bi-calendar pe-8">12 December 2023</i>
               <i className="bi bi-eye-fill pe-8">Views(367)</i>
               <i class="bi bi-chat-right-dots pe-8">0 comments</i>
               </div> */}
               <div class="m-3 flex flex-wrap items-center">
    <i class="bi bi-calendar pe-8 mb-2 sm:mb-0">12 December 2023</i>
    <i class="bi bi-eye-fill pe-8 mb-2 sm:mb-0">Views(367)</i>
    <i class="bi bi-chat-right-dots pe-8 mb-2 sm:mb-0">0 comments</i>
</div>

                <button className='font-bold readmore'>READ MORE <i class="bi bi-arrow-right text-lg"></i></button>
            </div>
            
            </div>
            </a>
            
           
        <a href="/blogdetaill">
        <div className='w-full my-11  overflow-hidden'>
            <img src="\Image\piccc.jpeg" alt="" className='pic2 h-96'/>
            <div className='blogscontainer border-2 border-slate-600'>
                <h1 className='font-extrabold leading-10 text-3xl font-serif'>ootprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary.</h1>
                
                <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>With our extreme mobility we have lost connectedness with the land. We tend to avoid what is unique and defining of landscapes and to look for what is common or universal.It paints the horizon with hues of orange and pink, a breathtaking display of nature's artistry</p>
               {/* <div className='m-3'>
                <i class="bi bi-calendar pe-8">12 December 2023</i>
                <i class="bi bi-eye-fill pe-8">Views(345)</i>
                <i class="bi bi-chat-right-dots pe-8">0 comments</i>
                </div> */}
          <div class="m-3 flex flex-wrap items-center">
          <i class="bi bi-calendar pe-8 mb-2 sm:mb-0">12 December 2023</i>
          <i class="bi bi-eye-fill pe-8 mb-2 sm:mb-0">Views(367)</i>
          <i class="bi bi-chat-right-dots pe-8 mb-2 sm:mb-0">0 comments</i>
          </div>


                <button className='font-bold readmore'>READ MORE <i class="bi bi-arrow-right"></i></button>
            </div>
            
            </div>
            </a>
            <a href="/blogdetailll">


           <div className='w-full my-11  overflow-hidden'>
            <img src="\Image\picccc.jpeg" alt="" className='pic1 h-96'/>
            <div className='blogscontainer border-2 border-slate-600'>
                <h1 className='font-extrabold leading-10 text-3xl font-serif'>ootprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary.</h1>
                <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>With our extreme mobility we have lost connectedness with the land. We tend to avoid what is unique and look for what is common or universal.It paints the horizon with hues of orange and pink, a breathtaking display of nature's artistry</p>
               {/* <div className='m-3'>
                <i class="bi bi-calendar pe-8">12 December 2023</i>
                <i class="bi bi-eye-fill pe-8">Views(200)</i>
                <i class="bi bi-chat-right-dots pe-8">0 comments</i>
                </div> */}
                <div className="m-3 flex flex-wrap items-center">
                    <i class="bi bi-calendar pe-8 mb-2 sm:mb-0">12 December 2023</i>
                    <i class="bi bi-eye-fill pe-8 mb-2 sm:mb-0">Views(367)</i>
                    <i class="bi bi-chat-right-dots pe-8 mb-2 sm:mb-0">0 comments</i>
                </div>

                <button className='font-bold readmore'><span></span>READ MORE  <i class="bi bi-arrow-right"></i></button>
            </div>        
        </div>
        </a>
        </div>
            
                    
      
      <div className="blog-right w-2/6 flex flex-col">
      {/* <div className="search">
            <h1 className='font-extrabold leading-10 text-2xl font-serif underline m-5 '>SEARCH</h1>
             <input  type="text"
            className="w-2/5 py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-6 cursor-pointer"
            />SEARCH
        </div>
        */}

    <div class="search">
    <h1 class='font-extrabold leading-10 text-2xl font-serif underline m-5 '>SEARCH</h1>
    <input type="text" class="w-2/5 sm:w-2/5 py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-6 cursor-pointer" placeholder="Search..."/>
    </div>

        


        {/* <div class="search">
    <h1 class="font-extrabold leading-10 text-3xl font-serif underline m-5 ">SEARCH</h1>
    <input type="text" className="w-full sm:w-2/5 py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-6 cursor-pointer" placeholder="SEARCH"/>
</div> */}

        
        <div className="blogdown">
        <h1 className='font-extrabold leading-10 text-2xl font-serif underline m-5'>RECENT POSTS</h1>
      </div>
      <div className='m-5 flex flex-col justify-center '>
      <img src="\Image\picc.webp" alt="" className='h-24 w-24 py-2 '/>
      <i class="bi bi-calendar pe-8 ">12 December 2023</i>
      <h1>The number of tourists visiting the Maldives in 2023 surpassed the government's estimated figure by 78. </h1>



      <img src="\Image\piccc.jpeg" alt="" className='h-24 w-24 py-2 '/>
      <i class="bi bi-calendar pe-8">12 December 2023</i>
      <h1>The messages for Greek tourism at ITB Berlin, one of world's largest travel exhibitions, give high.</h1>



      <img src="\Image\picccc.jpeg" alt="" className='h-24 w-24 py-2 '/>
      <i class="bi bi-calendar pe-8">12 December 2023</i>
      <h1>Thailand has positioned itself astutely to capture outbound travel demand from China. </h1>
      </div>

      <div className='font-extrabold leading-10 text-2xl font-serif underline m-5'>CATEGORY</div>
      <ul className='list-unstyled w-full'>
       <div className=' py-4 px-6'>
        <li className='categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">LUXURY(5)</a></li>
      
        <li className=' categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">FOOD(3)</a></li>
        <li className='categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">SUMMER(2)</a></li>
        <li className='categories py-4 ps-4 my-2 rounded-lg hover:bg-orange-400'><a href="">TRAVEL(6)</a></li>
        <li className='categories py-4 ps-4 my-2 rounded-lg hover:bg-orange-400'><a href="">NEW YEAR(4)</a></li>

       </div>
      </ul>
      

      <div className='font-extrabold leading-10 text-2xl font-serif underline m-5'>LETTER</div>
      <input type="email" placeholder='Enter your email here' name='user_email' required className=' py-2 m-4' />
      {/* <input type="email" placeholder="Enter your email here" name="user_email" required class="py-2 px-4 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-8 my-2 w-full sm:w-auto md:w-64 lg:w-72 xl:w-96" /> */}

      


      <button type='submit' className=' py-2 m-3 border-2 bg-orange-400'>SUBSCRIBE</button>



      <div className='font-extrabold leading-10 text-2xl font-serif underline m-5'>NEVER MISS NEWS</div>
      <div className='flex m-3 justify-center'>
      <a href="" className='icons text-4xl'><i class=" hi bi bi-facebook pe-8 "></i></a>
      <a href="" className='icons text-4xl'><i class=" hiiii bi bi-instagram pe-8 "></i></a>
      <a href="" className='icons text-4xl'><i class="hiiiii bi bi-twitter pe-8 "></i></a>
      <a href="" className='icons text-4xl'><i class=" hiii bi bi-pinterest pe-8 "></i></a>
      </div>






      </div>

    </div>
      
    </div>









    





    
     
                
   
   


   
   
   </>
  )
}

export default Blogs