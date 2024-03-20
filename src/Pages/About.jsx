import React from 'react'

const About = () => {
  return (
    <>
        <div className="back" style={{backgroundColor:'rgba(255, 244, 238,0.8)'}} >
            <div className="container mx-auto w-10/12 flex flex-col md:flex-row justify-between items-center py-7" style={{height:'90vh',}}>
                <div className="about-img w-6/12 relative">
                    <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg" alt="" className='b1 w-11/12 ' style={{height:'60vh',borderRadius:'100px 0 100px 0'}}/>
                    <img src="https://heymondo.com/blog/wp-content/uploads/2021/03/shutterstock_757552030_compressed.jpg" alt="" className='b2 w-1/2 absolute -right-16 top-16 rounded-full border-white z-10' style={{borderWidth:'40px', height:'65%'}}/>
                    <div className="experience bg-orange-500 text-white absolute -right-24 -top-20 px-14 py-12 rounded-3xl border-white " style={{borderWidth:'15px'}}>
                        <h1 className='font-black text-3xl'>25 YEARS</h1> 
                        <h2 className='font-bold text-lg'>
                            Of Experience
                        </h2>
                    </div>
                    <div className="clients bg-cyan-400 text-white absolute right-12 -bottom-12 px-16 py-12 rounded-3xl border-white"  style={{borderWidth:'15px'}}>
                        <h1 className='font-black text-3xl'> 20,000+</h1> 
                        <h2 className='font-bold text-lg'>
                            Happy Clients
                        </h2>
                    </div>
                </div>
                <div className="about-detail w-5/12 px-6">
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
        <div className="history">
            <div className="wrapper w-10/12 mx-auto py-20">
                <h2 className='text-center text-orange-500 text-lg tracking-wider font-bold py-3'>Road Map</h2>
                <h1 className='text-center text-3xl tracking-wide font-extrabold pb-4'>OUR HISTORY</h1>

                <div className="history-containers py-9">
                        <div className="history-div flex flex-wrap justify-between">
                            <div className="w-full lg:w-5/12 ">
                                <div className=" me-7 p-9 rounded-xl bg-white shadow-2xl">
                                    <div className="titles flex justify-between">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Paris
                                        </h2>
                                        <div className='flex '> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-5xl font-bold '> 2024</h2>
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
                                <div className=" me-7 p-9 rounded-xl bg-white shadow-2xl">
                                    <div className="titles flex justify-between">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Magnificant
                                        </h2>
                                        <div className='flex '> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-5xl font-bold '> 2023</h2>
                                        </div>
                                    </div>
                                    <div className="para">
                                        <p className='leading-relaxed tracking-widest text-zinc-500'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt commodi perspiciatis id tenetur earum ducimus officia consequatur corporis dolorem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12  ">
                                <div className=" me-7 p-9 bg-white rounded-xl shadow-2xl">
                                    <div className="titles flex justify-between">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Maldives
                                        </h2>
                                        <div className='flex '> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-5xl font-bold '> 2022</h2>
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
                                <div className=" me-7 p-9 bg-white rounded-xl shadow-2xl">
                                    <div className="titles flex justify-between">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Greece
                                        </h2>
                                        <div className='flex '> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-5xl font-bold '> 2021</h2>
                                        </div>
                                    </div>
                                    <div className="para">
                                        <p className='leading-relaxed tracking-widest text-zinc-500'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt commodi perspiciatis id tenetur earum ducimus officia consequatur corporis dolorem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-5/12">
                                <div className="me-7 p-9 bg-white rounded-xl shadow-2xl">
                                    <div className="titles flex justify-between">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Pokhara
                                        </h2>
                                        <div className='flex '> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-5xl font-bold '> 2019</h2>
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
                                <div className=" me-7 p-9 bg-white rounded-xl shadow-2xl">
                                    <div className="titles flex justify-between items-center">
                                        <h2 className='text-2xl font-bold tracking-wider'>
                                            Established
                                        </h2>
                                        <div className='flex  '> 
                                            <i className="bi bi-dot text-orange-400 text-6xl"></i>
                                            <h2 className='text-zinc-400 text-5xl font-bold '> 2018</h2>
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
    
    </>
  )
}

export default About