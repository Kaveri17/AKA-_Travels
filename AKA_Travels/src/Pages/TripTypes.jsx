import React from 'react'
import { Link } from 'react-router-dom'

const TripTypes = () => {
  return (
    <>
        <div className="wrapper w-10/12 mx-auto py-10">
            <h1 className='font-extrabold text-3xl text-center pt-6 pb-2'>
                Trip Types
            </h1>
            <div className="triptypes flex flex-wrap justify-between">
                
                <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <div className="triptypes-div w-full rounded-xl">
                        <Link to="" className="triptypes-img relative">
                            <img
                            src="\Image\pic1.jpeg"
                            alt=""
                            className="w-full h-full rounded-xl"
                            />
                            <div
                            className="overlay absolute top-0 left-0 w-full h-full rounded-xl "
                            style={{ backgroundColor: "rgba(164,224,235,0.6)" }}
                            >
                            <Link to="/packages">
                                <button className="border-solid border-1 px-3 py-2 text-lg font-semibold border-white rounded-md hover:bg-white hover:text-teal-300">
                                    View More 
                                </button>
                            </Link>
                            </div>
                        </Link>
                    </div>
                    <h1 className="font-bold text-xl pt-2">
                        Budget Travel{" "}
                        <span className="totalnotrips text-sm"> (5 Trips) </span>
                    </h1>
                </div>

                <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <div className="triptypes-div w-full rounded-xl">
                    <Link to="" className="triptypes-img relative">
                        <img
                        src="\Image\pic2.webp"
                        alt=""
                        className="w-full h-full rounded-xl"
                        />
                        <div
                        className="overlay absolute top-0 left-0 w-full h-full rounded-xl "
                        style={{ backgroundColor: "rgba(164,224,235,0.6)" }}
                        >
                        <Link to="/packages">
                        
                            <button className="border-solid border-1 px-3 py-2 text-lg font-semibold border-white rounded-md hover:bg-white hover:text-teal-300">
                                View More
                            </button>
                        </Link>
                        </div>
                    </Link>
                    </div>
                    <h1 className="font-bold text-xl pt-2">
                        Children Friendly{" "}
                        <span className="totalnotrips text-sm"> (2 Trips) </span>
                    </h1>
                </div>

                <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <div className="triptypes-div w-full rounded-xl">
                        <Link to="" className="triptypes-img relative">
                            <img
                            src="\Image\pic3.webp"
                            alt=""
                            className="w-full h-full rounded-xl"
                            />
                            <div
                            className="overlay absolute top-0 left-0 w-full h-full rounded-xl "
                            style={{ backgroundColor: "rgba(164,224,235,0.6)" }}
                            >
                            <Link to="/packages">

                            <button className="border-solid border-1 px-3 py-2 text-lg font-semibold border-white rounded-md hover:bg-white hover:text-teal-300">
                                View More
                            </button>
                            </Link>
                            </div>
                        </Link>
                    </div>
                    <h1 className="font-bold text-xl pt-2">
                        Nature{" "}
                        <span className="totalnotrips text-sm"> (2 Trips) </span>
                    </h1>
                </div>

                <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <div className="triptypes-div w-full rounded-xl">
                        <Link to="" className="triptypes-img relative">
                            <img
                            src="\Image\pic4.jpeg"
                            alt=""
                            className="w-full h-full rounded-xl"
                            />
                            <div
                            className="overlay absolute top-0 left-0 w-full h-full rounded-xl "
                            style={{ backgroundColor: "rgba(164,224,235,0.6)" }}
                            >
                            <Link to="/packages">

                            <button className="border-solid border-1 px-3 py-2 text-lg font-semibold border-white rounded-md hover:bg-white hover:text-teal-300">
                                View More
                            </button>
                            </Link>
                            </div>
                        </Link>
                    </div>
                    <h1 className="font-bold text-xl pt-2">
                        Super Flexible{" "}
                        <span className="totalnotrips text-sm"> (4 Trips) </span>
                    </h1>
                </div>

                <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <div className="triptypes-div w-full rounded-xl">
                        <Link to="" className="triptypes-img relative">
                            <img
                            src="\Image\pic5.jpeg"
                            alt=""
                            className="w-full h-full rounded-xl"
                            />
                            <div
                            className="overlay absolute top-0 left-0 w-full h-full rounded-xl "
                            style={{ backgroundColor: "rgba(164,224,235,0.6)" }}
                            >
                            <Link to="/packages">
                            
                            <button className="border-solid border-1 px-3 py-2 text-lg font-semibold border-white rounded-md hover:bg-white hover:text-teal-300">
                                View More
                            </button>
                            </Link>
                            </div>
                        </Link>
                    </div>
                    <h1 className="font-bold text-xl pt-2">
                        Weeekend Trips{" "}
                        <span className="totalnotrips text-sm"> (3 Trips) </span>
                    </h1>
                </div>
                
                <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <div className="triptypes-div w-full rounded-xl">
                        <Link to="" className="triptypes-img relative">
                            <img
                            src="\Image\pic6.webp"
                            alt=""
                            className="w-full h-full rounded-xl"
                            />
                            <div
                            className="overlay absolute top-0 left-0 w-full h-full rounded-xl "
                            style={{ backgroundColor: "rgba(164,224,235,0.6)" }}
                            >
                            <Link to="/packages">

                            <button className="border-solid border-1 px-3 py-2 text-lg font-semibold border-white rounded-md hover:bg-white hover:text-teal-300">
                                View More
                            </button>
                            </Link>
                            </div>
                        </Link>
                    </div>
                    <h1 className="font-bold text-xl pt-2">
                        Cultural{" "}
                        <span className="totalnotrips text-sm"> (2 Trips) </span>
                    </h1>
                </div>
                
                <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <div className="triptypes-div w-full rounded-xl">
                        <Link to="" className="triptypes-img relative">
                            <img
                            src="\Image\pic7.jpeg"
                            alt=""
                            className="w-full h-full rounded-xl"
                            />
                            <div
                            className="overlay absolute top-0 left-0 w-full h-full rounded-xl "
                            style={{ backgroundColor: "rgba(164,224,235,0.6)" }}
                            >
                            <Link to="/packages">

                            <button className="border-solid border-1 px-3 py-2 text-lg font-semibold border-white rounded-md hover:bg-white hover:text-teal-300">
                                View More
                            </button>
                            </Link>
                            </div>
                        </Link>
                    </div>
                    <h1 className="font-bold text-xl pt-2">
                        Home Stay{" "}
                        <span className="totalnotrips text-sm"> (1 Trips) </span>
                    </h1>
                </div>

                <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <div className="triptypes-div w-full rounded-xl">
                        <Link to="" className="triptypes-img relative">
                            <img
                            src="\Image\pic8.jpeg"
                            alt=""
                            className="w-full h-full rounded-xl"
                            />
                            <div
                            className="overlay absolute top-0 left-0 w-full h-full rounded-xl "
                            style={{ backgroundColor: "rgba(164,224,235,0.6)" }}
                            >
                            <Link to="/packages">

                            <button className="border-solid border-1 px-3 py-2 text-lg font-semibold border-white rounded-md hover:bg-white hover:text-teal-300">
                                View More
                            </button>
                            </Link>
                            </div>
                        </Link>
                    </div>
                    <h1 className="font-bold text-xl pt-2">
                        Nature{" "}
                        <span className="totalnotrips text-sm"> (2 Trips) </span>
                    </h1>
                </div>

                <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                    <div className="triptypes-div w-full rounded-xl">
                    <Link to="" className="triptypes-img relative">
                        <img
                        src="\Image\pic9.webp"
                        alt=""
                        className="w-full h-full rounded-xl"
                        />
                        <div
                        className="overlay absolute top-0 left-0 w-full h-full rounded-xl "
                        style={{ backgroundColor: "rgba(164,224,235,0.6)" }}
                        >
                        <Link to="/packages">

                            <button className="border-solid border-1 px-3 py-2 text-lg font-semibold border-white rounded-md hover:bg-white hover:text-teal-300">
                                View More
                            </button>
                        </Link>
                        </div>
                    </Link>
                    </div>
                    <h1 className="font-bold text-xl pt-2">
                        Home Stay{" "}
                        <span className="totalnotrips text-sm"> (3 Trips) </span>
                    </h1>
                </div>

            </div>
        </div>
    </>
  )
}

export default TripTypes