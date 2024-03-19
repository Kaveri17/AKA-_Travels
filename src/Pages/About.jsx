import React from 'react'

const About = () => {
  return (
    <>
        <div className="container mx-auto w-10/12 flex flex-col md:flex-row justify-evenly items-center p-7 ">
            <div className="about-img w-6/12 bg-slate-500 relative">
                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg" alt="" className='b1 w-full '/>
                <img src="https://heymondo.com/blog/wp-content/uploads/2021/03/shutterstock_757552030_compressed.jpg" alt="" className='b2 w-3/5 absolute right-0 top-12'/>
                <div className="experience bg-orange-600 text-white absolute right-0 top-0">
                    <h1>25 YEARS</h1> 
                    <h2>
                        Of Experience
                    </h2>
                </div>
                <div className="clients bg-cyan-500 text-white absolute right-0 bottom-0">
                    <h1 className=''> 20,000+</h1> 
                    <h2>
                        Happy Clients
                    </h2>
                </div>
            </div>
            <div className="about-detail w-6/12 ps-5">
                <h3 className='text-orange-500'>Hello We Are AKA'S Travels</h3>
                <h1 className='font-extrabold'>We Are The Best Travel Companion</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, 
                    esse quos fuga quae at magni pariatur necessitatibus a unde! Impedit.

                    <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>                    
                </p>
                <button className='bg-orange-500 text-white'>CONTACT US</button>
            </div> 
        </div>
    
    </>
  )
}

export default About