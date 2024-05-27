
import React, { useEffect, useState } from 'react'
import { API } from '../config';
import { useParams } from 'react-router-dom';


const UpdateGallery = () => {
    const { id } = useParams()
    console.log(id)
    
    const [image_title, setGalleryName] = useState('');
    const [gallery_image, setGalleryImage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // axios.get(`${API}/getgallerydetails/${id}`)
        fetch(`${API}/getgallerydetails/${id}`,{
            method:"GET",
        })
        .then(res => res.json())
            .then(res => {
                setGalleryName(res.image_title);
               
                setGalleryImage(res.image);
            })
            .catch(err => console.log(err));
    },[id]);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // try {
            const formdata = new FormData;
            console.log("before n:",image_title)
            formdata.append('image_title', image_title);
            console.log("after n:",formdata)

            formdata.append('gallery_image', gallery_image);
          

           

            // await axios.put(`${API}/updategallery/${id}`, formdata);
            fetch(`${API}/updategallery/${id}`,{
                method: 'PUT',
            body: formdata
            })
            .then(res => res.json())
            .then (data => {
                if (data.error){
                    setError(data.error);
                    setSuccess(false);
                }
                else{
                    setSuccess(true);
                    setError('');
                    console.log("Updated",data)
                }
            })
            .catch(err => console.log(err));
            
    };
    
   
    // Show error message
    const showError = () => error && <div className='alert alert-danger'>{error}</div>;

    // Show success message
    const showSuccess = () => success && <div className='alert alert-success'>Gallery has been updated successfully.</div>;

  return (
    <div>

<div className="container py-32">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <form className="shadow p-3">
                    {showError()}
                    {showSuccess()}
                        <h3 className='text-center'>Update Gallery</h3>
                        <div className="mb-2">
                            <label htmlFor="image_title">Gallery Name</label>
                            <input type="text" name="image_title" id="image_title" className='form-control'  value={image_title}
                                    onChange={(e) => setGalleryName(e.target.value)}
                             />
                        </div>
                    <div className="mb-2">
                                <label htmlFor="gallery_image">Gallery Image</label>
                                <input
                                    type="file"
                                    name="gallery_image"
                                    id="gallery_image"
                                    className='form-control'
                                    onChange={(e) => setGalleryImage(e.target.files[0])}
                                />
                                </div>

                        
                        
                                <button type="submit" className="btn btn-primary text-gray-700" onClick={handleSubmit}>Update Gallery</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateGallery
