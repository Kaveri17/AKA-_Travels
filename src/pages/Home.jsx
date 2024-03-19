import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
        <div className="home  w-full h-screen pt-32 ps-32" style={{backgroundImage: "url('https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/banner-bg-1.png')"}} >
    <h1 className='text-3xl font-bold ml-21 '>Travelling and Exploring the World And  
        <br />
        Find The Beauty
        </h1> 
        <p className='mt-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed quasi dolorum perspiciatis <br /> ratione totam ipsam incidunt explicabo earum aspernatur dolorem, sunt animi ullam. Odit?</p>
        <button className='mt-6 border-solid border-2 border-red-500 rounded-md h-12 w-40 text-xl hover:bg-slate-500 '>APPOINTMENT</button>
        </div>
        
        <form>
            <div class="sm:col-span-3 -top-5">
             <label for="Destination" class="block text-sm font-medium text-grey-900 leading-6">Destination</label>  
            <div class="md-2">
                <select id="Destination" name='Destination' autoComplete='destination-name'clas='block w-full rounded-md border-solid border-2 text-grey-900 shadow-sm'>
                    Destination
<option >Bhutan</option>
<option >pokhara</option>
<option >Switzweland</option>
<option>Unites state</option>
                </select> 
</div>
            </div>
        </form>
    
    </>
    

  )
}

export default Home