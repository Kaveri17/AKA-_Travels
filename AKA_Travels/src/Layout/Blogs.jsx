

import React, { useEffect, useState } from 'react';             
import Header from './Header';
import './Blogs.css'
import { viewBlog } from '../api/Blog';
import { API } from '../config';


const Blogs = () => {
 const [blogs, setBlogs] = useState([])

  // const [error, setError] = useState('')

 
  

useEffect(()=> {
  viewBlog()
  .then(data => {
    if(data?.error){
      console.log(data.error)
      
    }
    else{
      setBlogs(data)
      console.log(data)
      
    }
  })
  .catch(error => console.error("error fetching blogs",error))
},[])
  




  
  return (
    <>
       <div className="Blogs mx-auto  w-5/6">
        <div className='mx-auto flex flex-col md:flex-row justify-between pb-14  w-full'>
     
        <div className="blog-left w-full md:w-4/6 px-4 md:px-12 ">
      {blogs?.length > 0 && blogs.map(blog => (
        <a key={blog._id} href={`/BlogDetail/${blog._id}`} className='block'>
          <div className='w-full my-12 overflow-hidden'>
            <img src={`${API}/${blog.blog_image}`} alt={blog.blog_name} className='pic3 h-96'/>
            <div className='blogscontainer border-2 border-slate-600 px-4'>
              <h1 className='font-extrabold leading-10 text-3xl font-serif'>{blog.blog_name}</h1>
              <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>{blog.blog_description}</p>
              <div className="border-t-2 border-orange-500 mx-6">
                <div className="m-3 flex flex-wrap items-center">
                  <i className="bi bi-calendar pe-8 mb-2 sm:mb-0">{blog.createdAt}</i>
                  <i className="bi bi-eye-fill pe-8 mb-2 sm:mb-0">{blog.No_of_views}</i>
                  <div className='border-l-2 ps-4 border-black'>
                    <i className="bi bi-chat-right-dots pe-2 sm:pe-8 mb-2 sm:mb-0">{blog.comments}</i>
                  </div>
                </div>
              </div>
              <button className='font-bold readmore mx-auto md:w-1/5 lg:w-1/6 xl:w-1/8 h-12 text-white bg-orange-400 border-2 rounded-lg flex items-center justify-center '>
                <span className="mr-2" >READ MORE</span>
                <i className="bi bi-arrow-right text-lg"></i>
              </button>
            </div>
          </div>
        </a>
      ))}
                 

          



{/* 
    <a href="/blogdetaill">
    <div className='w-full my-11 overflow-hidden'>
    <img src="\Image\piccc.jpeg" alt="" className='pic2 h-96'/>
    <div className='blogscontainer border-2 border-slate-600 px-4'>
    <h1 className='font-extrabold leading-10 text-3xl font-serif'>ootprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary.</h1>
    <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>With our extreme mobility we have lost connectedness with the land. We tend to avoid what is unique and defining of landscapes and to look for what is common or universal.It paints the horizon with hues of orange and pink, a breathtaking display of nature's artistry</p>
    <div class="border-t-2 border-orange-500 mx-6">
    <div class="m-3 flex flex-wrap items-center">
    <i class="bi bi-calendar pe-8 mb-2 sm:mb-0">12 December 2023</i>
    <i class="bi bi-eye-fill pe-8 mb-2 sm:mb-0">Views(367)</i>
    <div className='border-l-2 ps-4 border-black'>
    <i class="bi bi-chat-right-dots pe-8 mb-2 sm:mb-0">0 comments</i>
    </div>
    </div>
    </div>

    <button class='font-bold readmore mx-auto md:w-1/5 lg:w-1/6 xl:w-1/8 h-12 text-white bg-orange-400 border-2 rounded-lg flex items-center justify-center'>
    <span class="mr-2">READ MORE</span> 
    <i class="bi bi-arrow-right text-lg"></i>
    </button>

    </div>
    </div>
    </a>  */}
     {/* <a href="/blogdetailll">

    <div className='w-full my-11 overflow-hidden'>
    <img src="\Image\picccc.jpeg" alt="" className='pic1 h-96'/>
    <div className='blogscontainer border-2 border-slate-600 px-4'>
    <h1 className='font-extrabold leading-10 text-3xl font-serif'>ootprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary.</h1>
    <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>With our extreme mobility we have lost connectedness with the land. We tend to avoid what is unique and look for what is common or universal.It paints the horizon with hues of orange and pink, a breathtaking display of nature's artistry</p>
    <div class="border-t-2 border-orange-500 mx-6">
    <div className="m-3 flex flex-wrap items-center">
    <i class="bi bi-calendar pe-8 mb-2 sm:mb-0">12 December 2023</i>
    <i class="bi bi-eye-fill pe-8 mb-2 sm:mb-0">Views(367)</i>
    <div className='border-l-2 ps-4 border-black'>
    <i class="bi bi-chat-right-dots pe-8 mb-2 sm:mb-0">0 comments</i>
    </div>
    </div>
    </div>
    <button class='font-bold readmore  mx-auto md:w-1/5 lg:w-1/6 xl:w-1/8 h-12 text-white bg-orange-400 border-2 rounded-lg flex items-center justify-center'>
    <span class="mr-2">READ MORE</span> 
    <i class="bi bi-arrow-right text-lg"></i>
    </button>

    
    </div> 
    </div>
    </a>  */}
     <div className='flex flex-wrap justify-center'>

    <button className='font-bold block w-12 h-8 bg-orange-400 hover:bg-orange-400 border-2 rounded-md border-orange-600 text-black me-3 '>1</button>
    <a href="blogs" >
    <button className='font-bold block w-12 h-8 hover:bg-orange-400 border-2 rounded-md border-orange-600 text-black me-3'>2</button>
    </a>
    <a href="blogs">
    <button className='font-bold block w-12 h-8 border-2 hover:bg-orange-400 rounded-md border-orange-600 text-black '><i class="bi bi-chevron-right font-bold"></i></button>
    </a>
    </div> 

            </div>
 
            <div className="blog-right  flex flex-col w-full md:w-2/6  mt-8 ">
              
              <div className="search">
              <h1 className='font-extrabold leading-10 text-2xl font-serif underline m-3 '>SEARCH</h1>
              <input type="text" class="w-2/5 sm:w-2/5 py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-6 cursor-pointer" placeholder="Search..."/>
              </div>
              <div className="blogdown">
              <h1 className='font-extrabold leading-10 text-2xl font-serif underline m-3'>RECENT POSTS</h1>
              </div>
              <div className='m-5 flex flex-col justify-center '>
              <img src="\Image\picc.webp" alt="" className='h-24 w-24 py-2 '/>
              <i class="bi bi-calendar pe-8 ">12 December 2023</i>
              <h1 className='font-bold'>The number of tourists visiting the Maldives in 2023 surpassed the government's estimated figure by 78. </h1>
              <img src="\Image\piccc.jpeg" alt="" className='h-24 w-24 py-2 '/>
              <i class="bi bi-calendar pe-8">12 December 2023</i>
              <h1 className='font-bold'>The messages for Greek tourism at ITB Berlin, one of world's largest travel exhibitions, give high.</h1>
              <img src="\Image\picccc.jpeg" alt="" className='h-24 w-24 py-2 '/>
              <i class="bi bi-calendar pe-8">12 December 2023</i>
              <h1 className='font-bold'>Thailand has positioned itself astutely to capture outbound travel demand from China. </h1>
              </div>
              <div className='font-extrabold leading-10 text-2xl font-serif underline m-3'>CATEGORY</div>
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
              <input type="email" placeholder='Enter your email here' name='user_email' required className=' py-2 m-3' /> 
              <button type='submit' className=' py-2 m-3 border-2 bg-orange-400'>SUBSCRIBE</button>
              <div className='font-extrabold leading-10 text-2xl font-serif underline m-5'>NEVER MISS NEWS</div>
              <div class="flex flex-wrap justify-center m-2">
              <a href="" class="icons text-2xl md:w-auto md:p-2"><i class="hi bi bi-facebook pe-8"></i></a>
              <a href="" class="icons text-2xl md:w-auto md:p-2"><i class="hiiii bi bi-instagram pe-8"></i></a>
              <a href="" class="icons text-2xl md:w-auto md:p-2"><i class="hiiiii bi bi-twitter pe-8"></i></a>
              <a href="" class="icons text-2xl md:w-auto md:p-2"><i class="hiii bi bi-pinterest pe-8"></i></a>
              </div>
            </div> 

        </div>
      </div>
          
         
         
         

          
 
 
       
     </>
   );
 }
 
 

export default Blogs;
