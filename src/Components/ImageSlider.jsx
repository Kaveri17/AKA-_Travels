import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div className="details-img w-full relative">
                        <img src="/Image/pic24.jpeg" alt="" className='w-full rounded-md 'style={{height:"500px"}}/>
                        <button className='bg-white rounded-full text-gray-600 absolute px-3 py-2 bottom-5 left-5 text-sm border-0'>
                            <Link to='/gallery'>
                                    <i className="fa-regular fa-image pe-2"></i>
                                    Gallery
                            </Link>
                        </button>                    
                    </div>
                </div>
                <div>
                    <div className="details-img w-full relative">
                        <img src="https://cosmosmagazine.com/wp-content/uploads/2020/02/191010_nature.jpg" alt="" className='w-full rounded-md 'style={{height:"500px"}}/>
                        <button className='bg-white rounded-full text-gray-600 absolute px-3 py-2 bottom-5 left-5 text-sm border-0'>
                            <Link to='/gallery'>
                                    <i className="fa-regular fa-image pe-2"></i>
                                    Gallery
                            </Link>
                        </button>                    
                    </div>
                </div>
                <div>
                    <div className="details-img w-full relative">
                        <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" alt="" className='w-full rounded-md' style={{height:"500px"}}/>
                        <button className='bg-white rounded-full text-gray-600 absolute px-3 py-2 bottom-5 left-5 text-sm border-0'>
                            <Link to='/gallery'>
                                    <i className="fa-regular fa-image pe-2"></i>
                                    Gallery
                            </Link>
                        </button>                    
                    </div>
                </div>
                
            </Slider>
        </div>
        {/* <Carousel
        className="rounded-xl w-full"
        navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
                <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
                />
            ))}
            </div>
        )}
        >
        <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
        />
        <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
        />
        <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
        />
        </Carousel> */}

     </>
  )
}

export default ImageSlider
