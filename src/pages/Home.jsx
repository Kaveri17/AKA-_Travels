import React from 'react'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <>
 
        <div className="home  w-full h-screen pt-32 ps-32" style={{backgroundImage: "url('https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/banner-bg-1.png')"}} >
    <h1 className='text-3xl font-bold ml-21 '>Travelling and Exploring the World And  
        <br />
        Find The Beauty
        </h1> 
        <p className='mt-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed quasi dolorum perspiciatis <br /> ratione totam ipsam incidunt explicabo earum aspernatur dolorem, sunt animi ullam. Odit?</p>
        <button className='mt-6 border-solid border-2 border-red-500 rounded-md h-12 w-40 text-xl hover:bg-slate-500 '>APPOINTMENT</button>
        
        
        <form>
            <div class="sm:col-span-3 ">
             <label for="Destination" class="block text-sm font-medium text-grey-900 mt-10">Destination</label>  
            <div class="md-2 ">
                <select id="Destination" name='Destination' autoComplete='destination-name'clas='block w-full rounded-md border-solid border-2 text-grey-900 shadow-sm'>
                    Destination
<option >Bhutan</option>
<option >pokhara</option>
<option >Switzweland</option>
<option>Unites state</option>
                </select> 
</div>
            </div>

  
        </form>
       
        </div>

        <div className="div mt-5" >
          <div className="div1 text-center">
            <h5>Travel Essentials Tips</h5>
            <h2 className='text-4xl font-bold'>Awesome Tips That Makes <br className='item-center' /> Your Travel Beautiful</h2>
          </div>
          <div className='flex items-center justify-between '>
          <div className="img1 h-45 w-full pt-8" >
            <img src="https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/6-2-705x540.jpg" alt=""  className='pl-6 '/>
          </div>

          <div className="div3 -ms-96 bg-slate-300 border-solid border-2 border-black pt-16 pb-16 ps-6 rounded-lg">
          <h1 className='font-bold text-xl'> <i class="fa-solid fa-calendar-days"></i>12.December 2023</h1>
            <h1 className='font-bold text-2xl '> 10 Sun Hats For Beach Days, Long Hikes, And </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque eaque quam! Lorem ipsum dolor sit amet consectetur.</p>
        <div>
            <button className='mt-6  border-solid border-2 border-red-500 rounded-md py-3 px-3 text-xl hover:bg-slate-500'>Read More</button>
          </div>
          </div>
         
        </div>
        </div>


        {/*Adventure  */}
        <div className="Adventure ">
          <div className="div1 flex items-center justify-between pt-9 ps-6">
            <div className="para rounded-lg ps-7 bg-slate-300 border-solid border-2 border-slate-900 w-2/4 py-11 -me-32 z-20 ">
              <h1 className='text-xl '> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
              <h1 className='font-bold text-2xl '>Cambodia In August: Island Hopping And Weather Tips</h1>
              <p className='pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam obcaecati rerum sint velit incidunt error laboriosam.</p>
              <div>
                <button className='mt-6  border-solid border-2 border-red-500 rounded-md py-3 px-3 text-xl hover:bg-slate-500'> Read More </button>
              </div>
            </div>   
            
            <div className='w-2/4'>
              <img src="https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/7-2-705x540.jpg" alt=""/>
            </div>
          </div>
        </div>

        {/* Awesome tour */}

        <div className="aewsome " style={{backgroundColor:"#f9f9f9"}}>
          
          
            <div className="para text-center pt-7">
              <h6 className='text-xl'>Awesome Tours</h6>
              <h1 className='text-4xl pt-2 font-bold'>Best Holiday Package</h1>
              <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem quibusdam illo, minus aperiam ipsam</p>

            </div>
            <div className='flex item-center justify-between w-full '>
             <div className='py-5 ps-6 flex item-center justify-between w-1/3'>
            <div className='border-2 border-solid border-red-500 py-4 px-2 ps-3'>
            <div>
              <img src="Image/1.jpg" alt="" />
              <h1 className='text-xl font-bold px-5 py-2'>Fantastic Maldives Tour Package</h1>
            </div>
            <div className="flex col-span-4"> 
          
      
            <div className='ps-6 '>
              <div className="div1 ">
              <h><i class="fa-solid fa-location-dot text-xl"></i>  Everest,India,Maldives, Srilanka</h>
              </div>
              <div className="div2 pt-2 ">
              <h1><i class="fa-regular fa-clock text-xl"></i> 7 Days - 5 Nights</h1>
              </div>

            </div>

           <div className='ps-9'>  
            <div className="discountprice">
              <button className='border-2 border-solid border-red-500 rounded-full hover:bg-slate-500 px-2'>10% off</button>
            </div>
            <div className="price font-bold text-3xl">
              $900
            </div>
            <div className='text-xl'>
              <strike>$1000</strike>
            </div>
            </div>
            </div>
            <div className='text-center '>
            <button className='border-2 border-solid border-red-500 rounded-full hover:bg-slate-500  item-center px-14 py-2 '>View Details</button>
       </div>
            </div>
            </div> 


            <div className='py-5 ps-6 flex item-center justify-between w-1/3'>
            <div className='border-2 border-solid border-red-500 py-4 px-2 ps-3'>
            <div className=''>
              <img src="Image/1.jpg" alt="" />
              <h1 className='text-xl font-bold px-5 py-2'>Fantastic Maldives Tour Package</h1>
            </div>
            <div className="flex col-span-4"> 
          
      
            <div className='ps-6 '>
              <div className="div1 ">
              <h><i class="fa-solid fa-location-dot text-xl"></i>  Everest,India,Maldives, Srilanka</h>
              </div>
              <div className="div2 pt-2 ">
              <h1><i class="fa-regular fa-clock text-xl"></i> 7 Days - 5 Nights</h1>
              </div>

            </div>

           <div className='ps-9'>  
            <div className="discountprice">
              <button className='border-2 border-solid border-red-500 rounded-full hover:bg-slate-500 px-2'>10% off</button>
            </div>
            <div className="price font-bold text-3xl">
              $900
            </div>
            <div className='text-xl'>
              <strike>$1000</strike>
            </div>
            </div>
            </div>
            <div className='text-center '>
            <button className='border-2 border-solid border-red-500 rounded-full hover:bg-slate-500  item-center px-14 py-2 '>View Details</button>
       </div>
            </div>
            </div>
            
            <div className='py-5 ps-6 flex item-center justify-between w-1/3'>
            <div className='border-2 border-solid border-red-500 py-4 px-2 ps-3'>
            <div className=''>
              <img src="Image/1.jpg" alt="" />
              <h1 className='text-xl font-bold px-5 py-2'>Fantastic Maldives Tour Package</h1>
            </div>
            <div className="flex col-span-4"> 
          
      
            <div className='ps-6 '>
              <div className="div1 ">
              <h><i class="fa-solid fa-location-dot text-xl"></i>  Everest,India,Maldives, Srilanka</h>
              </div>
              <div className="div2 pt-2 ">
              <h1><i class="fa-regular fa-clock text-xl"></i> 7 Days - 5 Nights</h1>
              </div>

            </div>

           <div className='ps-9'>  
            <div className="discountprice">
              <button className='border-2 border-solid border-red-500 rounded-full hover:bg-slate-500 px-2'>10% off</button>
            </div>
            <div className="price font-bold text-3xl">
              $900
            </div>
            <div className='text-xl'>
              <strike>$1000</strike>
            </div>
            </div>
            </div>
            <div className='text-center '>
            <button className='border-2 border-solid border-red-500 rounded-full hover:bg-slate-500  item-center px-14 py-2 '>View Details</button>
       </div>
            </div>
            </div> 
          </div>
       <div className='text-center'>
      <button className='mt-3 border-solid border-2 border-red-500 rounded-md py-2 px-9 hover:bg-slate-500'>View Details</button>
        </div>
        </div>

        {/*  Breathtaking cities*/}
        
        <div className='flex pt-6'>
        <div className="cities flex  flex-col px-4 ">
          <div className="para">
            <h6 className='text-xl'>Go & Discover</h6>
            <h1 className='pt-2 font-bold text-6xl  '>Breathtaking Cities</h1>
            <p className='pt-3  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, vero. Similique minus odit corrupti perspiciatis ab accusantium iste.</p>
          </div>
          
          <div className='flex flex-row h-80 space-x-2 pt-4 ' >
            <img src="/Image/2.jpg" alt="" className='w-2/4 ' />
            <img src="/Image/2.jpg" alt="" className='w-2/4' />
          </div>
          
          
            </div>       
          
        <div className=' '>
          <img src="/Image/2.jpg" alt="" className='w-full h-full px-2' />
          </div>

          </div>

          {/* special activities */}
          
          <div className='pt-5  ps-3 flex justify-betwern items-center space-x-1 pe-3' >

            <div className="special border-2 border-solid border-slate-500 w-1/4 text-center py-6 h-64" >
              <h1 className='text-4xl  '><i class="fa-solid fa-star"></i></h1>
              <h1 className='pt-3 font-bold text-xl '>Special Activities</h1>
              <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni reiciendis vero omnis</p>
            </div>
       

            <div className="special border-2 border-solid border-slate-500 w-1/4 text-center py-6 h-64 " >
              <h1 className='text-4xl '><i class="fa-solid fa-person"></i>
              </h1>
              <h1 className='pt-3 font-bold text-xl '>Proper Guide</h1>
              <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni reiciendis vero omnis .</p>
            </div>
            <div className="special border-2 border-solid border-slate-500 w-1/4 text-center py-6 h-64 " >
              <h1 className='text-4xl '><i class="fa-solid fa-plane"></i></h1>
              <h1 className='pt-3 font-bold text-xl '>Travel Arrangement</h1>
              <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni </p>
            </div>
            <div className="special border-2 border-solid border-slate-500 w-1/4 text-center py-6 h-64" >
              <h1 className='text-4xl '><i class="fa-solid fa-location-dot"></i></h1>
              <h1 className='pt-3 font-bold text-xl '>Location Manager </h1>
              <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni </p>
            </div>
            </div>

            {/* Get Special Offer */}

         <div className='ram flex justify-between items-center px-6 py-6 mt-9 bg-slate-500 ' >
          <div className="offer">
            <h6 className='text-xl'>Go & Discover</h6>
            <h1 className='text-2xl font-bold pt-2'>Get Special Offer</h1>
            <p className='pt-2 pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dicta hic tenetur aut excepturi velit.</p>
            <button className='border-2 border-solid border-slate-600 rounded-full py-2 hover:bg-slate-600'>OPEN AN ACCOUNT</button>
          </div>
          <h1 className='text-8xl mr-4'>35% off</h1>
         </div>
         


    </>
    

  )
}

export default Home