import React, { useEffect, useState } from 'react'
import { getGallery } from '../api/Gallapp'
import { API } from '../config'

const AdminGallery = () => {
  let [gallery, setGallery] = useState([])
  useEffect(()=> {
    getGallery()
    .then((data) => {
    if(data.error) {
      console.log(data.error)
    }
    else{
      console.log(data)
      setGallery(data.reverse())
    }
    })
  })
  return (
    <div>
      <h1 className='font-bold text-5xl ps-11 py-12'>GALLERY</h1>
      {gallery.map((gall) => {
return(
     
      <div key={gall._id}>
        <h1 className='font-bold w-1/5'>{gall.image_title}</h1>
        <img src={`${API}/${gall.image}`}alt="" />
    
<hr/>
      </div>
)
       })}
    </div>
  )
}

export default AdminGallery