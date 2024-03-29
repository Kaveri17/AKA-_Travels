import React from "react";
import Slider from "react-slick";

function Test() {

  
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   speed: 2000,
    //   autoplaySpeed: 2000,
    //   cssEase: "linear"
    // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
    

    
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="border-2 border-orange-200 w-full my-8">
      <img src="\Image\pic20.webp" alt="" className=' pic20 w-full  py-12 px-12'/>

      
      <h1 className='text-center font-3xl font-black'>EVEREST BASE CAMP:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8 ">
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
              </div>
      <button className='w-1/2 hover:bg-orange-300 border-2'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 border-orange-200 w-full my-8">
      <img src="Image\pic21.jpeg" alt="" className='pic21 w-full  py-12 px-12'/>
      <h1 className='text-center font-3xl font-black'>Dubai river:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8">
      <div className="leftt">
      <i class="bi bi-geo-alt">Dubai</i>
      <br/>
      <i class="bi bi-clock">5Days-2Nights</i>
      <br/>
      </div>
      <div className="righttt">
      <div className="discountprice border-2 border-blue-500 bg-blue-200">
                10% off
              </div>
              <div className="price">
                $900
              </div>
              <div>
                <strike>$1000</strike>
              </div>
              </div>
              </div>
      <button className='w-1/2 hover:bg-orange-300 border-2'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 border-orange-200 w-full my-8">
      <img src="Image\pic22.jpeg" alt="" className='pic22 w-full  py-12 px-12'/>
      <h1 className='text-center font-3xl font-black'>Switzerland:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8">
      <div className="leftt">
      <i class="bi bi-geo-alt">Switzerland</i>
      <br/>
      <i class="bi bi-clock">6Days-4Nights</i>
      <br/>
      </div>
      <div className="righttt">
      <div className="discountprice border-2 border-blue-500 bg-blue-200">
                10% off
              </div>
              <div className="price">
                $900
              </div>
              <div>
                <strike>$1000</strike>
              </div>
              </div>
              </div>
      <button className='w-1/2 hover:bg-orange-300 border-2'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 border-orange-200 w-full my-8">
      <img src="Image\pic23.jpeg" alt="" className='pic23 w-full  py-12 px-12'/>
      <h1 className='text-center font-3xl font-black'>FRANCE:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8">
      <div className="leftt">
      <i class="bi bi-geo-alt">France</i>
      <br/>
      <i class="bi bi-clock">3Days-2Nights</i>
      <br/>
      </div>
      <div className="righttt">
      <div className="discountprice border-2 border-blue-500 bg-blue-200">
                10% off
              </div>
              <div className="price">
                $900
              </div>
              <div>
                <strike>$1000</strike>
              </div>
              </div>
              </div>
      <button className='w-1/2 hover:bg-orange-300 border-2'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 border-orange-200 w-full my-8">
      <img src="Image\pic24.jpeg" alt="" className='pic24 w-full  py-12 px-12'/>
      <h1 className='text-center font-3xl font-black'>RUSSIA:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8">
      <div className="leftt">
      <i class="bi bi-geo-alt">Russia</i>
      <br/>
      <i class="bi bi-clock">4Days-2Nights</i>
      <br/>
      </div>
      <div className="righttt">
      <div className="discountprice border-2 border-blue-500 bg-blue-200 hover:orange-300">
                10% off
              </div>
              <div className="price">
                $900
              </div>
              <div>
                <strike>$1000</strike>
              </div>
              </div>
              </div>
              
      <button className='w-1/2 hover:bg-orange-300 border-2'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 border-orange-200 w-full my-8">
      <img src="Image\pic25.webp" alt="" className='pic25 w-full  py-12 px-12'/>
      <h1 className='text-center font-3xl font-black'>GREECE:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8">
      
      <div className="leftt">
      <i class="bi bi-geo-alt">Greece</i>
      <br/>
      <i class="bi bi-clock">2Days-1Night</i>
      <br/>
      </div>

      <div className="righttt">
      <div className="discountprice border-2 border-blue-500 bg-blue-200">
                10% off
              </div>
              <div className="price">
                $900
              </div>
              <div>
                <strike>$1000</strike>
              </div>
              </div>
              </div>
      
      <button className='w-1/2 hover:bg-orange-300 border-2'>VIEW DETAILS</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Test;
