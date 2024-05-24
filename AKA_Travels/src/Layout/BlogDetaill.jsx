import React from 'react';
import './Blogs.css';

const BlogDetail = () => {
  
  return (
    <>
      <div className="Blogs mx-auto w-5/6 ">
        <div className="mx-auto w-full md:w-5/6 flex flex-col md:flex-row justify-between pb-14">
          <div className="blog-left w-full md:w-4/6 px-4 md:px-12">
            <div className="w-full my-11">
              <img src="\Image\piccc.jpeg" alt="" className="pic3 h-96" />
              <div className="blogscontainer">
                <h1 className="font-extrabold leading-10 text-3xl font-serif py-8">The salty breeze that carries with it the unmistakable scent of the ocean, mingling with the faint whispers of palm trees swaying in the distance.</h1>
                <i className="bi bi-calendar pe-2 sm:pe-8 py-2 sm:py-8">12 December 2023</i>
                <i className="bi bi-person text-lg">Wp-travolo</i>
                <p className="py-12 leading-10 text-1xl text-font-mono">Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui.  molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur elit.<br />Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.<br />Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur elit.</p>
              </div>

              <div className="bg-gray-200 opacity-75 border-l-4 border-orange-600 py-4">
                <h1 className="italic text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor in sit amget, consectetur elit.</h1>
                <i className="bi bi-dash text-4xl text-red-600 py-12">Rodja Hartmann</i>
              </div>

              <h1 className="font-extrabold leading-10 text-3xl font-serif py-5 ">Lorem ipsum dolor sit amet consectetur.</h1>
              <p className="py-8">Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin . Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              </p>
              <div className="flex flex-wrap">
                <img src="\Image\pic22.jpeg" alt="" className="h-35 w-1/3 py-2 px-4 sm:px-2" />
                <img src="\Image\pic23.jpeg" alt="" className="h-35 w-1/3 py-2 px-4 sm:px-2" />
                <img src="\Image\pic24.jpeg" alt="" className="h-35 w-1/3 py-2 px-4 sm:px-2" />
              </div>
              <p className="py-8">Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin . Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.</p>
            </div>

            <h1 className="font-extrabold leading-10 text-3xl font-serif">LEAVE A COMMENT</h1>
            <p className="py-12 leading-10 text-1xl text-font-mono">Your email address will not be published. Required fields are marked *</p>
            <input type="text" placeholder="Write Your Comment" className="bg-gray-200 mb-2 me-3" />
            <input type="text" placeholder="Enter Your Name" className="bg-gray-200 mb-2 me-3" />
            <input type="text" placeholder="Enter Your E-mail" className="bg-gray-200 mb-2" />
            <div className="py-3">Save my name, email, and website in this browser for the next time I comment.</div>
            <button className="font-bold readmore bg-gray-600 text-white px-3 py-2 rounded-md">POST COMMENT</button>
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
          <a href="/blogs">
         <div className=' py-4 px-6'>
         <li className='categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">LUXURY(5)</a></li>
         <li className=' categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">FOOD(3)</a></li>
         <li className='categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">SUMMER(2)</a></li>
         <li className='categories py-4 ps-4 my-2 rounded-lg hover:bg-orange-400'><a href="">TRAVEL(6)</a></li>
         <li className='categories py-4 ps-4 my-2 rounded-lg hover:bg-orange-400'><a href="">NEW YEAR(4)</a></li>
         </div>
         </a>
         </ul>
         <div className='font-extrabold leading-10 text-2xl font-serif underline m-5'>LETTER</div>
         <input type="email" placeholder='Enter your email here' name='user_email' required className=' py-2 m-3' /> 
         <button type='submit' className=' py-2 m-3 border-2 bg-orange-400'>SUBSCRIBE</button>
         <div className='font-extrabold leading-10 text-2xl font-serif underline m-5'>NEVER MISS NEWS</div>
         <div class="flex flex-wrap justify-center m-2">
         <a href="" class="icons text-2xl  md:p-2"><i class="hi bi bi-facebook pe-8"></i></a>
         <a href="" class="icons text-2xl  md:p-2"><i class="hiiii bi bi-instagram pe-8"></i></a>
         <a href="" class="icons text-2xl  md:p-2"><i class="hiiiii bi bi-twitter pe-8"></i></a>
         <a href="" class="icons text-2xl  md:p-2"><i class="hiii bi bi-pinterest pe-8"></i></a>
         </div>
         </div>
         </div>
         </div>
         


      
    </>
  );
}

export default BlogDetail;