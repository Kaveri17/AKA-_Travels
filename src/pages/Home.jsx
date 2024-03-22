import React from 'react'
// import Navbar from '../components/Navbar'

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
            <div className="para rounded-lg ps-7 bg-slate-300 border-solid border-2 border-slate-900 -me-11 z-10 w-50 py-11 ">
              <h1 className='text-xl'> <i class="fa-solid fa-calendar-days"></i> 12. December 2023</h1>
              <h1 className='font-bold text-2xl '>Cambodia In August: Island Hopping And Weather Tips</h1>
              <p className='pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam obcaecati rerum sint velit incidunt error laboriosam.</p>
              <div>
                <button className='mt-6  border-solid border-2 border-red-500 rounded-md py-3 px-3 text-xl hover:bg-slate-500'> Read More </button>
              </div>
            </div>   
            
            <div >
              <img src="https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/7-2-705x540.jpg" alt="" className='w-50' />
            </div>
          </div>
        </div>

        {/* Awesome tour */}

        <div className="aewsome">
          <div className="div1">
            <div className="para">
              <h6>Awesome Tours</h6>
              <h1>Best Holiday Package</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem quibusdam illo, minus aperiam ipsam</p>

            </div>
            <div>
              <img src="Image/1.jpg" alt="" />
              <h1>Fantastic Maldives Tour Package</h1>
            </div>
            <div>
              <div className="div1">
              <h><i class="fa-solid fa-location-dot"></i>Everest,India,Maldives, Srilanka</h>
              </div>
              <div className="div2">
              <h1><i class="fa-regular fa-clock"></i>7 Days - 5 Nights</h1>
              </div>

            </div>

           <div>
            <div className="discountprice">
              10% off
            </div>
            <div className="price">
              $900
            </div>
            <div>
              <strike>$1000</strike>
            </div>
            </div>
            <button>View Details</button>
            </div>

            




            
          
          </div>

        

    </>
    

  )
}

export default Home