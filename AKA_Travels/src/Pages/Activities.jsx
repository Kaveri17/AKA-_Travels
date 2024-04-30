import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import { getActivities } from "../api/Act";
import { act } from "react";

const Activities = () => {
  // const [activities,setActivities]=useState([])
  const [activities, setActivities] = useState([])

  useEffect(() => {
    getActivities()
    .then( data => {
      if (data?.error){
        console.log(data.error)
      }
      else{
        setActivities(data)
        console.log(data)
      }
    }
    )
  },[])
  
  console.log(activities);
  return (
    <>
      <div className="wrapper w-10/12 mx-auto py-10">
        <h1 className="font-extrabold text-3xl text-center pt-6 pb-2">
          Activities
        </h1>
        <div className="activity flex flex-wrap justify-between"> 

      

            {
              activities?.length > 0 && 
              activities.map( activity => {
                return <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
                  <div className="activity-div w-full rounded-xl">
                    <Link to="" className="activity-img relative">
                    <img
                      src={`${API}/${activity.image}`}
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
                    {activity.category_name}{" "}
                    <span className="totalnotrips text-sm"> ({activity.description}) </span>
                  </h1>
                </div>   
              })
            }
              
              

          {/* <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
            <div className="activity-div w-full rounded-xl">
              
              <Link to="" className="activity-img relative">
                <img
                  src="\Image\citytour.jpg"
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
              City Tour{" "}
              <span className="totalnotrips text-sm"> (2 Trips) </span>
            </h1>
          </div>

          <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
            <div className="activity-div w-full rounded-xl">
              <Link to="" className="activity-img relative">
                <img
                  src="\Image\cycling.jpg"
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
              Cycling{" "}
              <span className="totalnotrips text-sm"> (5 Trips) </span>
            </h1>
          </div>

          <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
            <div className="activity-div w-full rounded-xl">
              <Link to="" className="activity-img relative">
                <img
                  src="\Image\paragliding.jpg"
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
              Paragliding{" "}
              <span className="totalnotrips text-sm"> (4 Trips) </span>
            </h1>
          </div>

          <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
            <div className="activity-div w-full rounded-xl ">
              <Link to="" className="activity-img relative">
                <img
                  src="\Image\safari.jpg"
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
              Safari{" "}
              <span className="totalnotrips text-sm"> (3 Trips) </span>
            </h1>
          </div>

          <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
            <div className="activity-div w-full rounded-xl">
              <Link to="" className="activity-img relative">
                <img
                  src="\Image\reafting.jpg"
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
              Rafting{" "}
              <span className="totalnotrips text-sm"> (2 Trips) </span>
            </h1>
          </div>

          <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
            <div className="activity-div w-full rounded-xl ">
              <Link to="" className="activity-img relative">
                <img
                  src="\Image\rockclimbing.jpg"
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
              Rock Climbing{" "}
              <span className="totalnotrips text-sm"> (1 Trips) </span>
            </h1>
          </div>

          <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
            <div className="activity-div w-full rounded-xl">
              <Link to="" className="activity-img relative">
                <img
                  src="\Image\Sking.jpg"
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
              Sking{" "}
              <span className="totalnotrips text-sm"> (2 Trips) </span>
            </h1>
          </div>

          <div className="w-full md:w-1/2 lg:w-4/12 py-10 px-2">
            <div className="activity-div w-full rounded-xl">
              <Link to="" className="activity-img relative">
                <img
                  src="\Image\trekking2.jpg"
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
             Trekking{" "}
              <span className="totalnotrips text-sm"> (3 Trips) </span>
            </h1>
          </div> */}

        </div>
      </div>
    </>
  );
};

export default Activities;





