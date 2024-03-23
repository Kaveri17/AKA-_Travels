import React from 'react'
import { Link } from 'react-router-dom'

const TripTypes = () => {
  return (
    <>
        <div className="wrapper w-10/12 mx-auto">
            <h1 className='font-extrabold text-3xl text-center pt-6 pb-2'>Trip Types</h1>
            <div className="activity flex flex-wrap justify-between">
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2 ">
                    <Link to="" className='activity-img'> <img src="\Image\pic1.jpeg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Budget Travel <span className='totalnotrips text-sm'> (5 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\pic2.webp" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Children Friendly <span className='totalnotrips text-sm'> (2 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\pic3.webp" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Nature <span className='totalnotrips text-sm'> (5 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\pic4.jpeg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Super Flexible <span className='totalnotrips text-sm'> (4 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\pic5.jpeg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Weekend Trips<span className='totalnotrips text-sm'> (3 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\pic6.webp" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Cultural<span className='totalnotrips text-sm'> (2 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\pic7.jpeg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Home Stay<span className='totalnotrips text-sm'> (1 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\pic8.jpeg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Nature<span className='totalnotrips text-sm'> (2 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\pic9.webp" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Home Stay<span className='totalnotrips text-sm'> (3 Trips) </span></h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default TripTypes