import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth/authindex'
import axios from 'axios'
import { API } from '../config'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const ShowCategory = () => {
    // destructuring token for future use
    const {token}=isAuthenticated()
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        axios.get(`${API}/getcategorylist`)
        .then(res=>{
            console.log(res.data)
            setCategories(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    // removing categories
    const deleteCategory=id=>{
        const confirmed=window.confirm('Are you sure you want to delete this category?') 

        if(confirmed){
            axios.delete(`${API}/deletecategory/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            .then(res=>{
                toast.success("Category Deleted")
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
                                <th>Category Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories && categories.map((category,i)=>(
                                <tr key={i}>
                                    <td>{category.category_name}</td>
                                    <td>{category.description}</td>
                                    <td>
                                        <img src={`${API}/${category.image}`} 
                                        alt={category.category_image} width={'100'}/>
                                          
                                      </td>
                                    <td>
                                  <Link to={`/admin/updatecategory/${category._id}`} className='btn btn-primary'><FaEdit/></Link>

                                        <button className='btn btn-danger'onClick={()=>deleteCategory(category._id)} ><FaTrash/></button>
                                     
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

export default ShowCategory