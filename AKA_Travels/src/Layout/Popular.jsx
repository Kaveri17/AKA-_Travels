import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import './Popular.css'
import Slider from "react-slick";
import { getPopular } from "../api/Pop";
import { API } from "../config";

const Popular = () => {

  const [popular,setPopular]=useState([])
  useEffect(()=>{
    getPopular()
    .then(data=>{
      if(data?.error){
        console.log(data.error)
      }
      else{
        setPopular(data)
        console.log(data)
      }
    })
  },[])
  console.log(popular)
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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
     
    ]
  };
  return (







    

    <>
  
   <div className='w-5/6 mx-auto pb-10'>
   
   <div className='text-4xl text-center font-black m-14'>INTERNATIONAL PACKAGES</div>
   <div className='flex flex-wrap justify-center pe-8 w-full' >
    {
      popular?.length>0 &&
      popular.map(popp=>{

  return <div className=' relative  w-full md:w-1/2 lg:w-1/3' key={popp._id}>
    <a href="/packages">
    <img src={`${API}/${popp.popular_image}`} alt="" className=' pic4 w-full h-full py-4 px-4'/>
    <p className='text-center'>{popp.popular_name}<i class="bi bi-arrow-right"></i></p>




    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white '>(2 Trips)</p>
  
    
    </a>

  
  

    
 


    {/* <div className=' relative  w-full md:w-1/2 lg:w-1/3 '>
    <a href="/packages">
    <img src="\Image\pic5.jpeg" alt="" className='pic5 w-full h-full py-4 px-4 ' />
    <p className='text-center'>COLOMBO<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(4 Trips)</p>
   </a>
    </div>

    <div className=' relative  w-full md:w-1/2 lg:w-1/3 '>
      <a href="/packages">
    <img src="\Image\pic6.webp" alt="" className='pic6 w-full h-full  py-4 px-4'/>
    <p className='text-center'>BHUTAN<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(3 Trips)</p>
    </a>
    </div>

    <div className=' relative  w-full md:w-1/2 lg:w-1/3 '>
    <a href="/packages">
    <img src="\Image\pic7.jpeg" alt="" className='pic7 w-full h-full  py-4 px-4'/>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
    <p className='text-center'>FRANCE<i class="bi bi-arrow-right"></i></p>
    </a>
    </div>

    <div className=' relative  w-full md:w-1/2 lg:w-1/3 '>
      <a href="/packages">
    <img src="\Image\pic8.jpeg" alt=""className='pic8 w-full h-full py-4 px-4' />
    <p className='text-center'>ENGLAND<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(1 Trip)</p>
    </a>
    </div>

    <div className=' relative  w-full md:w-1/2 lg:w-1/3 '>
      <a href="/packages">
    <img src="\Image\pic9.webp" alt="" className='pic9 w-full h-full py-4 px-4'/>
    <p className='text-center'>USA<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
    </a>
    </div> */}

   </div>
})}
    </div>



   <div className='text-4xl text-center font-black m-14'>NATIONAL PACKAGES</div>


    
 <div className='flex flex-wrap pe-8 w-full'>

    <div className=' relative  w-full md:w-1/2 lg:w-1/3'>
      <a href="/packages">
    <img src="\Image\pic12.jpeg" alt="" className=' pic10 w-full h-full py-4 px-4'/>
    <p className='text-center'>POKHARA<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(1 Trip)</p>
    </a>
    </div>
   

    <div className=' relative  w-full md:w-1/2 lg:w-1/3 '>
    <a href="/packages">
    <img src="\Image\pic11.jpeg" alt="" className='pic11 w-full h-full py-4 px-4 ' />
    <p className='text-center'>CHITWAN<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
    </a>
    </div>

    <div className=' relative  w-full md:w-1/2 lg:w-1/3 '>
    <a href="/packages">
    <img src="\Image\pic12.jpeg" alt="" className='pic12 w-full h-full  py-4 px-4'/>
    <p className='text-center'>LUMBINI<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(4 Trips)</p>
   </a>
    </div>

    <div className=' relative  w-full md:w-1/2 lg:w-1/3 '>
    <a href="/packages">
    <img src="\Image\pic13.png" alt="" className='pic13 w-full h-full  py-4 px-4'/>
    <p className='text-center'>GORKHA<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(2 Trips)</p>
    </a>
    </div>

    <div className=' relative  w-full md:w-1/2 lg:w-1/3 '>
    <a href="/packages">
    <img src="\Image\pic14.jpeg" alt=""className='pic4 w-full h-full py-4 px-4' />
    <p className='text-center'>KATHMANDU<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white font-'>(3 Trips)</p>
   </a>
    </div>

    <div className=' relative  w-full md:w-1/2 lg:w-1/3 '>
      <a href="/packages">
    <img src="\Image\pic16.jpeg" alt="" className='pic16 w-full h-full py-4 px-4'/>
    <p className='text-center'>MUSTANG<i class="bi bi-arrow-right"></i></p>
    <p className='rounded-lg bg-cyan-300 absolute left-10 top-10 text-white '>(1 Trip)</p>
    </a>
    </div>
    </div>

   



   <div className='text-orange-500 m-12 py-10 text-xl font-bold text-center font-serif'>AWESOME TOURS</div>
   
   <div className='text-4xl text-center font-extrabold m-14'>BEST HOLIDAY PACKAGE</div>
   <p className='text-center my-20 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vitae beatae optio officia,<br/> voluptatem omnis nihil et, in laudantium reprehenderit nostrum molestias quae unde repudiandae. Pariatur facilis cupiditate vero quasi.</p>

   <div className=' w-full me-3'>


   <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="border-2 border-orange-200 w-full">
      <img src="\Image\pic20.webp" alt="" className=' pic20 h-72'/>

      
      <h1 className='text-center font-3xl font-black'>Everest:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8 ">
      <div className="leftt">
      <i class="bi bi-geo-alt">Solukhumbu</i>
      <br/>
      <i class="bi bi-clock">4Days-2Nights</i>
      <br/>
      </div>
      <div className="righttt mx-3">
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
              <button className='w-1/2 bg-orange-300 border-2 rounded-lg  block mx-auto text-white font-bold'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 border-orange-200 w-full">
      <img src="Image\pic21.jpeg" alt="" className='pic21 h-72'/>
      <h1 className='text-center font-3xl font-black'>Dubai river:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8">
      <div className="leftt">
      <i class="bi bi-geo-alt">Dubai</i>
      <br/>
      <i class="bi bi-clock">5Days-2Nights</i>
      <br/>
      </div>
      <div className="righttt mx-3">
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
              <button className='w-1/2 bg-orange-300 border-2 rounded-lg  block mx-auto text-white font-bold'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 border-orange-200 w-full">
      <img src="Image\pic22.jpeg" alt="" className='pic22 h-72'/>
      <h1 className='text-center font-3xl font-black'>Switzerland:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8">
      <div className="leftt">
      <i class="bi bi-geo-alt">Switzerland</i>
      <br/>
      <i class="bi bi-clock">6Days-4Nights</i>
      <br/>
      </div>
      <div className="righttt mx-3">
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
              <button className='w-1/2 bg-orange-300 border-2 rounded-lg  block mx-auto text-white font-bold'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 border-orange-200 w-full">
      <img src="Image\pic23.jpeg" alt="" className='pic23 h-72'/>
      <h1 className='text-center font-3xl font-black'>FRANCE:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8">
      <div className="leftt">
      <i class="bi bi-geo-alt">France</i>
      <br/>
      <i class="bi bi-clock">3Days-2Nights</i>
      <br/>
      </div>
      <div className="righttt mx-3">
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
              <button className='w-1/2 bg-orange-300 border-2 rounded-lg  block mx-auto text-white font-bold'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 border-orange-200 w-full ">
      <img src="Image\pic24.jpeg" alt="" className='pic24 h-72'/>
      <h1 className='text-center font-3xl font-black'>RUSSIA:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8">
      <div className="leftt">
      <i class="bi bi-geo-alt">Russia</i>
      <br/>
      <i class="bi bi-clock">4Days-2Nights</i>
      <br/>
      </div>
      <div className="righttt mx-3">
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
              
              <button className='w-1/2 bg-orange-300 border-2 rounded-lg  block mx-auto text-white font-bold'>VIEW DETAILS</button>
          </div>
        </div>
        <div>
          <div className="border-2 border-orange-200 w-full">
      <img src="Image\pic25.webp" alt="" className='pic25 w-full h-72'/>
      <h1 className='text-center font-3xl font-black'>GREECE:EXPLORE ITS BEAUTY</h1>
      <div className=" flex flex-row justify-center my-8">
      
      <div className="leftt">
      <i class="bi bi-geo-alt">Greece</i>
      <br/>
      <i class="bi bi-clock">2Days-1Night</i>
      <br/>
      </div>

      <div className="righttt mx-3">
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
     
              <button className='w-1/2 bg-orange-300 border-2 rounded-lg  block mx-auto text-white font-bold'>VIEW DETAILS</button>
     
      
          </div>
        </div>
      </Slider>
    </div>
    </div>
    <a href="/blogs">
    <button className='w-1/5 h-12 bg-orange-400 border-2 rounded-lg block mx-auto my-16 text-white  font-bold '>VIEW MORE</button>
    </a>


    
    
   </div>
   
    </>
  )
}

export default Popular