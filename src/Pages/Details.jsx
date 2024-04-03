import React from 'react'
import ImageSlider from '../Components/ImageSlider'

const Details = () => {
  return (
    <>
        <div className="wrapper w-5/6 mx-auto py-10 flex ">
            <div className="details-left w-2/3 ">
                {/* <ImageSlider/> */}
                <div className="dleft-top">
                    <div className="package-title flex  justify-between pb-10">
                        <h1 className='text-3xl font-semibold w-9/12 '>
                            Bhutan Cultural Tour: Explore the Himalayan Kingdom
                        </h1>
                        <div className="flex flex-col rounded-md shadow-md text-center w-1/12 ">
                            <h2 className='bg-orange-600 text-white text-3xl font-semibold py-1 rounded-t-md'>
                                5
                            </h2>
                            <p className='text-sm py-1 text-gray-500 font-medium'>Days</p>
                        </div>
                    </div>
                </div>
                <div className="details-img w-full ">
                    <img src="/Image/pic24.jpeg" alt="" className='w-full rounded-md'/>
                </div>
            </div>
            <div className="details-right w-1/3 ps-3 ">
                <div className="details-cart bg-neutral-200 px-3 py-4 w-full rounded-md">
                    <div className="cart-div bg-white w-full rounded-md pt-3">
                        <div className="carttop px-4 py-6">
                            <h4 className='discount-percent bg-orange-500 rounded-xl w-1/4 text-center text-white font-bold py-1 text-sm'>
                                83% Off
                            </h4>
                            <div className="package-price flex justify-between pt-4">
                                <div className="adult-price w-5/12">
                                    <p className='text-xs text-black'>
                                        From
                                        <strike className='text-gray-500 text-sm'> $1500 </strike>
                                    </p>
                                    <h1 className='text-black font-medium text-3xl'>
                                        $250
                                        <span className='text-gray-500 text-sm font-normal'>
                                            /Adult
                                        </span>
                                    </h1>
                                </div>
                                <div className="child-price w-5/12">
                                    <p className='text-xs text-black'>
                                        From
                                    </p>
                                    <h1 className='text-black font-medium text-3xl'>
                                        $300
                                        <span className='text-gray-500 text-sm font-normal'>
                                            /Child
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="cartbottom border-y text-center py-4">
                            <button className='bg-orange-500 text-white px-20 py-3 font-medium text-lg rounded-md'>Check Availability</button>
                        </div>
                        <div className='text-center py-4'>
                            <p className='text-sm '>
                                Need help with booking?
                                <span className='text-orange-400 text-sm font-medium'>
                                    Send Us A Message
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Details