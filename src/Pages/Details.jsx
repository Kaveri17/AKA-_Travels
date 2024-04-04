import React from 'react'
// import ImageSlider from '../components/ImageSlider'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import ImageSlider from '../components/ImageSlider'

const Details = () => {

  return (
    <>
        <div className="wrapper w-5/6 mx-auto py-10 flex flex-col lg:flex-row">
            <div className="details-left w-full lg:w-2/3 ">
                {/* <ImageSlider/> */}
                <div className="dleft-top">
                    <div className="package-title flex justify-between pb-10">
                        <h1 className='text-xl sm:text-3xl font-semibold w-3/5 sm:w-9/12 '>
                            Bhutan Cultural Tour: Explore the Himalayan Kingdom
                        </h1>
                        <div className="flex flex-col rounded-md shadow-md text-center w-1/5 sm:w-1/12 ">
                            <h2 className='bg-orange-600 text-white text-3xl font-semibold py-1 rounded-t-md'>
                                5
                            </h2>
                            <p className='text-sm py-1 text-gray-500 font-medium'>Days</p>
                        </div>
                    </div>
                </div>

                <div className="details shadow-md rounded-md mb-3 lg:shadow-none">
                    {/* <div className="details-img w-full relative">
                        <img src="/Image/pic24.jpeg" alt="" className='w-full rounded-md '/>
                        <button className='bg-white rounded-full text-gray-600 absolute px-3 py-2 bottom-5 left-5 text-sm '>
                            <Link to='/gallery'>
                                    <i className="fa-regular fa-image pe-2"></i>
                                    Gallery
                            </Link>
                        </button>                    
                    </div> */}
                    <ImageSlider/>
                    <div className="details-information lg:hidden">
                        <div className="package-info px-4 py-4 w-full flex flex-wrap">
                            <ul className='list-none text-black py-3 w-full sm:w-1/2'>
                                <li>
                                    <i className="fa-solid fa-hotel text-orange-500"></i>
                                    <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Accomodation</span>
                                </li>
                                <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>4 Stars Hotels</li>
                            </ul>
                            <ul className='list-none text-black py-3 w-full sm:w-1/2'>
                                <li>
                                    <i className="fa-solid fa-bus text-orange-500"></i>
                                    <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Transportation</span>
                                </li>
                                <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Airplanes, Bus</li>
                            </ul>
                            <ul className='list-none text-black py-3 w-full sm:w-1/2'>
                                <li>
                                    <i className="fa-solid fa-mountain text-orange-500"></i>
                                    <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Maximum Altitude</span>
                                </li>
                                <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>5,416</li>
                            </ul>
                            <ul className='list-none text-black py-3 w-full sm:w-1/2'>
                                <li>
                                    <i className="fa-solid fa-tree-city text-orange-500"></i>
                                    <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Departure City</span>
                                </li>
                                <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Kathmandu</li>
                            </ul>
                            <ul className='list-none text-black py-3 w-full sm:w-1/2'>
                                <li>
                                    <i className="fa-solid fa-cloud-sun text-orange-500"></i>
                                    <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Best Season</span>
                                </li>
                                <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Feb, Mar, Apr & May</li>
                            </ul>
                            <ul className='list-none text-black py-3 w-full sm:w-1/2'>
                                <li>
                                    <i className="fa-solid fa-person-hiking text-orange-500"></i>
                                    <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Tour Availability</span>
                                </li>
                                <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Available</li>
                            </ul>
                            <ul className='list-none text-black py-3 w-full sm:w-1/2'>
                                <li>
                                    <i className="fa-solid fa-bowl-food text-orange-500"></i>
                                    <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Meals</span>
                                </li>
                                <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Brekfast & Dinner</li>
                            </ul>
                            <ul className='list-none text-black py-3 w-full sm:w-1/2'>
                                <li>
                                    <i className="fa-solid fa-language text-orange-500"></i>
                                    <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Language</span>
                                </li>
                                <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>English, Spanish, French, Chinese</li>
                            </ul>
                            <ul className='list-none text-black py-3 w-full sm:w-1/2'>
                                <li>
                                    <i className="fa-solid fa-wifi text-orange-500"></i>
                                    <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Wifi</span>
                                </li>
                                <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>Available</li>
                            </ul>
                            <ul className='list-none text-black py-3 w-full sm:w-1/2'>
                                <li>
                                    <i className="fa-solid fa-child text-orange-500"></i>
                                    <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Minimum Age</span>
                                </li>
                                <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>12</li>
                            </ul>
                            <ul className='list-none text-black py-3 w-full sm:w-1/2'>
                                <li>
                                    <i className="fa-solid fa-male text-orange-500"></i>
                                    <span className='ps-2 text-zinc-400' style={{fontSize:"14px"}}>Maximum Age</span>
                                </li>
                                <li className='text-sm leading-8 text-neutral-800' style={{fontSize:"15px"}}>65</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="px-4 pb-5 w-full shadow-md rounded-md">
                    <div className="package-info" style={{fontSize:"15px"}}>
                        <div className="overview py-5">
                            <h1 className='py-2 font-bold text-2xl pb-4'>Overview</h1>
                            <p className='tracking-wide text-gray-700'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eius molestiae ex expedita corporis repellat voluptate, similique fugiat minus reiciendis. Dolores quo magni, laborum eaque dicta odio veniam consectetur commodi quas quisquam a atque? Corrupti aliquam rerum voluptates hic laudantium!
                                <br/> <br />
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia temporibus veniam voluptates possimus omnis, sunt quas ipsa tenetur nobis. Pariatur, eveniet quos incidunt, reiciendis praesentium repellat quaerat officia quis facere voluptatum ab quidem eligendi.
                            </p>
                        </div>
                        <div className="itinerary pb-5">
                            <h1 className='py-2 font-bold text-2xl pb-3'>Itinerary</h1>
                            <ul className='tracking-wide text-gray-700'>
                                <li className='text-lg font-medium leading-10'>
                                    Day 1 :
                                    <span className="font-normal" style={{fontSize:"15px"}}>
                                        Kathmandu to Pokhara (By flight or Bus), the city of Lakes, adventures and serenity.
                                    </span> 
                                </li>
                                <li className='text-lg font-medium leading-10'>
                                    Day 2 :
                                    <span className="font-normal" style={{fontSize:"15px"}}>
                                        Drive to Nayapul and trek to Ulleri
                                    </span>
                                </li>
                                <li className='text-lg font-medium leading-10'>
                                    Day 3 : 
                                    <span className="font-normal" style={{fontSize:"15px"}}>
                                        Trek to Ghorepani
                                    </span>
                                </li>
                                <li className='text-lg font-medium leading-10'>
                                    Day 4 :
                                    <span className="font-normal" style={{fontSize:"15px"}}> 
                                        Early trek to Poon Hill, Back To Ghorepani and Trek to Tadapani
                                    </span>
                                </li>
                                <li className='text-lg font-medium leading-10'>
                                    Day 5 : 
                                    <span className="font-normal" style={{fontSize:"15px"}}>
                                        Tadapani to Chomrong
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="cost tracking-wide text-gray-700">
                            <h1 className='py-2 font-bold text-2xl pb-4 text-black'>Cost</h1>
                            <div className="cost-include leading-9">
                                <h3 className='pb-3 text-lg text-black font-semibold'>The Cost Includes</h3>
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
                            <div className="cost-exclude py-4 leading-10">
                                <h3 className='pb-3 text-lg text-black font-semibold'>The Cost Excludes</h3>
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
                        <div className="map w-full pb-6">
                                <h1 className='py-4 font-bold text-2xl'>
                                    Tour Map
                                </h1>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.122151646772!2d85.30328009603029!3d27.693177087700334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19021b3acb99%3A0x920ceee618a3a24!2sNebuti%20Travels%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1711963762456!5m2!1sen!2snp"  height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full rounded-md'></iframe>
                        </div>
                    </div>
                </div>
                <div className="py-3 my-2 w-full ">
                    <div className="details-form text-gray-700 shadow-md rounded-md py-5 px-3">
                        <div className="form-title ">
                            <h1 className='text-gray-800 text-xl font-semibold pb-3'>You can send your enquiry via the form below.</h1>
                            <p className='text-black '>
                                Trip name: <span className='required px-1 text-red-500'>*</span>
                                <span className='package-name font-medium text-gray-700'>
                                    Bhutan Cultural Tour: Explore the Himalayan Kingdom
                                </span>
                            </p>
                        </div>
                        <form action="" id='detailForms'>
                            <div className="flex flex-col py-3">
                                <label htmlFor="fullname" className='text-black py-2'>
                                    Your Name
                                    <span className='required px-1 text-red-500'>*</span>
                                </label>
                                <input type="text" placeholder='Enter Your Name *' className=' border-2 border-zinc-300 py-3 px-2 rounded-md' name='fullname' id='fullname' style={{fontSize:"14px"}}/>
                            </div>
                            <div className="flex flex-col py-3">
                                <label htmlFor="fullname" className='text-black py-2'>
                                    Your Email 
                                    <span className='required px-1 text-red-500'>*</span>
                                </label>
                                <input type="email" placeholder='Enter Your Email *' className='border-2 border-zinc-300 py-3 px-2 rounded-md' name='fullname' id='fullname' style={{fontSize:"14px"}}/>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="flex flex-col md:pe-2 py-3 w-full md:w-1/2">
                                    <label htmlFor="country" className='text-black py-2'>
                                        Country
                                        <span className='required px-1 text-red-500'>*</span>
                                    </label>
                                    {/* <input type="text" placeholder='Enter Your Name *' className=' border-2 py-3 px-2 rounded-md' name='fullname' id='fullname' style={{fontSize:"14px"}}/> */}
                                    <select name="country" id="country" className=' border-2 border-zinc-300 py-3 px-2 rounded-md'>
                                        <option value="" disabled selected hidden> Choose a country</option>
                                        <option value="">Everest</option>
                                        <option value="">Pokhara</option>
                                        <option value="">USA</option>
                                        <option value="">Bhutan</option>
                                        <option value="">Maldives</option>
                                        <option value="">Gorkha</option>
                                        <option value="">Paris</option>
                                    </select>
                                </div>
                                <div className="flex flex-col py-3 w-full md:w-1/2">
                                    <label htmlFor="contact" className='text-black py-2'>
                                        Contact number
                                        <span className='required px-1 text-red-500'>*</span>
                                    </label>
                                    <input type="text" placeholder='Enter Your Contact Number *' className='border-2 border-zinc-300 py-3 px-2 rounded-md' name='contact' id='contact' style={{fontSize:"14px"}}/>
                                </div>
                                <div className="flex flex-col md:pe-2 py-3 w-full md:w-1/2">
                                    <label htmlFor="noofadult" className='text-black py-2'>
                                        No. of Adults
                                        <span className='required px-1 text-red-500'>*</span>
                                    </label>
                                    <input type="number" placeholder='Enter Number of Adults *' className=' border-2 border-zinc-300 py-3 px-2 rounded-md' name='noofadult' id='noofadult' style={{fontSize:"14px"}}/>
                                </div>
                                <div className="flex flex-col py-3 w-full md:w-1/2">
                                    <label htmlFor="noofchildren" className='text-black py-2'>
                                        No. of children
                                        <span className='required px-1 text-red-500'>*</span>
                                    </label>
                                    <input type="number" placeholder='Enter Number of Children *' className='border-2 border-zinc-300 py-3 px-2 rounded-md' name='noofchildren' id='noofchildren' style={{fontSize:"14px"}}/>
                                </div>
                            </div>
                            <div className="flex flex-col py-3">
                                <label htmlFor="subject" className='text-black py-2'>
                                    Enquiry Subject
                                    <span className='required px-1 text-red-500'>*</span>
                                </label>
                                <input type="text" placeholder='Enter Your Subject *' className='border-2 border-zinc-300 py-3 px-2 rounded-md' name='subject' id='subject' style={{fontSize:"14px"}}/>
                            </div>
                            <div className="flex flex-col py-3">
                                <label htmlFor="message" className='text-black py-2'>
                                    Your Message 
                                    <span className='required px-1 text-red-500'>*</span>
                                </label>
                                {/* <input type="email" placeholder='Enter Your Email *' className='border-2 py-3 px-2 rounded-md' name='fullname' id='fullname' style={{fontSize:"14px"}}/> */}
                                <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Your Message*' className='border-2 border-zinc-300 rounded-md py-3 px-2' style={{fontSize:"14px"}}></textarea>
                            </div>
                            <button className='bg-orange-500 text-white text-center w-full py-3 font-semibold rounded-md'>
                                Send Email
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="details-right w-full lg:w-1/3 ps-4 ">
                <div className="details-cart bg-neutral-100 px-4 py-5 w-full rounded-md">
                    <div className="cart-div bg-white w-full rounded-md pt-3">
                        <div className="carttop px-4 py-6">
                            <h4 className='discount-percent bg-orange-500 rounded-3xl w-1/6 lg:w-2/5 xl:w-1/4 text-center text-white font-bold py-1 text-sm'>
                                83% Off
                            </h4>
                            <div className="package-price flex justify-between pt-4">
                                <div className="adult-price w-5/12">
                                    <p className='text-xs text-black font-medium'>
                                        From
                                        <strike className='text-gray-400 text-sm ps-2 font-normal'>$1500 </strike>
                                    </p>
                                    <h1 className='text-black font-medium text-3xl lg:text-xl xl:text-3xl'>
                                        $250
                                        <span className='text-gray-500 text-sm lg:text-xs xl:text-sm font-normal ps-2 tracking-wider'>
                                            /Adult
                                        </span>
                                    </h1>
                                </div>
                                <div className="child-price w-5/12">
                                    <p className='text-xs text-black font-medium'>
                                        From
                                    </p>
                                    <h1 className='text-black font-medium text-3xl lg:text-xl xl:text-3xl'>
                                        $300
                                        <span className='text-gray-500 text-sm lg:text-xs xl:text-sm font-normal ps-2 tracking-wider'>
                                            /Child
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="cartbottom border-y border-slate-200 text-center py-4">
                                {/* <button className='bg-orange-500 text-white px-16 lg:px-8 xl:px-16 py-3 text-lg rounded-md tracking-wide'>Check Availability</button> */}
                            {/* <button className='bg-orange-500 text-white px-16 lg:px-8 xl:px-16 py-3 text-lg rounded-md tracking-wide'> */}
                                <Modal/>
                            {/* </button> */}
                        </div>
                        <div className='text-center py-4'>
                            <p className='text-sm tracking-wide text-black'>
                                Need help with booking?
                                <span className='text-orange-600 ps-1'>
                                    <Link to="#detailForms">
                                        Send Us A Message
                                    </Link> 
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-14 hidden lg:block">
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