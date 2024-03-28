import React from 'react'

const BlogDetaill = () => {
  return (
    <>

    <div className='Blogs flex justify-between'>
    <div className='mx-auto flex w-5/6'>
    <div className="blog-left w-4/6 ps-12">
    <div className=' w-full my-11'>
            <img src="\Image\piccc.jpeg" alt="" className='pic3 h-96'/>
        <div className='blogscontainer '>
                <h1 className='font-extrabold leading-10 text-3xl font-serif py-8'>The salty breeze that carries with it the unmistakable scent of the ocean, mingling with the faint whispers of palm trees swaying in the distance.</h1>
                <i className="bi bi-calendar pe-8 py-8">12 December 2023</i>
                <i class="bi bi-person text-lg">Wp-travolo</i>
               <p className='py-12 leading-10 text-1xl text-font-mono'>Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur elit.<br/>Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.<br/>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur elit.</p>
                {/* <p className='py-12 font-bold leading-10 text-1xl text-font-serif'>As the sun dances upon the water's surface, it paints the horizon with hues of orange and pink, a breathtaking display of nature's artistry. Footprints are left behind in the sand, a testament to the countless souls who have found solace and serenity in this seaside sanctuary. Here, time seems to slow, allowing for moments of pure tranquility and connection with the natural world.</p> */}
            </div>


            <div className='bg-gray-200 opacity-75 border-l-4 border-orange-600 py-4'> 
                <h1 className='italic text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor in sit amget, consectetur elit.</h1>
                <i class="bi bi-dash text-4xl text-red-600 py-12">Rodja Hartmann</i>
                </div>


               
                    <h1 className='font-extrabold leading-10 text-3xl font-serif py-5 '>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className='py-8'>Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                 </p>
                 <div className='flex w-full'>
                 <img src="\Image\pic22.jpeg" alt="" className='h-35 w-1/3 py-2 pe-4' />
                 <img src="\Image\pic23.jpeg" alt="" className='h-35 w-1/3 py-2 pe-4' />
                 <img src="\Image\pic24.jpeg" alt="" className='h-35 w-1/3 py-2' />
                 </div>
                 <p className='py-8'>Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.</p>        
                </div>
                <h1 className='font-extrabold leading-10 text-3xl font-serif ' >LEAVE A COMMENT</h1>
                    
                    <p className='py-12 leading-10 text-1xl text-font-mono'>Your email address will not be published. Required fields are marked *</p>
                     
                     <div className='h-92 my-2'> <input type="text" placeholder='Write Your Comment' className='bg-gray-200'/></div>
  
                      <div className='my-2'><input type="text" placeholder='Enter Your Name' className='bg-gray-200' /></div>
                      <input type="text" placeholder='Enter Your E-mail' className='bg-gray-200'/>
  
                     <div className='py-3'> Save my name, email, and website in this browser for the next time I comment.</div>
                     {/* <button className='border border-gray-500 p-1'/>POST COMMENT */}
                     <button className='font-bold readmore bg-gray-600 text-white px-3 py-2 rounded-md'>POST COMMENT</button>
  
  


                
                    


      </div>




                   <div className="blog-right w-2/6 flex flex-col flex-wrap">
        <div className="search">
            <h1 className='font-extrabold leading-10 text-3xl font-serif underline m-5 '>SEARCH</h1>
             <input  type="text"
            className="w-2/5 py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-6 cursor-pointer"
            />SEARCH
        </div>
        
        <div className="blogdown">
        <h1 className='font-extrabold leading-10 text-3xl font-serif underline m-5'>RECENT POSTS</h1>
      </div>
      <div className='m-5 flex flex-col justify-center w-full'>
      <img src="\Image\picc.webp" alt="" className='h-24 w-24 py-2 '/>
      <i class="bi bi-calendar pe-8">12 December 2023</i>
      <h1>The number of tourists visiting the Maldives in 2023 surpassed the government's estimated figure by 78,537. </h1>



      <img src="\Image\piccc.jpeg" alt="" className='h-24 w-24 py-2 '/>
      <i class="bi bi-calendar pe-8">12 December 2023</i>
      <h1>The messages for Greek tourism at ITB Berlin, one of the world's largest travel exhibitions, give high hopes for 2024.</h1>



      <img src="\Image\picccc.jpeg" alt="" className='h-24 w-24 py-2 '/>
      <i class="bi bi-calendar pe-8">12 December 2023</i>
      <h1>Thailand has positioned itself astutely to capture outbound travel demand from China with its bilateral visa waiver. </h1>
      </div>

      <div className='font-extrabold leading-10 text-3xl font-serif underline m-5'>CATEGORIES</div>
      <ul className='list-unstyled'>
       <div className=' py-4 px-6'>
        <li className='categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">ADVENTURE(5)</a></li>
        <li className=' categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">FOOD(3)</a></li>
        <li className='categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">SUMMER(2)</a></li>
        <li className='categories py-4 ps-4 my-2 rounded-lg hover:bg-orange-400'><a href="">TRAVEL(6)</a></li>
        <li className='categories py-4 ps-4 my-2 rounded-lg hover:bg-orange-400'><a href="">NEW YEAR(4)</a></li>

       </div>
      </ul>
      

      <div className='font-extrabold leading-10 text-3xl font-serif underline m-5'>NEWSLETTER</div>
      <input type="email" placeholder='Enter your email here' name='user_email' required className='w-96 py-2 m-4' />
      <button type='submit' className='w-96 py-2 m-3 border-2 bg-orange-400'>SUBSCRIBE</button>



      <div className='font-extrabold leading-10 text-3xl font-serif underline m-5'>NEVER MISS NEWS</div>
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

export default BlogDetaill