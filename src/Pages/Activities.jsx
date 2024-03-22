import React from 'react'
import { Link } from 'react-router-dom'

const Activities = () => {
  return (
    <>
        <div className="wrapper w-10/12 mx-auto">
            <h1>Activities</h1>
            <div className="activity flex flex-wrap">
                <div className="activity-div w-4/12 px-2 h-3/4">
                    <Link to="" className='activity-img'> <img src="\Image\boating.jpg" alt="" className='w-full h-full'/> </Link>
                    <h1>Boating <span className='totalnotrips'> (5 Trips) </span></h1>
                </div>
                <div className="activity-div w-4/12 px-2 h-3/4">
                    <Link to="" className='activity-img'> <img src="\Image\citytour.jpg" alt="" className='w-full h-full'/> </Link>
                    <h1>City Tour <span className='totalnotrips'> (2 Trips) </span></h1>
                </div>
                <div className="activity-div w-4/12 px-2 h-3/4">
                    <Link to="" className='activity-img'> <img src="\Image\cycling.jpg" alt="" className='w-full h-full' /> </Link>
                    <h1>Cycling <span className='totalnotrips'> (5 Trips) </span></h1>
                </div>
                <div className="activity-div w-4/12 px-2 h-3/4">
                    <Link to="" className='activity-img'> <img src="\Image\paragliding.jpg" alt="" className='w-full h-full'/> </Link>
                    <h1>Paragliding <span className='totalnotrips'> (4 Trips) </span></h1>
                </div>
                <div className="activity-div w-4/12 px-2 h-3/4">
                    <Link to="" className='activity-img'> <img src="\Image\safari.jpg" alt="" className='w-full h-full'/> </Link>
                    <h1>Safari <span className='totalnotrips'> (3 Trips) </span></h1>
                </div>
                <div className="activity-div w-4/12 px-2 h-3/4">
                    <Link to="" className='activity-img'> <img src="\Image\reafting.jpg" alt="" className='w-full h-full'/> </Link>
                    <h1>Rafting <span className='totalnotrips'> (2 Trips) </span></h1>
                </div>
                <div className="activity-div w-4/12 px-2 h-3/4">
                    <Link to="" className='activity-img'> <img src="\Image\rockclimbing.jpg" alt="" className='w-full h-full'/> </Link>
                    <h1>Rock Climbing <span className='totalnotrips'> (1 Trips) </span></h1>
                </div>
                <div className="activity-div w-4/12 px-2 h-3/4">
                    <Link to="" className='activity-img'> <img src="\Image\Sking.jpg" alt="" className='w-full h-full'/> </Link>
                    <h1>Sking <span className='totalnotrips'> (2 Trips) </span></h1>
                </div>
                <div className="activity-div w-4/12 px-2 h-3/4">
                    <Link to="" className='activity-img'> <img src="\Image\trekking.jpg" alt="" className='w-full h-full'/> </Link>
                    <h1>Trekking <span className='totalnotrips'> (3 Trips) </span></h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Activities