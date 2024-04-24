import React, { useEffect, useState } from 'react'
import { getGallery } from '../api/Gallapp';
import { API } from '../config';


const Gallery = () => {
  // const[error, setError] = useState('');
  const [galleries, setGalleries] = useState([])
  
  useEffect(() => {
    getGallery()
    .then( data => {
      if (data?.error){
        console.log(data.error)
      }
      else{
        setGalleries(data)
        console.log(data)
      }
    }
    )
  })


  return (
    <>
   
        <div className=" w-5/6 mx-auto" >
            <div className='text-7xl font-bold text-center '>
            <h1>Our Gallery</h1>
            </div>

            <div className='flex flex-wrap pb-14 '>         
             {
              galleries?.length > 0 && 
              galleries.map( gallery => {
                return <div key={gallery._id} className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10"> 
                  <img src={`${API}/${gallery.gallery_image}`} alt={gallery.image_title} className='pic4 w-full h-full rounded-xl pe-3 ' />
                  <h1 className='text-xl font-bold text-center py-3'> {gallery.image_title} </h1>
                </div>
              })


             }
              {/* <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic4.jpeg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'   >MALDIVES</h1>
             
              </div>

              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic5.jpeg" alt="" className='pic5 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'>COLOMBO</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic6.webp" alt="" className='pic6 w-full h-full rounded-xl pe-3' />
                <h1 className='text-xl font-bold text-center py-3'>BHUTAN</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/manakamana.jpg" alt="" className=' pic4 w-full h-full rounded-xl pe-3' />
                <h1 className='text-xl font-bold text-center py-3'>MANAKAMANA</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic7.jpeg" alt="" className='pic7 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'>ENGLAND</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic8.jpeg" alt="" className=' pic9 w-full h-full rounded-xl pe-3' />
                <h1 className='text-xl font-bold text-center py-3'>USA</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic12.jpeg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'>LUMBINI</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic10.jpeg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'>POKHARA</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic11.jpeg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'>CHITWAN</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic13.png" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'>GORKHA</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic14.jpeg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'>BHAKTAPUR</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic16.jpeg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'>MUSTANG</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic20.webp" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'>SAGARMATHA</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic21.jpeg" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'>DUBAI</h1>
              </div>
              <div className="gallery-img  w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic25.webp" alt="" className='pic4 w-full h-full rounded-xl pe-3 ' />
                <h1 className='text-xl font-bold text-center py-3'>GREECE</h1>
              </div> */}

              {/* <div className="gallery-img w-full md:w-1/2 lg:w-1/3 py-10">
                <img src="/Image/pic4.jpeg" alt="" className=' pic4 w-full h-full rounded-xl'/>
                <h1 className='text-xl font-bold '>MALDIVES</h1>                
              </div>
              <div className="gallery-img w-full md:w-1/2 lg:w-1/3 p-2">
                <img src="/Image/pic4.jpeg" alt="" className=' pic4 w-full h-full rounded-xl'/>
                <h1 className='text-xl font-bold text-center py-3'>MALDIVES</h1>                
              </div>
              <div className="gallery-img w-full md:w-1/2 lg:w-1/3 p-2">
                <img src="/Image/pic4.jpeg" alt="" className=' pic4 w-full h-full rounded-xl'/>
                <h1 className='text-xl font-bold text-center py-3'>MALDIVES</h1>                
              </div>
              <div className="gallery-img w-full md:w-1/2 lg:w-1/3 p-2">
                <img src="/Image/pic4.jpeg" alt="" className=' pic4 w-full h-full rounded-xl'/>
                <h1 className='text-xl font-bold text-center py-3'>MALDIVES</h1>                
              </div>
              <div className="gallery-img w-full md:w-1/2 lg:w-1/3 p-2">
                <img src="/Image/pic4.jpeg" alt="" className=' pic4 w-full h-full rounded-xl'/>
                <h1 className='text-xl font-bold text-center py-3'>MALDIVES</h1>                
              </div> */}

              
            
            
            </div> 
                {/* <div className='flex justify-between space-x-4 pt-16'>
                <div className='h-80 w-1/3 '> 
            <img src="/Image/manakamana.jpg" alt="" className='pic4 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold text-center py-3'>MANAKAMANA</h1>
            </div>   
            <div className='h-80 w-1/3'> 
            <img src="/Image/pic7.jpeg" alt="" className='pic7 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold text-center py-3'>ENGLAND</h1>
            </div> 
            <div className='h-80 w-1/3'> 
            <img src="/Image/pic8.jpeg" alt="" className='pic8 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold text-center py-3'>USA</h1>
            </div> 
            </div>
            

            <div className='flex justify-between space-x-4 pt-16'>
                <div className='h-80 w-1/3 '> 
            <img src="/Image/pic12.jpeg" alt="" className='pic4 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold text-center py-3'>LUMBINI</h1>
            </div>   
            <div className='h-80 w-1/3'> 
            <img src="/Image/pic10.jpeg" alt="" className='pic10 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold text-center py-3'>POKHARA</h1>
            </div> 
            <div className='h-80 w-1/3'> 
            <img src="/Image/pic11.jpeg" alt="" className='pic8 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold text-center py-3'>CHITWAN</h1>
            </div> 
            </div>

            <div className='flex justify-between space-x-4 pt-16'>
                <div className='h-80 w-1/3 '> 
            <img src="/Image/pic13.png" alt="" className='pic4 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold px-6 py-3'>GORKHA</h1>
            </div>   
            <div className='h-80 w-1/3'> 
            <img src="/Image/pic14.jpeg" alt="" className='pic7 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold text-center py-3'>BHAKTAPUR</h1>
            </div> 
            <div className='h-80 w-1/3'> 
            <img src="/Image/pic16.jpeg" alt="" className='pic8 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold px-6 py-3'>MUSTANG</h1>
            </div> 
            </div>
            <div className='flex justify-between space-x-4 pt-16 pb-28'>
                <div className='h-80 w-1/3 '> 
            <img src="/Image/pic20.webp" alt="" className='pic4 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold text-center py-3'>SAGARMATHA</h1>
            </div>   
            <div className='h-80 w-1/3'> 
            <img src="/Image/pic21.jpeg" alt="" className='pic7 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold text-center py-3'>DUBAI</h1>
            </div> 
            <div className='h-80 w-1/3'> 
            <img src="/Image/pic25.webp" alt="" className='pic8 w-full h-full rounded-xl'/>
                  
            <h1 className='text-xl font-bold text-center py-3'>GREECE</h1>
            </div> 
            </div> */}




        </div>
    
    </>
  )
}

export default Gallery