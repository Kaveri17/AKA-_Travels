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
        <div className='w-3/12 relative'>
  <img src="/Image/pic4.jpeg" alt=""className='h-96 '/>
  <h1 className='text-xl pt-2'>Maldives <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/12 relative'>
  <img src="/Image/pic4.jpeg" alt=""className='h-96 '/>
  <h1 className='text-xl pt-2'>Maldives <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/12 relative'>
  <img src="/Image/pic4.jpeg" alt=""className='h-96 '/>
  <h1 className='text-xl pt-2'>Maldives <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/12 relative'>
  <img src="/Image/pic4.jpeg" alt=""className='h-96 '/>
  <h1 className='text-xl pt-2'>Maldives <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/12 relative'>
  <img src="/Image/pic4.jpeg" alt=""className='h-96 '/>
  <h1 className='text-xl pt-2'>Maldives <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
        <div>
        <div className='w-3/12 relative'>
  <img src="/Image/pic4.jpeg" alt=""className='h-96 '/>
  <h1 className='text-xl pt-2'>Maldives <i class="fa-solid fa-arrow-right"></i></h1>
  <p className='rounded-lg  bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
</div>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;