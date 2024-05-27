import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import { API } from '../config'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowGallery = () => {
     // destructuring token for future use
     
     const [gallery, setGallery]=useState([])
 
     useEffect(()=>{
         axios.get(`${API}/getgallery`)
         .then(res=>{
             console.log(res.data)
             setGallery(res.data)

         })
         .catch(err=>console.log(err))
     },[])
 
     // removing
     const deleteGallery=id=>{
         const confirmed=window.confirm('Are you sure you want to delete this gallery?') 
 
         if(confirmed){
             axios.delete(`${API}/deletegallery/${id}`,{
                 
             })
             .then(res=>{
                 toast.success("Gallery Deleted")
                 setGallery(gallery.filter(c=>c._id!==id))
             })
             .catch(err=>{
                 toast.error("Failed to delete gallery")
             })
         }
 
     } 
     
  return (
    <>
    <ToastContainer position="top-right" theme="colored"/>
    <div className="container py-32">
        <div className="row d-flex justify-content-center">
            <div className="col-md-5">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Gallery Name</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {gallery.length > 0 && gallery.map((gallery,i)=>(
                                <tr key={i}>
                                <td>{gallery. image_title}</td>
                                
                                <td>
                                    <img src={`${API}/${gallery.image}`}
                                    alt='' width={'100'}/>
                                      
                                  </td>
                                <td>
                                <Link to={`/admin/updategallery/${gallery._id}`} className='btn btn-primary'><FaEdit/></Link>

                                    <button className='btn btn-danger 'onClick={()=>deleteGallery(gallery._id)}><FaTrash/></button>
                                 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</>
  )
}

export default ShowGallery