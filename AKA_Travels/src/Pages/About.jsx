import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    {/* Home Part */}
        <div className="back" style={{backgroundColor:'rgba(255, 244, 238,0.8)'}} >
            <div className="container mx-auto w-10/12 flex flex-col md:flex-row justify-between items-center py-36 " >
                <div className="about-img w-6/12 relative">
                    <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg" alt="" className='b1 w-11/12 ' style={{height:'60vh',borderRadius:'100px 0 100px 0'}}/>
                    <img src="https://heymondo.com/blog/wp-content/uploads/2021/03/shutterstock_757552030_compressed.jpg" alt="" className='b2 w-1/2 absolute -right-16 top-16 rounded-full border-white z-10' style={{borderWidth:'40px', height:'65%'}}/>
                    <div className="experience bg-orange-500 text-white absolute -right-24 -top-20 px-14 py-12 rounded-3xl border-white " style={{borderWidth:'15px'}}>
                        <h1 className='font-black text-3xl'>25 YEARS</h1> 
                        <h2 className='font-bold text-lg'>
                            Of Experience
                        </h2>
                    </div>
                    <div className="clients bg-teal-300 text-white absolute right-12 -bottom-12 px-16 py-12 rounded-3xl border-white"  style={{borderWidth:'15px'}}>
                        <h1 className='font-black text-3xl'> 20,000+</h1> 
                        <h2 className='font-bold text-lg'>
                            Happy Clients
                        </h2>
                    </div>
                </div>
                <div className="about-detail lg:w-5/12 px-6  ">
                    <h3 className='text-orange-500 text-lg font-bold'>Hello We Are AKA'S Travels</h3>
                    <h1 className='font-extrabold text-3xl py-3'>We Are The Best Travel Companion</h1>
                    <p className='pb-3 tracking-widest leading-relaxed'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, 
                        esse quos fuga quae at magni pariatur necessitatibus a unde! Impedit.                    
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                    
                    </p>
                    <button className='bg-orange-500 text-white py-3 px-6 rounded-lg font-bold text-sm tracking-widest'>CONTACT US</button>
                </div> 
            </div>
        </div>
    
    {/* History */}

        <div className="history">
            <div className="wrapper w-10/12 mx-auto py-20">
                <h2 className='text-center text-orange-500 text-lg tracking-wider font-bold py-3'>Road Map</h2>
                <h1 className='text-center text-3xl tracking-wide font-extrabold pb-4'>OUR HISTORY</h1>

                <div className="history-containers py-9">
                        <div className="history-div flex flex-wrap justify-between">
                            <div className="w-full lg:w-5/12 pt-20 lg:pt-0">
                                <div className=" me-7 px-9 py-8 rounded-xl bg-white shadow-2xl">
                                    <div className="titles flex justify-between items-center">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Paris
                                        </h2>
                                        <div className='flex items-center '> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-2xl font-bold '> 2024</h2>
                                        </div>
                                    </div>
                                    <div className="para">
                                        <p className='leading-relaxed tracking-widest text-zinc-500 text-sm'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt commodi perspiciatis id tenetur earum ducimus officia consequatur corporis dolorem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 hdiv">
                                <div className=" me-7 px-9 py-8 rounded-xl bg-white shadow-2xl">
                                    <div className="titles flex justify-between items-center">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Magnificant
                                        </h2>
                                        <div className='flex items-center'> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-2xl font-bold '> 2023</h2>
                                        </div>
                                    </div>
                                    <div className="para">
                                        <p className='leading-relaxed tracking-widest text-zinc-500'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt commodi perspiciatis id tenetur earum ducimus officia consequatur corporis dolorem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 pt-20 lg:pt-0">
                                <div className=" me-7 px-9 py-8 bg-white rounded-xl shadow-2xl">
                                    <div className="titles flex justify-between items-center">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Maldives
                                        </h2>
                                        <div className='flex items-center'> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-2xl font-bold '> 2022</h2>
                                        </div>
                                    </div>
                                    <div className="para">
                                        <p className='leading-relaxed tracking-widest text-zinc-500'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt commodi perspiciatis id tenetur earum ducimus officia consequatur corporis dolorem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 hdiv">
                                <div className=" me-7 px-9 py-8 bg-white rounded-xl shadow-2xl">
                                    <div className="titles flex justify-between items-center">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Greece
                                        </h2>
                                        <div className='flex items-center'> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-2xl font-bold '> 2021</h2>
                                        </div>
                                    </div>
                                    <div className="para">
                                        <p className='leading-relaxed tracking-widest text-zinc-500'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt commodi perspiciatis id tenetur earum ducimus officia consequatur corporis dolorem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 pt-20 lg:pt-0">
                                <div className="me-7 px-9 py-8 bg-white rounded-xl shadow-2xl">
                                    <div className="titles flex justify-between items-center">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Pokhara
                                        </h2>
                                        <div className='flex items-center'> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-2xl font-bold '> 2019</h2>
                                        </div>
                                    </div>
                                    <div className="para">
                                        <p className='leading-relaxed tracking-widest text-zinc-500'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt commodi perspiciatis id tenetur earum ducimus officia consequatur corporis dolorem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12 hdiv">
                                <div className=" me-7 px-9 py-8 bg-white rounded-xl shadow-2xl">
                                    <div className="titles flex justify-between items-center">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Established
                                        </h2>
                                        <div className='flex items-center'> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-2xl font-bold '> 2018</h2>
                                        </div>
                                    </div>
                                    <div className="para">
                                        <p className='leading-relaxed tracking-widest text-zinc-500'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt commodi perspiciatis id tenetur earum ducimus officia consequatur corporis dolorem.
                                        </p>
                                    </div>
                                </div>
                            </div>                            
                        </div>                            
                </div>
            </div>
        </div>
    
    {/* Client Reviews */}

        <div className="client-testimonials h-screen">
            <div className='h-screen' style={{backgroundColor:"rgba(45, 30, 16, 0.4)"}}>
                <div className="wrapper w-10/12 mx-auto py-28">
                    <h2 className='text-teal-300 text-lg tracking-wide font-bold py-1'>Our Best Review's</h2>
                    <h1 className='tracking-wide font-extrabold pb-12 text-slate-100' style={{fontSize:'2.5rem'}}>70,000 Happy Clients <br/> Around The World</h1>

                    <div className="clients flex flex-col md:flex-row w-full md:w-8/12">
                        <div className="client-container w-full md:w-1/2 px-2">
                            <div className="client-review bg-white rounded-xl px-6 py-7 text-center">
                                <p className='text-gray-600 tracking-widest leading-relaxed text-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum possimus est voluptatum, 
                                </p>
                                <div className="rating pt-1">
                                    <i class="bi bi-star-fill text-teal-400"></i>
                                    <i class="bi bi-star-fill text-teal-400"></i>
                                    <i class="bi bi-star-fill text-teal-400"></i>
                                    <i class="bi bi-star-fill text-teal-400"></i>
                                    <i class="bi bi-star-fill text-teal-400"></i>
                                </div>
                            </div>
                            <div className="client-details flex flex-col items-center py-3">
                                <h2 className='text-white font-bold text-2xl tracking-wide leading-relaxed'>Alina Adhikari</h2>
                                <h5 className='text-white tracking-wide leading-relaxed pb-3'>Lorem, ipsum.</h5>
                                <img src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg" alt="client-picture"  className='rounded-full w-20'/>

                            </div>
                        </div>
                        <div className="client-container w-full md:w-1/2 px-2">
                            <div className="client-review bg-white rounded-xl px-6 py-7 text-center">
                                <p className='text-gray-600 tracking-widest leading-relaxed text-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum possimus est voluptatum, 
                                </p>
                                <div className="rating pt-1">
                                    <i class="bi bi-star-fill text-teal-400"></i>
                                    <i class="bi bi-star-fill text-teal-400"></i>
                                    <i class="bi bi-star-fill text-teal-400"></i>
                                    <i class="bi bi-star-fill text-teal-400"></i>
                                    <i class="bi bi-star-fill text-teal-400"></i>
                                </div>
                            </div>
                            <div className="client-details flex flex-col items-center py-3">
                                <h2 className='text-white font-bold text-2xl tracking-wide leading-relaxed'>Anusha Chalise</h2>
                                <h5 className='text-white tracking-wide leading-relaxed pb-3'>Lorem, ipsum.</h5>
                                <img src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg" alt="client-picture"  className='rounded-full w-20'/>

                            </div>
                        </div>                                                 
                    </div>
                </div>
            </div>

        </div>

    {/* Blogs & News*/}
        
        <div className="blogandnews">
            <div className="wrapper w-10/12 mx-auto py-20">
                <div className="blog-title w-1/2 mx-auto pb-9">
                    <h2 className='text-center text-orange-500 text-lg tracking-wider font-bold py-2'>Blog & News</h2>
                    <h1 className='text-center tracking-wide font-extrabold pb-4' style={{fontSize:'2.5rem'}}>Our Latest Blog</h1>
                    <p className='text-sm leading-relaxed tracking-wider text-zinc-500 text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita hic sint officia. Praesentium illum libero perspiciatis. Similique, provident omnis?
                    </p>
                </div>
                
                <div className="blogs-container flex flex-col md:flex-row justify-between content-aroun w-full">
                    <div className="blogs p-4 border-solid border-orange-300 border-2 rounded-lg" >
                        <div className="blog-img rounded-lg">
                            <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min-1200x800.jpg" alt="beach-image " className='w-full rounded-lg'/> 
                        </div>
                        <div className="blog-detail py-3">
                            <h2 className='text-black text-2xl font-bold tracking-wide '>
                                10 Sun Hats For Beach Days,Long
                            </h2>
                            <p className='text-zinc-400 text-sm font-medium pt-1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nostrum.
                            </p>
                        </div>
                        <div className="blog-bottom flex w-full items-center">
                            <div className="blog-date w-1/2 text-zinc-600  ">
                                <i class="fa-solid fa-calendar-days"></i>
                                <span className='blog-createddate'>12. December 2023</span>
                            </div>
                            <div className="blog-btn w-1/2 ps-3">
                                <button className='bg-orange-500   px-3 py-2 rounded-lg font-bold text-white'>
                                    READ MORE 
                                    <i class="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="blogs p-4 border-solid border-orange-300 border-2 rounded-lg " >
                        <div className="blog-img rounded-lg">
                            <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min-1200x800.jpg" alt="beach-image " className='w-full rounded-lg'/> 
                        </div>
                        <div className="blog-detail py-3">
                            <h2 className='text-black text-2xl font-bold tracking-wide '>
                             10 Sun Hats For Beach Days,Long
                            </h2>
                            <p className='text-zinc-400 text-sm font-medium pt-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nostrum.
                            </p>
                        </div>
                        <div className="blog-bottom flex w-full items-center">
                            <div className="blog-date w-1/2 text-zinc-600  ">
                                <i class="fa-solid fa-calendar-days"></i>
                                <span className='blog-createddate'>12. December 2023</span>
                            </div>
                            <div className="blog-btn w-1/2 ps-3">
                                <button className='bg-orange-500   px-3 py-2 rounded-lg font-bold text-white'>
                                    READ MORE 
                                    <i class="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="blogs p-4 border-solid border-orange-300 border-2 rounded-lg" >
                        <div className="blog-img rounded-lg">
                        <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min-1200x800.jpg" alt="beach-image " className='w-full rounded-lg'/> 
                        </div>
                        <div className="blog-detail py-3">
                            <h2 className='text-black text-2xl font-bold tracking-wide '>
                                10 Sun Hats For Beach Days,Long
                            </h2>
                            <p className='text-zinc-400 text-sm font-medium pt-1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nostrum.
                            </p>
                        </div>
                        <div className="blog-bottom flex w-full items-center">
                            <div className="blog-date w-1/2 text-zinc-600  ">
                            <i class="fa-solid fa-calendar-days"></i>
                             <span className='blog-createddate'>12. December 2023</span>
                            </div>
                            <div className="blog-btn w-1/2 ps-3">
                                <button className='bg-orange-500   px-3 py-2 rounded-lg font-bold text-white'>
                                    READ MORE 
                                    <i class="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default About