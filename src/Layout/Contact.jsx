import React from 'react'
import Header from './Header'
import './Blogs.css'

const Contact = () => {
  return (
    <>
   <div >
   <div className='w-5/6 mx-auto pb-14'>
    
    <div className='bg-orange-600 rounded-lg my-20 py-20 '>
        <div className='flex flex-wrap'>
            <div className=' w-full md:w-1/3 px-8 py-2 '>
                <div className='bg-white h-full rounded-lg py-4 px-2'>

                    <div className='flex px-8'>
                    <i class=" add bi bi-geo-alt text-2xl px-8 py-2 text-white "></i>
                  <h1 className='text-lg font-bold text-center'> Address</h1>
                  
                  </div>

                  <p className='text-center'>27 Rodn St, Brklyn, East Houston </p>
                  <p className='text-center '>Street New York City</p>
                    
                  </div>                   
            </div>


            <div className='w-full md:w-1/3  px-8 py-2'>
                <div className='bg-white h-full rounded-lg py-4 px-2' >

                    <div className='flex px-8'>
                <i class=" add bi bi-person-lines-fill text-2xl px-8 py-2 text-white"></i>
                  <h1 className='text-lg font-bold text-center '> Contact</h1>
                  </div>

                  <p className='text-center'>Mobile: 123456789 </p>
                  <p className='text-center'>Hotline: 123456789</p>
                    
                  </div>
                    
                    
            </div>

            <div className='w-full md:w-1/3  px-8 py-2'>
                <div className='bg-white h-full rounded-lg py-4 px-2'>


                    <div className='flex px-8'>
                <i class="add bi bi-clock text-2xl px-8 py-2 text-white"></i>
                  <h1 className='text-lg font-bold text-center '> Office Hour</h1>

                  </div>
                  <p className='text-center'>Monday - Friday: 8:30 - 20:00</p>
                  <p className='text-center'>Saturday & Sunday: 9:30 - 21:30</p>
                    
                  </div>
                    
                    
            </div>




        </div>


       
    </div>



    <div className='bg-gray-200  h-full w-full'>
        <div className='text-orange-600 text-xl text-center py-12'>Contact Us</div>
        <div className='text-4xl text-center font-black '>GET IN TOUCH</div>
       <p className='text-center text-slate-500 py-2'> Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget<br/>consectetur sed, convgallis at tellus. Vestibulum ac diam sit.</p>

        <div className='m-3 flex py-3'>
            <input type="text" placeholder='Enter Your First Name' className='w-1/2 bg-white me-3 py-3 px-5' />
            {/* <input type="text" placeholder='Enter Your First Name' className="w-96 h-12 border border-gray-300 rounded-md px-4"/> */}
            <input type="text" placeholder='Enter Your Last Name' className='w-1/2 bg-white px-5' />

        

        </div>
       

        <div className='m-3 flex py-3'>
        <input type="email" placeholder='Your Email'  className='w-1/2 bg-white py-3 me-3 px-5' />
        <input type="number" placeholder='Phone Number' className='w-1/2 bg-white px-5 ' />
        </div>

        <div className='m-3 py-3'>
        <input type="text" placeholder='Write Your Comment' className=' bg-white  h-32 w-full px-5'/>
        </div>

        {/* <button className='btn '>SEND MESSAGE</button> */}
        <button className='block mx-auto  bg-orange-600 border-1 text-white font-bold  '>SEND MESSAGE</button>
        </div>
        </div>
        </div>






    </>
  )
}

export default Contact