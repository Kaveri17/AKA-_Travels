import React from "react";
import Slider from "react-slick";

function AutoPlay() {
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
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <div className="div border-2 border-solid w-2/3">
              <div className='px-3 py-3'>
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
        <div>
        <div className="div border-2 border-solid w-2/3">
              <div className='px-3 py-3 '>
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
        <div>
        <div className="flex space-x-3">
            <div className="div border-2 border-solid w-2/3">
              <div className='px-3 py-3'>
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
        <div>
        <div className="flex space-x-3">
            <div className="div border-2 border-solid w-2/3">
              <div className='px-3 py-3'>
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
        <div>
        <div className="div border-2 border-solid w-2/3">
              <div className='px-3 py-3 '>
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
        <div>
        <div className="div border-2 border-solid w-2/3">
              <div className='px-3 py-3'>
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
  );
}

export default AutoPlay;
