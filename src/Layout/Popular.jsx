import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Popular.css'

const Popular = () => {
  return (

    <>
   <Header/>
   <div className='text-4xl text-center font-black m-14'>INTERNATIONAL PACKAGES</div>

   <div className='flex flex-wrap pe-8 w-full'>

    <div className='w-1/3'>
    <img src="\Image\pic4.jpeg" alt="" className=' pic4 w-full h-full py-4 px-4'/>
    <p className='text-center'>MALDIVES<i class="bi bi-arrow-right"></i></p>
    </div>

    <div className='w-1/3 justify-center'>
    <img src="\Image\pic5.jpeg" alt="" className='pic5 w-full h-full py-4 px-4 ' />
    <p className='text-center'>COLOMBO<i class="bi bi-arrow-right"></i></p>
    </div>

    <div className='w-1/3'>
    <img src="\Image\pic6.webp" alt="" className='pic6 w-full h-full  py-4 px-4'/>
    <p className='text-center'>BHUTAN<i class="bi bi-arrow-right"></i></p>
    </div>

    <div className='w-1/3'>
    <img src="\Image\pic7.jpeg" alt="" className='pic7 w-full h-full  py-4 px-4'/>
    <p className='text-center'>FRANCE<i class="bi bi-arrow-right"></i></p>
    </div>

    <div className='w-1/3'>
    <img src="\Image\pic8.jpeg" alt=""className='pic8 w-full h-full py-4 px-4' />
    <p className='text-center'>ENGLAND<i class="bi bi-arrow-right"></i></p>
    </div>

    <div className='w-1/3'>
    <img src="\Image\pic9.webp" alt="" className='pic9 w-full h-full py-4 px-4'/>
    <p className='text-center'>USA<i class="bi bi-arrow-right"></i></p>
    </div>

   </div>

   <div className='text-4xl text-center font-black m-14'>NATIONAL PACKAGES</div>
   <div className='flex flex-wrap pe-8 w-full'>

    <div className='w-1/3'>
    <img src="\Image\pic10.jpeg" alt="" className=' pic10 w-full h-full py-4 px-4'/>
    <p className='text-center'>POKHARA<i class="bi bi-arrow-right"></i></p>
    </div>

    <div className='w-1/3 justify-center'>
    <img src="\Image\pic11.jpeg" alt="" className='pic11 w-full h-full py-4 px-4 ' />
    <p className='text-center'>CHITWAN<i class="bi bi-arrow-right"></i></p>
    </div>

    <div className='w-1/3'>
    <img src="\Image\pic12.jpeg" alt="" className='pic12 w-full h-full  py-4 px-4'/>
    <p className='text-center'>LUMBINI<i class="bi bi-arrow-right"></i></p>
    </div>

    <div className='w-1/3'>
    <img src="\Image\pic13.png" alt="" className='pic13 w-full h-full  py-4 px-4'/>
    <p className='text-center'>GORKHA<i class="bi bi-arrow-right"></i></p>
    </div>

    <div className='w-1/3'>
    <img src="\Image\pic14.jpeg" alt=""className='pic4 w-full h-full py-4 px-4' />
    <p className='text-center'>KATHMANDU<i class="bi bi-arrow-right"></i></p>
    </div>

    <div className='w-1/3'>
    <img src="\Image\pic16.jpeg" alt="" className='pic16 w-full h-full py-4 px-4'/>
    <p className='text-center'>MUSTANG<i class="bi bi-arrow-right"></i></p>
    </div>

   </div>





   <div className='text-orange-500 m-12 py-10 text-xl font-bold text-center font-serif'>AWESOME TOURS</div>

   <div className='text-4xl text-center font-extrabold m-14'>BEST HOLIDAY PACKAGE</div>
   <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vitae beatae optio officia,<br/> voluptatem omnis nihil et, in laudantium reprehenderit nostrum molestias quae unde repudiandae. Pariatur facilis cupiditate vero quasi.</p>

   <div className='flex flex-wrap pe-8 w-full'>


   <div className='w-1/2 text-center'>
    <img src="\Image\pic20.webp" alt="" className=' pic4 w-full  py-12 px-12'/>
    <h1 className='text-center font-3xl font-black'>EVEREST BASE CAMP:EXPLORE ITS BEAUTY</h1>
    
    <i class="bi bi-geo-alt">Solukhumbu,Nepal</i>
    <i class="bi bi-clock">4Days-2Nights</i>
    

    <img src="Image\pic21.jpeg" alt="" className='pic4 w-full  py-12 px-12'/>
    <h1 className='text-center font-3xl font-black'>Dubai river:EXPLORE ITS BEAUTY</h1>
    <i class="bi bi-geo-alt">Dubai</i>
    <i class="bi bi-clock">5Days-2Nights</i>

    <img src="Image\pic22.jpeg" alt="" className='pic22 w-full  py-12 px-12'/>
    <h1 className='text-center font-3xl font-black'>Switzerland:EXPLORE ITS BEAUTY</h1>
    <i class="bi bi-geo-alt">Switzerland</i>
    <i class="bi bi-clock">6Days-4Nights</i>


    <img src="Image\pic23.jpeg" alt="" className='pic23 w-full  py-12 px-12'/>
    <h1 className='text-center font-3xl font-black'>FRANCE:EXPLORE ITS BEAUTY</h1>
    <i class="bi bi-geo-alt">France</i>
    <i class="bi bi-clock">3Days-2Nights</i>


    <img src="Image\pic24.jpeg" alt="" className='pic24 w-full  py-12 px-12'/>
    <h1 className='text-center font-3xl font-black'>RUSSIA:EXPLORE ITS BEAUTY</h1>
    <i class="bi bi-geo-alt">Russia</i>
    <i class="bi bi-clock">4Days-2Nights</i>

    <img src="Image\pic25.webp" alt="" className='pic25 w-full  py-12 px-12'/>
    <h1 className='text-center font-3xl font-black'>GREECE:EXPLORE ITS BEAUTY</h1>
    <i class="bi bi-geo-alt">Greece</i>
    <i class="bi bi-clock">2Days-1Night</i>
    



    
    


    </div>
    
   </div>







    </>
  )
}

export default Popular