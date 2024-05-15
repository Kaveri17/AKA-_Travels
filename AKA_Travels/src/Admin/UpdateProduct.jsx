import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API } from '../config'
import { isAuthenticated } from '../auth/authindex'

const UpdateProduct = () => {
    const params=useParams()
    console.log(params)
    const {token} = isAuthenticated()
    const id=params.productId

    const [initialValue,setInitialValue]=useState([])
    const [categories,setCategories]=useState([])
    const [product_title,setProductTitle]=useState('')
    const [product_location,setProductLocation]=useState('')
    const [accomodation,setAccomodation]=useState('')
    const [maximum_altitude,setMaximumAltitude]=useState('')
    const [best_season,setBestSeason]=useState('')
    
    const [categoryId,setCategoryId]=useState('')

    const [error,setError]=useState('')
    const [success,setSuccess]=useState(false)




   

    useEffect(()=>{
        axios.get(`${API}/getcategorylist`)
        .then(res=>{
            setCategories(res.data)
        })
        .catch(err=>console.log(err))

        axios.get(`${API}/getproductdetails/${id}`)
        .then(res=>{
            setInitialValue(res.data)
            setProductTitle(res.data.product_title)
            setProductLocation(res.data.product_location)
            setAccomodation(res.data.accomodation)
            setMaximumAltitude(res.data.maximum_altitude)
            setBestSeason(res.data.best_season)
           
            setCategoryId(res.data.category._id)
        })
        .catch(err=>console.log(err))
    },[])

    // handle submit
    const handleSubmit=async(event)=>{
        event.preventDefault()

        try{
            const formData=new FormData()
           formData.append('product_title',product_title)
            formData.append('product_location',product_location)
            formData.append('accomodation',accomodation)
            formData.append('maximum_altitude',maximum_altitude)
            formData.append('best_season',best_season)
           
          
           
            formData.append('category',categoryId)

            const config={
                headers:{
                    "Content-Type":'multipart/form-data',
                    Authorization:`Bearer ${token}`
                }
            }

            const response=await axios.put(
                `${API}/updateproduct/${id}`,
                formData,
                config
            )
            setSuccess(true)
            setError('')
        }
        catch(err){
            setError(err.response.data.error)
            setSuccess(false)
        }
    }

    // to show error message
    const showError=()=>(
        error && <div className='alert alert-danger'>{error}</div>
    )

    // to show success message
    const showSuccess=()=>(
        success && <div className='alert alert-success'>
           Product has been added successfully.
        </div>
    )

    return (
        <>
             <div className="container py-32">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <form className="shadow p-3">
                        {showError()}
                        {showSuccess()}
                        <h3 className='text-center'>Update Product Form</h3>
                        <div className="mb-2">
                            <label htmlFor="ptitle">Product Title</label>
                            <input type="text" name="ptitle" id="ptitle" className='form-control' 
                            value={product_title}   onChange={e=>setProductTitle(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="pname">Product Location</label>
                            <input type="text" name="price" id="price" className='form-control' 
                            value={product_location}  onChange={e=>setProductLocation(e.target.value)}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="accomodation">Accomodation</label>
                            <input type="text" name="accomodation" id="stock" className='form-control' 
                            value={accomodation}  onChange={e=>setAccomodation(e.target.value)}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="maxaltitude">Maximum Altitude</label>
                            <input type="text" name="maxaltitude" id="maxaltitude" className='form-control' 
                            value={maximum_altitude}  onChange={e=>setMaximumAltitude(e.target.value)}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="bestseason">Best Season</label>
                            <input type="text" name="bestseason" id="bestseason" className='form-control' 
                            value={best_season}  onChange={e=>setBestSeason(e.target.value)}/>
                        </div>

                      
                        
                        <div className="mb-2">
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category" className='form-control' 
                                onChange={e=>setCategoryId(e.target.value)}>
                                    <option value={categoryId}>
                                        {initialValue.category && initialValue.category.category_name}
                                    </option>
                                    {categories && categories.map((c,i)=>(
                                        <option value={c.category._id} key={i}>
                                            {c.category_name}
                                        </option>
                                   
                                    ))}

                            </select>
                        </div>
                        
                         <button type="submit" className="btn btn-primary text-gray-700">Update Product</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default UpdateProduct