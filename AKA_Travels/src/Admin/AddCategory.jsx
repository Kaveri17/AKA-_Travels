import React, { useState } from 'react'
import { isAuthenticated } from '../auth/authindex'
import { API } from '../config'

const AddCategory = () => {
    const [category_name,setCategory_name]=useState('')
    const [error,setError]=useState('')
    const[success,setSuccess]=useState(false)

    // destructuring token
    const {token}=isAuthenticated()

    const handleSubmit=e=>{
        e.preventDefault()
        setError('')
        setSuccess(false) 

        // request to post category
        fetch(`${API}/postcategory/`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                "Content-Type":'application/json',
                Authorization:`Bearer ${token}`
            },
            body:JSON.stringify({category_name}),
            // body:JSON.stringify({description}),
            // body:JSON.stringify({image})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setError('')
                setSuccess(true)
                setCategory_name('')
                setDescription('')
            }
        })
    }

     // to show error message
     const showError=()=>(
        error && <div className='alert alert-danger'>{error}</div>
    )

    // to show success message
    const showSuccess=()=>(
        success && <div className='alert alert-success'>Category has been added successfully.</div>
    )


  return (
    <>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <form className="shadow p-3">
                        {showError()}
                        {showSuccess()}
                        <h2 className='text-center'>Add Category</h2>
                        <div className="mb-2">
                            <label htmlFor="category">Category Name</label>
                            <input type="text" name="category" id="category" className='form-control' value={category_name} onChange={e=>setCategory_name(e.target.value)} />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" id="description" className='form-control' value={description} onChange={e=>description(e.target.value)} />
                        </div>


                        <div className="mb-2">
                            <label htmlFor="category_image">Category Image</label>
                            <input type="file" name="category_image" id="category_image" className='form-control' 
                            onChange={handleImageChange}/>
                        </div>
                        <div className="mb-2">
                            <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
                        </div>


                        <div className="mb-2">
                            <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddCategory