import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
      <div className='px-16 pt-16 -my-20 relative'>
     <div className="Ready flex border-2 border-solid border-bg-slate-600 ps-8 pt-16 " style={{backgroundColor:"wheat"}}>
      <div>
        <h1 className='text-2xl font-bold pb-3'>Ready to get Started? </h1>
        <p className='text-xl pb-9' > It only takes a few minutes to register you FREE AKA Travel account.</p>
        <button className='font-bold border-2 border-solid px-2 py-2 bg-slate-200 hover:bg-fuchsia-200'>OPEN AN ACCOUNT</button>
        </div>
        <div className='ps-80 ' >
        <img src="/Image/clip-removebg-preview.png" alt="" className='w-2/4' />
        </div>
     </div>
     </div>

     {/* Aka trvael */}
     <div className="foot flex pt-24 text-white  pb-16 ps-4 " style={{backgroundColor:"black"}}>
      <div className="div w-1/4  ">
        <img src="/Image/logo2.png" alt="" className='w-1/2' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos praesentium nihil hic perferendis dolor aperiam!</p>
        <div className='flex space-x-3 pt-3 text-xl'>
        <h1 ><i className="fa-brands fa-facebook rounded-full px-2 py-2 border-2 border-solid hover:bg-slate-300  text-white"></i></h1>
        <h1><i className="fa-brands fa-twitter  rounded-full px-2 py-2 border-2 border-solid hover:bg-slate-300  text-white"></i></h1>
        <h1><i class="fa-brands fa-instagram  rounded-full px-2 py-2 border-2 border-solid hover:bg-slate-300  text-white"></i></h1>
        <h1 ><i class="fa-brands fa-linkedin  rounded-full px-2 py-2 border-2 border-solid hover:bg-slate-300  text-white"></i></h1>
        </div>
      </div>
      <div className='pt-24 w-1/4 ps-24 list-none'>
        <h1 className='font-bold text-3xl pb-5 '>Useful Links</h1>
        <li className='pb-2 text-xl'><a href="">Home</a></li>
        <li  className='pb-2 text-xl'><a href="">Popular</a></li>
        <li  className='pb-2 text-xl'><a href="">Pages</a></li>
        <li  className='pb-2 text-xl'><a href="">Gallery</a></li>
        <li  className='pb-2 text-xl'><a href="">About</a></li>
        <li  className='pb-2 text-xl'><a href="">Blogs</a></li>
        <li  className='pb-2 text-xl'><a href="">Contact</a></li>
      </div>
      <div className='flex flex-col w-1/4 pt-24 ml-6'>
        <h1 className='text-3xl font-bold pb-12 '>Our Instagram </h1>
        <div className="flex flex-wrap w-full ">
        <img src="/Image/pic6.webp" alt="" className='w-1/3 p-2 h-28' />
        <img src="/Image/pic4.jpeg" alt="" className='w-1/3 p-2 h-28'/>
        <img src="/Image/pic5.jpeg" alt="" className='w-1/3 p-2 h-28' />
        <img src="/Image/pic1.jpeg" alt="" className='w-1/3 p-2 h-28'/>
        <img src="/Image/pic10.jpeg" alt="" className='w-1/3 p-2 h-28'/>
        <img src="/Image/pic9.webp" alt="" className='w-1/3 p-2 h-28'/>

        </div>
      </div>
      <div className='flex-col w-1/4 pt-24 ps-14'>
        <h1 className='text-3xl font-bold pb-5'>Subscribe</h1>
        <p className='pb-4'>Subscribe Our NewsLetter For Getting For Quick Updates</p>
       
        <form action="#" method='post'>
        <input type="email" name="email" id="email" placeholder="Enter your email address"className='border-2 px-4 py-2 rounded-md' required/>
           

        </form>
       <div className='pt-3 pe-3'>
        <button className='px-4 py-2 text-xl border-2 border-solid border-red-200 hover:bg-slate-400 rounded-md '>Subscribe</button>
      </div>
      </div>
     </div>
     <div className="div1 border-t-2 border-b-gray-300 " style={{backgroundColor:"black"}}>
      <div className="text-white px-3 py-3 text-center font-bold">
        <h1 >Copyright @ 2024 AKA <span className=''>Travels.</span> All Rights Reserved By <span>Teams</span> </h1>
      </div>
     </div>
      
    </footer>
    </>
  )
}

export default Footer