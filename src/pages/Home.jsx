import React from 'react'
import Slider from 'react-slick';
// import Navbar from '../components/Navbar'


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
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

{/* Tips awesome */}
<div className='px-8 pt-16'>
  <div className="Tips text-center">
    <h6 className='text-xl pb-2'> Travel Essential Tips</h6>
    <h1 className='text-4xl font-bold pb-6'>Awesome Tips That Makes Your Travel Beautiful</h1>
  </div>
  <div className='flex  '>
  <img src="/Image/pic4.jpeg" alt="" className=' w-2/3' />
  
  <div className="sun ">
    <div className='border-2 border-solid border-b-gray-400 mt-28 px-6 py-6 -ms-16' style={{backgroundColor:"wheat"}}>
  <h1 className='text-xl pb-2'> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
  <h1 className='text-2xl font-bold pb-3' >10 Sun Hats For Beach Days, Long Hikes, And </h1>
  <p className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum corrupti officia quisquam ipsam, tempore deleniti?</p>
  <button className='border-2 border-solid border-red-300  hover:bg-slate-500 px-2 py-2 '>Read More</button>
  </div>
  </div>
  </div>

</div>


        {/*Adventure  */}
        {/* <div className="Adventure ">
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
        </div> */}
        <div className="adventure ps-5 pe-4 ">
          <div className='flex  '>
            <div className="para border-2 border-solid border-b-gray-600 ps-3 py-5  w-2/3 my-28 -me-16 z-10 " style={{backgroundColor:"wheat"}}>
          <h1 className='text-xl pb-2'> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
          <h1 className='text-3xl font-bold pb-3'>Pokhara In August:Waiting for vistors</h1>
          <p className='pb-3'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, laboriosam?</p>
          <button className=' border-2 border-solid border-red-300 hover:bg-slate-400 px-3 py-2 '>Read More</button>
          </div>
          <div className=' pt-5'>
            <img src="/Image/pic10.jpeg" alt="" className='' />
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
            <img src="/Image/pic2.webp" alt="" className='w-2/4' />
          </div>
          
          
            </div>       
          
        <div className=' '>
          <img src="/Image/pic14.jpeg" alt="" className='w-full h-full px-2' />
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
              <p className='pt-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni </p>
            </div>
            </div>

            {/* Get Special Offer */}

         <div className='ram flex justify-between items-center   mt-9 bg-slate-50' >
          <div className="sita w-full px-6 py-28 flex ">
            <div className="offer">
              <h6 className='text-xl'>Go & Discover</h6>
              <h1 className='text-6xl font-bold pt-2'>Get Special Offer</h1>
              <p className='pt-8 pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dicta hic tenetur aut excepturi velit.</p>
              <button className='border-2 border-solid border-slate-600 rounded-full py-2 px-2 hover:bg-slate-600'>OPEN AN ACCOUNT</button>
            </div>
            <h1 className='text-9xl ml-10 font-bold'>35% off</h1>
          </div>

          </div>

         {/* breathtaking cities */}
         
<div className="breathtaking pt-5 ps-4 text-center  ">

  <h6 className='text-xl '>Go & Discover</h6>
  <h1 className='text-4xl pt-2 pb-3 font-bold'>Breathtaking Cities</h1>
  <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dict Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dignissimos corporis ullam?</p>
 
</div>
<div className=" w-full ps-4 pe-4 ">
<div className="slider-container">
      <Slider {...settings}>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic4.jpeg" alt=""className='pic4 h-96 '/>
  <h1 className='text-xl pt-2'>Maldives <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic5.jpeg" alt=""className='pic5 h-96 '/>
  <h1 className='text-xl pt-2'>Colombo <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic6.webp" alt=""className=' pic6 h-96 '/>
  <h1 className='text-xl pt-2'>Bhutan <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic8.jpeg" alt=""className='h-96 pic8 '/>
  <h1 className='text-xl pt-2'>England <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic7.jpeg" alt=""className='pic7 h-96 '/>
  <h1 className='text-xl pt-2'>France <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/4 relative'>
  <img src="/Image/pic9.webp" alt=""className='h-96 pic9 '/>
  <h1 className='text-xl pt-2'>USA <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
      </Slider>
    </div>

</div>
{/* Our blog */}
      
      <div className="blog text-center pt-28 pb-4">
        <h6 className='text-xl pb-3'> Blog & News</h6>
        <h1 className='text-5xl font-bold pb-4'>Our Latest Blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo mollitia tempora reiciendis quisquam id consequuntur. Tempora, fugiat beatae?</p>
      </div>
<div className="div1 flex pt-4 px-4 space-x-2">
<div className='border-2 border-solid border-b-gray-300 ps-2 pt-2 pe-2 w-3/4'>
        <img src="/Image/pic4.jpeg" alt="" className='pic4' />
        <h1 className='text-xl font-bold pt-3 pb-2'> 10 Sun Hats For Beach Days, Long</h1>
        <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, autem?</p>
        <div className='flex items-center pb-9'>
        <h1 className='text-xl '> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
        <div className='text-xl ps-9'>
        <button className='text-xl border-2 border-solid  rounded-md bg-slate-400 hover:bg-slate-300  px-4 py-2'><a href="Blogs.html"> Read More</a></button>
        </div>
        </div>
      </div>
      <div className='border-2 border-solid border-b-gray-300 ps-2 pt-2 pe-2 w-3/4'>
        <img src="/Image/pic9.webp" alt="" className='pic4' />
        <h1 className='text-xl font-bold pt-3 pb-2'> Cambodia In USA: Island Hopping And Weather Tips</h1>
        <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, autem?</p>
        <div className='flex items-center pb-9'>
        <h1 className='text-xl '> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
        <div className='text-xl ps-9'>
        <button className='text-xl border-2 border-solid  rounded-md bg-slate-400 hover:bg-slate-300 px-4 py-2 '><a href="Blogs.html"> Read More</a></button>
        </div>
        </div>
      </div>
      <div className='border-2 border-solid border-b-gray-300 ps-2 pt-2 pe-2 w-3/4'>
        <img src="/Image/pic7.jpeg" alt="" className='pic4' />
        <h1 className='text-xl font-bold pt-3 pb-2'> Beauty when sunset</h1>
        <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, autem?</p>
        <div className='flex items-center pb-9'>
        <h1 className='text-xl '> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
        <div className='text-xl ps-9'>
        <button className='text-xl border-2 border-solid  rounded-md bg-slate-400 hover:bg-slate-300 px-4 py-2'><a href="Blogs.html"> Read More</a></button>
        </div>
        </div>
      </div>
      </div>
      <div className='text-center py-8 '>
        <button className='text-xl border-2 border-solid  rounded-md bg-slate-400 hover:bg-slate-300 px-5 py-3' >View More</button>
      </div>


    </>
    

  )
}

export default Home