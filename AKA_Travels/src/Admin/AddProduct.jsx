import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth/authindex'
import axios from 'axios'
import { API } from '../config'


const AddProduct = () => {
    const {token}=isAuthenticated()
    const[categories,setCategories]=useState([])
    const[productData,setProductData]=useState({
        product_title:'',
        product_location:'',
        accomodation:'',
        maximum_altitude:'',
        best_season:'',
        departure_city:'',
        transportation:'',
        tour_availability:'',
        language:'',
        wifi:'',
        minimum_age:'',
        maximum_age:'',
        meals:'',
        overview:'',
        highlights:'',
        product_image:'',
        cost:'',
        price:'',
        product_people:'',
        strike:'',
        day:'',
        category:'',
        itenary:{
            days,
            day_title
        }
    })

    // fetch categories 
    useEffect(()=>{
        axios.get(`${API}/allcategory`)
        .then(res=>{
            setCategories(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    // destructring productData 
    const{
      product_title,
        product_location,
        accomodation,
        maximum_altitude,
        best_season,
        departure_city,
        transportation,
        tour_availability,
        language,
        wifi,
        minimum_age,
        maximum_age,
        meals,
        overview,
        highlights,
        product_image,
        cost,
        price,
        product_people,
        strike,
        day,
        category,
        itenary: {
            days,
            day_title
        }
        
    } =productData

    const[error,setError]=useState('')
    const[success,setSuccess]=useState(false)

    const handleChange=name=>event=>{
        setProductData({
            ...productData,
            error:false,
            [name]:event.target.value
        })
    }

   

    const handleSubmit=async event=>{
        event.preventDefault()

        // passing form data instead of json
        try{
            const formData=new FormData()
            formData.append('product_title',product_title)
            formData.append('product_location',product_location)
            formData.append('accomodation',accomodation)
            formData.append('maximum_altitude',maximum_altitude)
            formData.append('best_season',best_season)
            formData.append('departure_city',departure_city)
            
            formData.append('transportation',transportation)
            
            formData.append('tour_availability',tour_availability)
            
            formData.append('language',language)
            
            formData.append('wifi',wifi)
            
            formData.append('minimum_age',minimum_age)
            formData.append('maximum_age',maximum_age)
            formData.append('meals',meals)
            formData.append('overview',overview)
            formData.append('highlights',highlights)
            formData.append('product_image',product_image)
            formData.append('cost',cost)
            formData.append('price',price)
            formData.append('product_people',product_people)
           
            formData.append('strike',strike)
            formData.append('day',day)
           
           
           
           
            formData.append('category',category)
            // formData.append('itenary',itenary)
            formData.append('itenary[days]', itenary.days); // Append days
            formData.append('itenary[day_title]', itenary.day_title); // Append day_title
        

            const config={
                headers:{
                    "Content-Type":'application/json',
                    Authorization:`Bearer ${token}`
                }
            }

            const response=await axios.post(`${API}/postproduct`,formData,config)
            setSuccess(true)
            setError('')
            setProductData({
              product_title,
              product_location,
              accomodation,
              maximum_altitude,
              best_season,
              departure_city,
              transportation,
              tour_availability,
              language,
              wifi,
              minimum_age,
              maximum_age,
              meals,
              overview,
              highlights,
              product_image,
              cost,
              price,
              product_people,
              strike,
              day,
              category,
              itenary:{
                days,
                day_title
              }
              
            })
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
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <form className="shadow p-3">
                        {showError()}
                        {showSuccess()}
                        <h3 className='text-center'>Add Product Form</h3>
                        <div className="mb-2">
                            <label htmlFor="ptitle">Product Title</label>
                            <input type="text" name="ptitle" id="ptitle" className='form-control' 
                            value={product_title} onChange={handleChange('product_title')}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="pname">Product Location</label>
                            <input type="text" name="price" id="price" className='form-control' 
                            value={product_location} onChange={handleChange('product_location')}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="accomodation">Accomodation</label>
                            <input type="text" name="accomodation" id="stock" className='form-control' 
                            value={accomodation} onChange={handleChange('accomodation')}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="maxaltitude">Maximum Altitude</label>
                            <input type="text" name="maxaltitude" id="maxaltitude" className='form-control' 
                            value={maximum_altitude} onChange={handleChange('maximum_altitude')}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="bestseason">Best Season</label>
                            <input type="text" name="bestseason" id="bestseason" className='form-control' 
                            value={best_season} onChange={handleChange('best_season')}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="deptcity">Deaparture City</label>
                            <input type="text" name="deptcity" id="deptcity" className='form-control' 
                            value={departure_city} onChange={handleChange('departure_city')}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="trans">Transportation</label>
                            <input type="text" name="trans" id="trans" className='form-control' 
                            value={transportation} onChange={handleChange('transportation')}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="availability">Tour Availability</label>
                            <input type="text" name="availability" id="availability" className='form-control' 
                            value={tour_availability} onChange={handleChange('tour_availability')}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="language">Language</label>
                            <input type="text" name="language" id="language" className='form-control' 
                            value={language} onChange={handleChange('language')}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="wifi">Wifi</label>
                            <input type="text" name="wifi" id="wifi" className='form-control' 
                            value={wifi} onChange={handleChange('wifi')}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="minage">Minimum Age</label>
                            <input type="text" name="minage" id="minage" className='form-control' 
                            value={minimum_age} onChange={handleChange('minimum_age')}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="maxage">Maximum Age</label>
                            <input type="text" name="maxage" id="ptitle" className='form-control' 
                            value={maximum_age} onChange={handleChange('maximum_age')}/>
                        </div>



                        <div className="mb-2">
                            <label htmlFor="meals">Meals</label>
                            <input type="text" name="meals" id="meals" className='form-control' 
                            value={meals} onChange={handleChange('meals')}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="overview">Overview</label>
                            <input type="text" name="overview" id="overview" className='form-control' 
                            value={overview} onChange={handleChange('overview')}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="highlights">Highlights</label>
                            <input type="text" name="highlights" id="highlights" className='form-control' 
                            value={highlights} onChange={handleChange('highlights')}/>
                        </div>
                        <div className="mb-2">
                                <label htmlFor="category_image">Category Image</label>
                                <input type="file" name="category_image" id="category_image" className='form-control' onChange={handleImageChange} />
                            </div>








                        <div className="mb-2">
                            <label htmlFor="cost">Cost</label>
                            <input type="text" name="cost" id="cost" className='form-control' 
                            value={cost} onChange={handleChange('cost')}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="price">Price</label>
                            <input type="text" name="price" id="price" className='form-control' 
                            value={price} onChange={handleChange('price')}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="ppeople">Product People</label>
                            <input type="text" name="ppeople" id="ppeople" className='form-control' 
                            value={product_people} onChange={handleChange('ppeople')}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="strike">Strike</label>
                            <input type="text" name="strike" id="strike" className='form-control' 
                            value={strike} onChange={handleChange('strike')}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="day">Day</label>
                            <input type="text" name="day" id="day" className='form-control' 
                            value={day} onChange={handleChange('day')}/>
                        </div>


                        <div className="mb-2">
                    <label htmlFor="days">Days</label>
                    <input type="text" name="days" id="days" className='form-control' 
                    value={days} onChange={handleChange('itenary')} />
                </div>

                <div className="mb-2">
                    <label htmlFor="day_title">Day Title</label>
                    <input type="text" name="day_title" id="day_title" className='form-control' 
                    value={day_title} onChange={handleChange('itenary')} />
                </div>

                    




                        <div className="mb-2">
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category" className='form-control' 
                                onChange={handleChange('category')}>
                                    <option>--- Select Category ---</option>
                                    {categories && categories.map((c,i)=>(
                                        <option value={c._id} key={i}>{c.category_name}</option>,
                                        <option value={c._id} key={i}>{c.description}</option>
                                    ))}
                            </select>
                        </div>

                       



                        
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddProduct