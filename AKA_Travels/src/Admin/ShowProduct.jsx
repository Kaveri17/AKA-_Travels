import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { isAuthenticated } from '../auth/authindex'
import axios from 'axios'
import { API } from '../config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const ShowProduct = () => {
  const {token}=isAuthenticated()
  const[products,setProducts]=useState([])
  useEffect(()=>{
    axios.get(`${API}/getproductlist`)
    .then(res=>{
      setProducts(res.data)
    })
    .catch(err=>console.log(err))
  },[])

  // delete Product
  const deleteProduct=id=>{
    const confirmed=window.confirm('Are you sure you want to delete this product?') 

    if(confirmed){
        axios.delete(`${API}/deleteproduct/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(res=>{
            toast.success("Product Deleted")
            setProducts(products.filter(item=>item._id!==id))
        })
        .catch(err=>{
            toast.error("Failed to delete product")
        })
    }

}
  return (
    <>
    <ToastContainer position="top-right" theme="colored"/>
    <div className="container py-32">
        <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <table className="table table-bordered table-striped shadow">
                          <thead>
                              <tr>
                                  <th>Product Title</th>                       
              
                                  <th>Product Location</th>
                                  <th>Accomodation</th>
                                  <th>Maximum Altitude</th>
                                  <th>Best Season</th>
                                 {/* <th>Category</th> */}
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {products && products.map((product,i)=>(
                                  <tr key={i}>
                                      <td>{product.product_title}</td>
                                      <td>{product.product_location}</td>
                                      <td>{product.accomodation}</td>
                                      <td>{product.maximum_altitude}</td>
                                      <td>{product.best_season}</td>
                                      
                                      {/* <td>{product.category.category_name}</td> */}
                                      <td>
                                          <Link to={`/admin/updateproduct/${product._id}`} className='btn btn-primary'><FaEdit/></Link>
                                          <button className='btn btn-danger'onClick={()=>deleteProduct(product._id)} ><FaTrash/></button>
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

export default ShowProduct