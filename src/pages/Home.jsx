import React from 'react'
import Slider from 'react-slick';
// import Navbar from '../components/Navbar'
import './Home.css'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };
  return (
    <>

        <div className="home  w-full h-screen pt-28 " style={{backgroundImage: "url('https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/banner-bg-1.png')"}} >
          <div className='w-5/6 mx-auto flex flex-wrap'>
          <div className=' w-full lg:w-1/2 '>
            <h1 className='text-5xl font-bold leading-normal  '>Travelling and Exploring the  World And  
              
                Find The Beauty
                </h1> 
                <p className='mt-8 text-xl pb-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Assumenda sed quasi dolorum perspiciatis ratione totam ipsam  <br /> earum aspernatur dolorem, sunt animi ullam. Odit?</p>
                <button className='mt-6 border-solid border-2 border-red-500 rounded-md h-12 w-40 text-xl hover:bg-slate-500  '>APPOINTMENT</button>
        
        </div>
        
            <div className="home-img w-1/3 flex  items-center lg:w-1/3 ">
              <img src="/Image/tri.jpg" alt="" className='w-full rounded-full px-2 py-2 bg-white border-2 border-solid border-red-200 '/>
             
              <img src="/Image/trekking2.jpg" alt="" className='w-2/3 h-2/3 px-2 py-2 bg-white border-2 border-solid border-red-200 rounded-full -ml-11' />
            </div>
          
            </div>
    
        
        </div>
       
       
       
       
        <form>
          <div className='pt-4'>
         
          <div className='mx-auto w-5/6 border-2 border-solid border-red-200 px-3 py-12 md:-mt-24 flex flex-wrap space-x-2  bg-white '>
          
            <label htmlFor="destination" ></label>
            <select id="destination" className='md:px-4 py-2 px-14 w-full md:w-1/2  lg:w-1/6 border-2 border-solid border-red-200' >
            
              <option value="" className='w-full ' disabled selected hidden>
                Destination  
              </option>
              <option value="everest">Everest</option>
              <option value="pokhara">Pokhara</option>
              <option value="usa">USA</option>
              <option value="maldives">Maldives</option>
              <option value="bhutan">Bhutan</option>
              <option value="gorkha">Gorkha</option>


            </select>

            <label htmlFor="Activity" ></label>
            <select id="activity" className='md:px-8 px-14   w-full md:w-1/2 lg:w-1/6  py-2 border-2 border-solid border-red-200' >
              <option value="" className='w-full ' disabled selected hidden>
           Activity 
              </option>
              <option value="boating">Boating</option>
              <option value="cycling">Cycling</option>
              <option value="jungle safari">Jungle Sufari</option>
              <option value="trekking">Trekking</option>
              <option value="hiking">Hiking</option>

            </select>
            <label htmlFor="days" ></label>
            <select id="days" className='md:px-8 px-14 w-full md:w-1/2  lg:w-1/6 py-2 border-2 border-solid border-red-200 ' >
              <option value="" className='w-full ' disabled selected hidden>
            Days 
              </option>
              <option value="1-2 Days">1-2 days</option>
              <option value="2-3 Days">2-3 days</option>
              <option value="1-3 Days">1-3 days</option>
              <option value="4-3 Days">4-3 days</option>
              <option value="1-6 Days">1-6 days</option>
            </select>
            <label htmlFor="prices" ></label>
            <select id="prices" className='px-14 py-2 w-full md:w-1/2  lg:w-1/6 md:px-8 border-2 border-solid border-red-200' >
              <option value=""  className='w-full 'disabled selected hidden>
            Prices  
              </option>
              <option value="everest">$300-$400</option>
              <option value="pokhara">$400-$450</option>
              <option value="usa">$900-$1000</option>
              <option value="maldives">$500-$550</option>
              <option value="bhutan">$700-$750</option>

            </select>
       <button className='border-2 border-solid border-red-200 hover:bg-slate-400 md:px-3 py-1 w-full md:w-1/2  lg:w-1/6 '>Find Now </button> 
            
            </div>
        
            </div>
          

        </form>

{/* Tips awesome */}
<div className='px-8 pt-16 mx-auto w-5/6'>
  <div className="Tips text-center">
    <h6 className='text-xl pb-2'> Travel Essential Tips</h6>
    <h1 className='text-4xl font-bold pb-6'>Awesome Tips That Makes Your Travel Beautiful</h1>
  </div>
  <div className='flex flex-wrap'>
  
    <div className='w-full lg:w-1/2  '>
  <img src="/Image/pic4.jpeg" alt="" className=' w-full' />
  </div>
  <div className='w-full  lg:w-1/2  '>
    <div className='border-2 border-solid border-b-gray-400 mt-14 p-8 lg:-ms-16 ' style={{backgroundColor:"wheat"}}>
  <h1 className='text-xl pb-2'> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
  <h1 className='text-2xl font-bold pb-3' >10 Sun Hats For Beach Days, Long Hikes, And </h1>
  <p className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum corrupti officia quisquam ipsam, tempore deleniti?</p>
  <button className='border-2 border-solid border-red-300  hover:bg-slate-500 px-2 py-2 '>Read More</button>
</div>
  </div>
  </div>
  </div>


        {/*Adventure  */}
        <div className="adventure px-8 w-5/6 mx-auto ">
          <div className='flex flex-wrap py-5'>
            <div className='w-full lg:w-1/2  z-10 py-16'>
            <div className="para border-2 border-solid border-b-gray-600 p-8 py-4  lg:-me-16 " style={{backgroundColor:"wheat"}}>
          <h1 className='text-xl pb-2'> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
          <h1 className='text-2xl font-bold pb-3'>Pokhara In August:Waiting for vistors</h1>
          <p className='pb-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum corrupti officia quisquam ipsam, tempore deleniti?</p>
          <button className=' border-2 border-solid border-red-300 hover:bg-slate-400 px-3 py-2 '>Read More</button>
          </div>
          </div>
          <div className='  w-full lg:w-1/2 '>
            <img src="/Image/pic10.jpeg" alt="" className='w-full h-96' />
          </div>
          </div>
        </div>

        {/* Awesome tour */}
      
        <div className="blog text-center py-5  ">
          <div className='w-4/5 mx-auto'>
          <h4 >Awesome Tours</h4>
          <h1 className='pt-2 text-4xl font-bold'>Best Holiday Package</h1>
          <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam modi sequi! Laudantium, quia illum.</p>
          
          <div className="slider-container">
      <Slider {...settings}>
        <div className='pe-2'>
        <div className="div border-2 border-solid ">
              <div className='px-3 py-3 w-full'>
                <img src="/Image/pic7.jpeg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible England With AkA Travels</h1>
                </div>
                <div className="div flex ">
                  <div className='ps-2'>
                  <h1 className='mr-14 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i> High Tower,England</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
        <div className='pe-2'> 
        <div className="div border-2 border-solid">
              <div className='px-3 py-3 w-full '>
                <img src="/Image/pic8.jpeg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible USA With AKA Travels</h1>
                </div>
                <div className="div flex   ">
                  <div className='ps-2'>
                  <h1 className='mr-7 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i>  United Sate of America</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
        <div className='pe-2'>
        <div className="flex space-x-3">
            <div className="div border-2 border-solid ">
              <div className='px-3 py-3 w-full'>
                <img src="/Image/manakamana.jpg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible Nepal With AkA Travels</h1>
                </div>
                <div className="div flex   ">
                  <div className='ps-2'>
                  <h1 className='mr-3 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i>  Manakama kurintar, Nepal</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
            </div>
        </div>
        <div className='pe-2'>
        <div className="flex space-x-3">
            <div className="div border-2 border-solid ">
              <div className='px-3 py-3 w-full'>
                <img src="/Image/manakamana.jpg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible Nepal With AkA Travels</h1>
                </div>
                <div className="div flex   ">
                  <div className='ps-2'>
                  <h1 className='mr-3 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i>  Manakama kurintar, Nepal</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
            </div>
        </div>
        <div className='pe-2'>
        <div className="div border-2 border-solid ">
              <div className='px-3 py-3 w-full '>
                <img src="/Image/pic8.jpeg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible USA With AKA Travels</h1>
                </div>
                <div className="div flex   ">
                  <div className='ps-2'>
                  <h1 className='mr-7 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i>  United Sate of America</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
        <div className='pe-2'>
        <div className="div border-2 border-solid ">
              <div className='px-3 py-3 w-full'>
                <img src="/Image/pic7.jpeg" alt="" className=' h-80 w-full' />
                <h1 className='pt-4 font-bold text-xl '>Experience the Incredible England With AkA Travels</h1>
                </div>
                <div className="div flex   ">
                  <div className='ps-2'>
                  <h1 className='mr-14 pb-2'> <i class="fa-solid fa-location-dot text-xl"></i> High Tower,England</h1>
                  <h1 className='mr-20'> <i className="fa-regular fa-clock text-xl"></i>  6 Days-2 Nights</h1>
                  </div>
                  <div className="discount border-l-2 ps-2">
                    
                  <button className='border-2 border-solid border-red-300 rounded-full px-2 hover:bg-slate-400'>83% off</button> 
                    <div className="flex">

                      <div className="price text-2xl font-bold pb-7">
                        $ 250
                      </div>
                      <div className="div ps-2">
                        <strike className='text-xl '>$1500</strike>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
      </Slider>
    </div>
          </div>
        </div>
        <div className="div text-center">
          <button className='border-2 border-solif border-red-300 hover:bg-slate-300  px-8 py-2 text-xl'>View More</button>
        </div>
        
        {/*  Breathtaking cities*/}
        
        
        <div className='flex flex-col lg:flex-row pt-9 w-5/6 mx-auto'>
          {/* <div className="wrapper w-4/5 mx-auto"> */}
            <div className="cities flex flex-col px-4 ">
              <div className="para">
                <h6 className='text-xl'>Go & Discover</h6>
                <h1 className='pt-2 font-bold text-5xl  '>Breathtaking Cities</h1>
                <p className='pt-3  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, vero. Similique minus odit corrupti perspiciatis ab accusantium iste.</p>
              </div>
              
              <div className='flex flex-row h-80 space-x-2 pt-4 ' >
                <img src="/Image/2.jpg" alt="" className='w-2/4 ' />
                <img src="/Image/pic2.webp" alt="" className='w-2/4' />
                </div>
                </div>  
                
              
              
            <div className='pe-3 px-4 pt-3 lg:px-0 lg:pt-0'>
              
              <img src="/Image/pic14.jpeg" alt="" className='w-full h-full lg:px-2' />
              </div>
          {/* </div> */}
          </div>

          {/* special activities */}
          
          <div className='pt-5  ' >
            <div className=' w-5/6  flex  flex-wrap mx-auto   '>
<div className="ramp w-full md:w-1/2 lg:w-1/4 pe-2  ">
            <div className="special border-2 border-solid border-slate-500  text-center  h-64    " >
              <h1 className='text-4xl  '><i class="fa-solid fa-star"></i></h1>
              <h1 className='pt-3 font-bold text-xl '>Special Activities</h1>
              <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni reiciendis vero omnis</p>
            </div>
            </div>
        
            <div className="ramp w-full md:w-1/2 lg:w-1/4 pe-2   ">
            <div className="special border-2 border-solid border-slate-500  text-center py-6 h-64  " >
              <h1 className='text-4xl '><i class="fa-solid fa-person"></i>
              </h1>
              <h1 className='pt-3 font-bold text-xl '>Proper Guide</h1>
              <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni reiciendis vero omnis .</p>
              </div>
            </div>
            <div className="ramp w-full md:w-1/2 lg:w-1/4 pe-2 ">
            <div className="special border-2 border-solid border-slate-500 text-center py-6 h-64  " >
              <h1 className='text-4xl '><i class="fa-solid fa-plane"></i></h1>
              <h1 className='pt-3 font-bold text-xl '>Travel Arrangement</h1>
              <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni </p>
            </div>
            </div>
            <div className="ramp w-full md:w-1/2 lg:w-1/4 pe-2 ">
            <div className="special border-2 border-solid border-slate-500  text-center py-6 h-64 " >
              <h1 className='text-4xl '><i class="fa-solid fa-location-dot"></i></h1>
              <h1 className='pt-3 font-bold text-xl '>Location Manager </h1>
              <p className='pt-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, magni </p>
              </div>
            </div>
            </div>
            </div>
            

            {/* Get Special Offer */}

         <div className='ram flex justify-between items-center   mt-9 bg-slate-50 ' >
         
          <div className="sita w-full ">

            <div className="wrapper w-5/6 mx-auto flex flex-wrap px-6 py-28 ">
            
                <div className='w-full lg:w-1/2'>
                <h6 className='text-xl'>Go & Discover</h6>
                <h1 className='text-6xl font-bold pt-2'>Get Special Offer</h1>
                <p className='pt-8 pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dicta hic tenetur aut excepturi velit.</p>
                <button className='border-2 border-solid border-slate-600 rounded-full py-2 px-2 hover:bg-slate-600'>OPEN AN ACCOUNT</button>
                </div>
        

              
              <h1 className='text-9xl  font-bold w-full lg:w-1/2'>35% off</h1>
          
             
            </div>
         
              
          </div>

          </div>



       

     

         {/* breathtaking cities */}
         
<div className="breathtaking pt-5 ps-4  text-center mx-auto w-5/6  ">
  <h6 className='text-xl '>Go & Discover</h6>
  <h1 className='text-4xl pt-2 pb-3 font-bold'>Breathtaking Cities</h1>
  <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dict Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dignissimos corporis ullam?</p>
 
</div>
<div className="  ps-4 pe-4 pb-16  mx-auto w-5/6">
<div className="slider-container w-full">
      <Slider {...settings}>
        
        <div className=''>
          
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
<div>


</div>

{/* Clients words */}
<div style={{backgroundColor:"wheat"}}>
 <div className='w-5/6 mx-auto flex p-5'>
  <div className='flex flex-wrap'>

 <div className="discover  md:w-full lg:w-1/2 ">
    <h6 className='text-xl'>Go & Discover</h6>
    <h1 className='text-4xl font-bold py-4'>What's Our Client's Words</h1>
    <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sint aliquid cumque deleniti nostrum iure eum neque optio labore aperiam!</p>
    <button className='px-4 py-2 border-2 border-solid border-red-300'>View More</button>
  </div>
  
  <div className="ceo md:w-full lg:w-1/2 md:ps-28  ">
   
    <img src="/Image/women.jpg" alt="" className=' gita border-2 border-solid p-2  w-10/12 border-b-gray-400' />
    <h1 className='text-center pt-3 text-xl font-bold'>Alax Markun</h1>
        <h4 className='text-center'>CEO, Vecuro</h4>
        

  </div> 
  </div>
</div>
 </div>
  
{/* Our blog */}
      
      <div className="blog text-center pt-24 pb-4 mx-auto w-5/6">
        <h6 className='text-xl pb-3'> Blog & News</h6>
        <h1 className='text-5xl font-bold pb-4'>Our Latest Blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo mollitia tempora reiciendis quisquam id consequuntur. Tempora, fugiat beatae?</p>
       
      </div>
<div className="div1 flex pt-4 px-4 mx-auto w-5/6 ">
  <div className='flex flex-wrap'>
      <div className="hari pe-1 md:w-1/2 lg:w-1/3 ">
        <div className='border-2 border-solid border-b-gray-300 ps-2 pt-2 pe-2 w-full '>
          <img src="/Image/pic4.jpeg" alt="" className='pic4' />
          <h1 className='text-xl font-bold pt-3 pb-2'> 10 Sun Hats For Beach Days, Long</h1>
          <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, autem?</p>
          <div className='flex items-center pb-9'>
          <h1 className='text-xl '> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
          <div className='ps-3 '>
          <button className='text-xl border-2 border-solid  rounded-md bg-slate-400 hover:bg-slate-300  px-3 py-2'><a href="Blogs.html"> Read More</a></button>
          </div>
          </div>
        </div>
      </div>
      <div className="hari pe-1 md:w-1/2 lg:w-1/3">
        <div className='border-2 border-solid border-b-gray-300 ps-2 pt-2 pe-2 w-full'>
          <img src="/Image/pic9.webp" alt="" className='pic4' />
          <h1 className='text-xl font-bold pb-2 pt-3'> USA IN August: Hoping for snow</h1>
          <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, autem?</p>
          <div className='flex items-center pb-9'>
          <h1 className='text-xl '> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
          <div className='text-xl ps-3'>
          <button className='text-xl border-2 border-solid  rounded-md bg-slate-400 hover:bg-slate-300 px-3 py-2 '><a href="Blogs.html"> Read More</a></button>
          </div>
          </div>
        </div>
      </div>
      <div className="hari pe-1 md:w-1/2 lg:w-1/3">
        <div className='border-2 border-solid border-b-gray-300 ps-2 pt-2 pe-2 w-full '>
          <img src="/Image/pic7.jpeg" alt="" className='pic4' />
          <h1 className='text-xl font-bold pt-3 pb-2'> Beauty when sunset</h1>
          <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, autem?</p>
          <div className='flex items-center pb-9'>
          <h1 className='text-xl '> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
          <div className='text-xl ps-3'>
          <button className='text-xl border-2 border-solid  rounded-md bg-slate-400 hover:bg-slate-300 px-3 py-2'><a href="Blogs.html"> Read More</a></button>
          </div>
          </div>
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