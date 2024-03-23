import React from 'react'
import { Link } from 'react-router-dom'

const Activities = () => {
  return (
    <>
        <div className="wrapper w-10/12 mx-auto">
            <h1 className='font-extrabold text-3xl text-center pt-6 pb-2'>Activities</h1>
            <div className="activity flex flex-wrap justify-between">
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2 ">
                    <Link to="" className='activity-img'> <img src="\Image\boating.jpg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Boating <span className='totalnotrips text-sm'> (5 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\citytour.jpg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>City Tour <span className='totalnotrips text-sm'> (2 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\cycling.jpg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Cycling <span className='totalnotrips text-sm'> (5 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\paragliding.jpg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Paragliding <span className='totalnotrips text-sm'> (4 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\safari.jpg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Safari <span className='totalnotrips text-sm'> (3 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\reafting.jpg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Rafting <span className='totalnotrips text-sm'> (2 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\rockclimbing.jpg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Rock Climbing <span className='totalnotrips text-sm'> (1 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\Sking.jpg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Sking <span className='totalnotrips text-sm'> (2 Trips) </span></h1>
                </div>
                <div className="activity-div w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <Link to="" className='activity-img'> <img src="\Image\trekking.jpg" alt="" className='w-full h-full pb-2 rounded-xl'/> </Link>
                    <h1 className='font-bold text-xl'>Trekking <span className='totalnotrips text-sm'> (3 Trips) </span></h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Activities