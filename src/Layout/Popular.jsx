import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Popular.css'
import Slider from "react-slick";

const Popular = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (

    <>
  
   <div className='w-5/6 mx-auto pb-10'>
   <div className='text-4xl text-center font-black m-14'>INTERNATIONAL PACKAGES</div>

   <div className='flex flex-wrap pe-8 w-full'>

    <div className='w-1/3 relative'>
    <img src="\Image\pic4.jpeg" alt="" className=' pic4 w-full h-full py-4 px-4'/>
    <p className='text-center'>MALDIVES<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
    </div>

    <div className='w-1/3 relative'>
    <img src="\Image\pic5.jpeg" alt="" className='pic5 w-full h-full py-4 px-4 ' />
    <p className='text-center'>COLOMBO<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(4 Trips)</p>
    </div>

    <div className='w-1/3 relative'>
    <img src="\Image\pic6.webp" alt="" className='pic6 w-full h-full  py-4 px-4'/>
    <p className='text-center'>BHUTAN<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(3 Trips)</p>
    </div>

    <div className='w-1/3 relative'>
    <img src="\Image\pic7.jpeg" alt="" className='pic7 w-full h-full  py-4 px-4'/>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
    <p className='text-center'>FRANCE<i class="bi bi-arrow-right"></i></p>
    </div>

    <div className='w-1/3 relative'>
    <img src="\Image\pic8.jpeg" alt=""className='pic8 w-full h-full py-4 px-4' />
    <p className='text-center'>ENGLAND<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(1 Trip)</p>
    </div>

    <div className='w-1/3 relative'>
    <img src="\Image\pic9.webp" alt="" className='pic9 w-full h-full py-4 px-4'/>
    <p className='text-center'>USA<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
    </div>

   </div>

   <div className='text-4xl text-center font-black m-14'>NATIONAL PACKAGES</div>
   <div className='flex flex-wrap pe-8 w-full'>

    <div className='w-1/3 relative'>
    <img src="\Image\pic10.jpeg" alt="" className=' pic10 w-full h-full py-4 px-4'/>
    <p className='text-center'>POKHARA<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(1 Trip)</p>
    </div>

    <div className='w-1/3 relative'>
    <img src="\Image\pic11.jpeg" alt="" className='pic11 w-full h-full py-4 px-4 ' />
    <p className='text-center'>CHITWAN<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
    </div>

    <div className='w-1/3 relative'>
    <img src="\Image\pic12.jpeg" alt="" className='pic12 w-full h-full  py-4 px-4'/>
    <p className='text-center'>LUMBINI<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(4Trips)</p>
    </div>

    <div className='w-1/3 relative'>
    <img src="\Image\pic13.png" alt="" className='pic13 w-full h-full  py-4 px-4'/>
    <p className='text-center'>GORKHA<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
    </div>

    <div className='w-1/3 relative'>
    <img src="\Image\pic14.jpeg" alt=""className='pic4 w-full h-full py-4 px-4' />
    <p className='text-center'>KATHMANDU<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(3 Trips)</p>
    </div>

    <div className='w-1/3 relative'>
    <img src="\Image\pic16.jpeg" alt="" className='pic16 w-full h-full py-4 px-4'/>
    <p className='text-center'>MUSTANG<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(1 Trip)</p>
    </div>

   </div>



   <div className='text-orange-500 m-12 py-10 text-xl font-bold text-center font-serif'>AWESOME TOURS</div>
   
   <div className='text-4xl text-center font-extrabold m-14'>BEST HOLIDAY PACKAGE</div>
   <p className='text-center my-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vitae beatae optio officia,<br/> voluptatem omnis nihil et, in laudantium reprehenderit nostrum molestias quae unde repudiandae. Pariatur facilis cupiditate vero quasi.</p>

   <div className='pe-8  w-full'>


   <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="border-2  w-full overflow-hidden">
      <img src="\Image\pic20.webp" alt="" className=' pic20 h-72'/>

      
      <h1 className='text-center font-3xl font-black'>Everest:EXPLORE ITS BEAUTY</h1>
      {/* <div className=" flex flex-row justify-center my-8 ">
      <div className="leftt">
      <i class="bi bi-geo-alt">Solukhumbu</i>
      <br/>
      <i class="bi bi-clock">4Days-2Nights</i>
      <br/>
      </div>

      
      <div className="righttt">
      <div className="discountprice border-2  border-blue-500 bg-blue-200">
                10% off
              </div>
              <div className="price">
                $900
              </div>
              <div>
                <strike>$1000</strike>
              </div>
              </div>
              </div> */}



<div class="flex flex-col sm:flex-row justify-center my-8">
  <div class="leftt mb-4 sm:mb-0 sm:mr-4">
    <i class="bi bi-geo-alt"></i>
    <span class="ml-1">Solukhumbu</span>
    <br/>
    <i class="bi bi-clock"></i>
    <span class="ml-1">4Days-2Nights</span>
  </div>

  <div class="righttt">
    <div class="discountprice border-2 border-blue-500 bg-blue-200 mb-4 sm:mb-0 sm:mr-4">
      10% off
    </div>
    <div class="price">
      $900
    </div>
    <div>
      <strike>$1000</strike>
    </div>
  </div>
</div>

      <button className='w-1/2 bg-orange-100 border-2 block mx-auto'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 w-full overflow-hidden">
      <img src="Image\pic21.jpeg" alt="" className='pic21 h-72'/>
      <h1 className='text-center font-3xl font-black'>Dubai:EXPLORE ITS BEAUTY</h1>
     
<div class="flex flex-col sm:flex-row justify-center my-8">
  <div class="leftt mb-4 sm:mb-0 sm:mr-4">
    <i class="bi bi-geo-alt"></i>
    <span class="ml-1">Dubai</span>
    <br/>
    <i class="bi bi-clock"></i>
    <span class="ml-1">4Days-2Nights</span>
  </div>

  <div class="righttt">
    <div class="discountprice border-2 border-blue-500 bg-blue-200 mb-4 sm:mb-0 sm:mr-4">
      10% off
    </div>
    <div class="price">
      $900
    </div>
    <div>
      <strike>$1000</strike>
    </div>
  </div>
</div>

      <button className=' w-1/2 bg-orange-100 border-2 block mx-auto'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2  w-full overflow-hidden">
      <img src="Image\pic22.jpeg" alt="" className='pic22 h-72'/>
      <h1 className='text-center font-3xl font-black'>Switzerland:EXPLORE ITS BEAUTY</h1>
     
              <div class="flex flex-col sm:flex-row justify-center my-8">
  <div class="leftt mb-4 sm:mb-0 sm:mr-4">
    <i class="bi bi-geo-alt"></i>
    <span class="ml-1">Switzerland</span>
    <br/>
    <i class="bi bi-clock"></i>
    <span class="ml-1">4Days-2Nights</span>
  </div>

  <div class="righttt">
    <div class="discountprice border-2 border-blue-500 bg-blue-200 mb-4 sm:mb-0 sm:mr-4">
      10% off
    </div>
    <div class="price">
      $900
    </div>
    <div>
      <strike>$1000</strike>
    </div>
  </div>
</div>

      <button className='w-1/2 bg-orange-100 border-2 block mx-auto'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2  w-full overflow-hidden">
      <img src="Image\pic23.jpeg" alt="" className='pic23 h-72'/>
      <h1 className='text-center font-3xl font-black'>FRANCE:EXPLORE ITS BEAUTY</h1>
      
              <div class="flex flex-col sm:flex-row justify-center my-8">
  <div class="leftt mb-4 sm:mb-0 sm:mr-4">
    <i class="bi bi-geo-alt"></i>
    <span class="ml-1">France</span>
    <br/>
    <i class="bi bi-clock"></i>
    <span class="ml-1">4Days-2Nights</span>
  </div>

  <div class="righttt">
    <div class="discountprice border-2 border-blue-500 bg-blue-200 mb-4 sm:mb-0 sm:mr-4">
      10% off
    </div>
    <div class="price">
      $900
    </div>
    <div>
      <strike>$1000</strike>
    </div>
  </div>
</div>

      <button className='w-1/2 bg-orange-100 border-2 block mx-auto'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 w-full overflow-hidden ">
      <img src="Image\pic24.jpeg" alt="" className='pic24 h-72'/>
      <h1 className='text-center font-3xl font-black'>RUSSIA:EXPLORE ITS BEAUTY</h1>
      
              <div class="flex flex-col sm:flex-row justify-center my-8">
  <div class="leftt mb-4 sm:mb-0 sm:mr-4">
    <i class="bi bi-geo-alt"></i>
    <span class="ml-1">Russia</span>
    <br/>
    <i class="bi bi-clock"></i>
    <span class="ml-1">4Days-2Nights</span>
  </div>

  <div class="righttt">
    <div class="discountprice border-2 border-blue-500 bg-blue-200 mb-4 sm:mb-0 sm:mr-4">
      10% off
    </div>
    <div class="price">
      $900
    </div>
    <div>
      <strike>$1000</strike>
    </div>
  </div>
</div>

              
      <button className='w-1/2 bg-orange-100 border-2 block mx-auto'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 w-full overflow-hidden">
      <img src="Image\pic25.webp" alt="" className='pic25 w-full h-72'/>
      <h1 className='text-center font-3xl font-black'>GREECE:EXPLORE ITS BEAUTY</h1>
      
              <div class="flex flex-col sm:flex-row justify-center my-8">
  <div class="leftt mb-4 sm:mb-0 sm:mr-4">
    <i class="bi bi-geo-alt"></i>
    <span class="ml-1">Greece</span>
    <br/>
    <i class="bi bi-clock"></i>
    <span class="ml-1">4Days-2Nights</span>
  </div>

  <div class="righttt">
    <div class="discountprice border-2 border-blue-500 bg-blue-200 mb-4 sm:mb-0 sm:mr-4">
      10% off
    </div>
    <div class="price">
      $900
    </div>
    <div>
      <strike>$1000</strike>
    </div>
  </div>
</div>

     
      <button className='w-1/2 bg-orange-100 border-2 block mx-auto'>VIEW DETAILS</button>
     
      
          </div>
        </div>
      </Slider>
    </div>
    </div>
    
   </div>
   







    </>
  )
}

export default Popular