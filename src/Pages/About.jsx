import React from 'react'

const About = () => {
  return (
    <>
        <div className="container mx-auto w-10/12 flex flex-col md:flex-row justify-between items-center p-7  " style={{height:'90vh'}}>
            <div className="about-img w-6/12 relative">
                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg" alt="" className='b1 w-11/12 ' style={{height:'60vh',borderRadius:'100px 0 100px 0'}}/>
                <img src="https://heymondo.com/blog/wp-content/uploads/2021/03/shutterstock_757552030_compressed.jpg" alt="" className='b2 w-1/2 absolute -right-16 top-24 rounded-full border-white z-10' style={{borderWidth:'40px', height:'62%'}}/>
                <div className="experience bg-orange-500 text-white absolute -right-24 -top-10 px-14 py-12 rounded-3xl border-white " style={{borderWidth:'15px'}}>
                    <h1 className='font-black text-3xl'>25 YEARS</h1> 
                    <h2 className='font-bold text-lg'>
                        Of Experience
                    </h2>
                </div>
                <div className="clients bg-cyan-400 text-white absolute right-0 -bottom-16 px-16 py-12 rounded-3xl border-white"  style={{borderWidth:'15px'}}>
                    <h1 className='font-black text-3xl'> 20,000+</h1> 
                    <h2 className='font-bold text-lg'>
                        Happy Clients
                    </h2>
                </div>
            </div>
            <div className="about-detail w-5/12 px-6">
                <h3 className='text-orange-500 text-lg font-bold'>Hello We Are AKA'S Travels</h3>
                <h1 className='font-extrabold text-3xl py-3'>We Are The Best Travel Companion</h1>
                <p className='pb-3 tracking-widest'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, 
                    esse quos fuga quae at magni pariatur necessitatibus a unde! Impedit.

                    
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                   
                </p>
                <button className='bg-orange-500 text-white p-3 rounded-lg'>CONTACT US</button>
            </div> 
        </div>
    
    </>
  )
}

export default About