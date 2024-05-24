import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth/authindex'
import axios from 'axios'
import { API } from '../config'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const ShowPopular = () => {
    // destructuring token for future use
    const {token}=isAuthenticated()
    const [populars,setPopulars]=useState([])

    useEffect(()=>{
        axios.get(`${API}/getpopularlist`)
        .then(res=>{
            console.log(res.data)
            setPopulars(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    // removing populars
    const deletePopular=id=>{
        const confirmed=window.confirm('Are you sure you want to delete this category?') 

        if(confirmed){
            axios.delete(`${API}/deletepopular/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            .then(res=>{
                toast.success("Popular Deleted")
                setCategories(categories.filter(c=>c._id!==id))
            })
            .catch(err=>{
                toast.error("Failed to delete category")
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
                                <th>Popular Name</th>
                                {/* <th>Description</th> */}
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {populars && populars.map((popular,i)=>(
                                <tr key={i}>
                                    <td>{popular.popular_name}</td>
                                    {/* <td>{popular.description}</td> */}
                                    <td>
                                        <img src={`${API}/${popular.popular_image}`} 
                                        alt={popular.popular_image} width={'100'}/>
                                          
                                      </td>
                                    <td>
                                  <Link to={`/admin/updatepopular/${popular._id}`} className='btn btn-primary'><FaEdit/></Link>

                                        <button className='btn btn-danger'onClick={()=>deletePopular(popular._id)} ><FaTrash/></button>
                                     
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

export default ShowPopular