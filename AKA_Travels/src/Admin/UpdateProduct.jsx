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
    const [departure_city,setDepartureCity]=useState('')
    const [transportation,setTransportation]=useState('')
    const [tour_availability,setTourAvailability]=useState('')
    const [language,setLanguage]=useState('')
    const [wifi,setWifi]=useState('')
    const [minimum_age,setMinimumAge]=useState('')
    const [maximum_age,setMaximumAge]=useState('')
    const [meals, setMeals] = useState('')

    const [overview,setOverview]=useState('')
    const [highlights,setHighlights]=useState('')
    const [itenary,setItenary]=useState('')


    // const [product_image,setProductImage]=useState(null)
    const [categoryId,setCategoryId]=useState('')

    const [error,setError]=useState('')
    const [success,setSuccess]=useState(false)




   

    useEffect(()=>{
        axios.get(`${API}/allcategory`)
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
            setDepartureCity(res.data.departure_city)
            setTransportation(res.data.transportation)
            setTourAvailability(res.data.tour_availability)
            setLanguage(res.data.language)
            setWifi(res.data.wifi)
            setMinimumAge(res.data.minimum_age)
            setMaximumAge(res.data.maximum_age)
            setMeals(res.data.meals)
            setOverview(res.data.overview)
            setHighlights(res.data.highlights)
            setItenary(res.data.itenary)
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
            formData.append('itenary',itenary)
           
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
                            <label htmlFor="deptcity">Deaparture City</label>
                            <input type="text" name="deptcity" id="deptcity" className='form-control' 
                            value={departure_city}  onChange={e=>setDepartureCity(e.target.value)}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="trans">Transportation</label>
                            <input type="text" name="trans" id="trans" className='form-control' 
                            value={transportation}  onChange={e=>setTransportation(e.target.value)}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="availability">Tour Availability</label>
                            <input type="text" name="availability" id="availability" className='form-control' 
                            value={tour_availability}  onChange={e=>setTourAvailability(e.target.value)}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="language">Language</label>
                            <input type="text" name="language" id="language" className='form-control' 
                            value={language}  onChange={e=>setLanguage(e.target.value)}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="wifi">Wifi</label>
                            <input type="text" name="wifi" id="wifi" className='form-control' 
                            value={wifi}  onChange={e=>setWifi(e.target.value)}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="minage">Minimum Age</label>
                            <input type="text" name="minage" id="minage" className='form-control' 
                            value={minimum_age}  onChange={e=>setMinimumAge(e.target.value)}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="maxage">Maximum Age</label>
                            <input type="text" name="maxage" id="ptitle" className='form-control' 
                            value={maximum_age}  onChange={e=>setMaximumAge(e.target.value)}/>
                        </div>



                        <div className="mb-2">
                            <label htmlFor="meals">Meals</label>
                            <input type="text" name="meals" id="meals" className='form-control' 
                            value={meals}  onChange={e=>setMeals(e.target.value)}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="overview">Overview</label>
                            <input type="text" name="overview" id="overview" className='form-control' 
                            value={overview}  onChange={e=>setOverview(e.target.value)}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="highlights">Highlights</label>
                            <input type="text" name="highlights" id="highlights" className='form-control' 
                            value={highlights}  onChange={e=>setHighlights(e.target.value)}/>
                        </div>
                        
                        <div className="mb-2">
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category" className='form-control' 
                                onChange={e=>setCategoryId(e.target.value)}>
                                    <option value={categoryId}>
                                        {initialValue.category && initialValue.category.category_name}
                                    </option>
                                    {categories && categories.map((c,i)=>(
                                        <option value={c._id} key={i}>
                                            {c.category_name}
                                        </option>
                                    //     <option value={c._id} key={i}>
                                    //     {c.description}
                                    // </option>
                                    ))}

                            </select>
                        </div>
                        {/* <div className="mb-2">
                            <label htmlFor="image">Product Image</label>
                            <input type="file" name="image" id="image" className='form-control' 
                            onChange={e=>setProductImage(e.target.files[0])}/>
                        </div> */}

                         <div className="mb-2">
                                <label htmlFor="product_image">Product Image</label>
                                <input
                                    type="file"
                                    name="product_image"
                                    id="product_image"
                                    className='form-control'
                                    onChange={(e) => setProductImage(e.target.files[0])}
                                />
                            </div>
                        <div className="mb-2">
                            <button className="btn btn-primary" onClick={handleSubmit}>Update Product</button>
                        </div>



                       
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default UpdateProduct