import React from 'react'
import ImageSlider from '../components/ImageSlider'

const Details = () => {
  return (
    <>
        <div className="wrapper w-5/6 mx-auto py-10 flex flex-col lg:flex-row">
            <div className="details-left w-full lg:w-2/3 ">
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
                <div className="px-4 w-full">
                    <div className="package-info">
                        <div className="overview py-5">
                            <h1>Overview</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eius molestiae ex expedita corporis repellat voluptate, similique fugiat minus reiciendis. Dolores quo magni, laborum eaque dicta odio veniam consectetur commodi quas quisquam a atque? Corrupti aliquam rerum voluptates hic laudantium!
                                <br/>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia temporibus veniam voluptates possimus omnis, sunt quas ipsa tenetur nobis. Pariatur, eveniet quos incidunt, reiciendis praesentium repellat quaerat officia quis facere voluptatum ab quidem eligendi.
                            </p>
                        </div>
                        <div className="itinerary">
                            <h1>Itinerary</h1>
                            <ul>
                                <li>
                                    Day 1 : Kathmandu to Pokhara (By flight or Bus), the city of Lakes, adventures and serenity.
                                </li>
                                <li>
                                    Day 2 : Drive to Nayapul and trek to Ulleri
                                </li>
                                <li>
                                    Day 3 : Trek to Ghorepani
                                </li>
                                <li>
                                    Day 4 : Early trek to Poon Hill, Back To Ghorepani and Trek to Tadapani
                                </li>
                                <li>
                                    Day 5 : Tadapani to Chomrong
                                </li>
                            </ul>
                        </div>
                        <div className="cost">
                            <h1>Cost</h1>
                            <div className="cost-include">
                                <h3>The Cost Includes</h3>
                                <li>
                                    Pick-up or Drop-off service from and to Airport(in our own vehicle)
                                </li>
                                <li>
                                    Transportation to and from!!
                                </li>
                                <li>
                                    Food all along the trip(Breakfast, Lunch, Dinner and a cup of coffee or tea) and accommodations during the trip in hotels with family environment
                                </li>
                                <li>
                                    Transportation, food, accommodation and insurance of Guide during the trip
                                </li>
                            </div>
                            <div className="cost-exclude">
                                <h3>The Cost Excludes</h3>
                                <li>
                                    International Airfare
                                </li>
                                <li>
                                    Visa Charges
                                </li>
                                <li>
                                    Personal Expenses such as shopping, bar bills, hot shower, telephone, laundry, titbits etc
                                </li>
                                <li>
                                    Your travel and medical insurance 
                                </li>
                            </div>
                        </div>
                        <div className="map w-full">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.122151646772!2d85.30328009603029!3d27.693177087700334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19021b3acb99%3A0x920ceee618a3a24!2sNebuti%20Travels%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1711963762456!5m2!1sen!2snp"  height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full rounded-md'></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-right w-full lg:w-1/3 ps-4 ">
                <div className="details-cart bg-neutral-100 px-4 py-5 w-full rounded-md">
                    <div className="cart-div bg-white w-full rounded-md pt-3">
                        <div className="carttop px-4 py-6">
                            <h4 className='discount-percent bg-orange-500 rounded-3xl w-1/4 text-center text-white font-bold py-1 text-sm'>
                                83% Off
                            </h4>
                            <div className="package-price flex justify-between pt-4">
                                <div className="adult-price w-5/12">
                                    <p className='text-xs text-black font-medium'>
                                        From
                                        <strike className='text-gray-400 text-sm ps-2 font-normal'>$1500 </strike>
                                    </p>
                                    <h1 className='text-black font-medium text-3xl'>
                                        $250
                                        <span className='text-gray-500 text-sm font-normal ps-2 tracking-wider'>
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
                                        <span className='text-gray-500 text-sm font-normal ps-2 tracking-wider'>
                                            /Child
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="cartbottom border-y border-slate-200 text-center py-4">
                            <button className='bg-orange-500 text-white px-16 py-3 text-lg rounded-md tracking-wide'>Check Availability</button>
                        </div>
                        <div className='text-center py-4'>
                            <p className='text-sm tracking-wide text-black'>
                                Need help with booking?
                                <span className='text-orange-600 ps-1'>
                                    Send Us A Message
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-14">
                    <div className="package-info px-4 py-4 shadow-md rounded-md w-full">
                        <ul className='list-none text-black py-3'>
                            <li>
                                <i className="fa-solid fa-hotel text-orange-500"></i>
                                <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Accomodation</span>
                            </li>
                            <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>4 Stars Hotels</li>
                        </ul>
                        <ul className='list-none text-black py-3'>
                            <li>
                                <i className="fa-solid fa-bus text-orange-500"></i>
                                <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Transportation</span>
                            </li>
                            <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Airplanes, Bus</li>
                        </ul>
                        <ul className='list-none text-black py-3'>
                            <li>
                                <i className="fa-solid fa-mountain text-orange-500"></i>
                                <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Maximum Altitude</span>
                            </li>
                            <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>5,416</li>
                        </ul>
                        <ul className='list-none text-black py-3'>
                            <li>
                                <i className="fa-solid fa-tree-city text-orange-500"></i>
                                <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Departure City</span>
                            </li>
                            <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Kathmandu</li>
                        </ul>
                        <ul className='list-none text-black py-3'>
                            <li>
                                <i className="fa-solid fa-cloud-sun text-orange-500"></i>
                                <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Best Season</span>
                            </li>
                            <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Feb, Mar, Apr & May</li>
                        </ul>
                        <ul className='list-none text-black py-3'>
                            <li>
                                <i className="fa-solid fa-person-hiking text-orange-500"></i>
                                <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Tour Availability</span>
                            </li>
                            <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Available</li>
                        </ul>
                        <ul className='list-none text-black py-3'>
                            <li>
                                <i className="fa-solid fa-bowl-food text-orange-500"></i>
                                <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Meals</span>
                            </li>
                            <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Brekfast & Dinner</li>
                        </ul>
                        <ul className='list-none text-black py-3'>
                            <li>
                                <i className="fa-solid fa-language text-orange-500"></i>
                                <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Language</span>
                            </li>
                            <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>English, Spanish, French, Chinese</li>
                        </ul>
                        <ul className='list-none text-black py-3'>
                            <li>
                                <i className="fa-solid fa-wifi text-orange-500"></i>
                                <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Wifi</span>
                            </li>
                            <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Available</li>
                        </ul>
                        <ul className='list-none text-black py-3'>
                            <li>
                                <i className="fa-solid fa-child text-orange-500"></i>
                                <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Minimum Age</span>
                            </li>
                            <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>12</li>
                        </ul>
                        <ul className='list-none text-black py-3'>
                            <li>
                                <i className="fa-solid fa-male text-orange-500"></i>
                                <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Maximum Age</span>
                            </li>
                            <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>65</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Details