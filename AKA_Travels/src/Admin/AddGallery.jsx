import React, { useState } from 'react'
import { API } from '../config';
// import { isAuthenticate } from '../api/Userapp';



const AddGallery = () => {
    const [gallery, setGallery] = useState({
        image_title: "",
        formdata: new FormData
    })
    // const [gallery_name, setGallery_name] = useState('')
    // const [gallery_image, setGallery_image] = useState(null)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // // Destructuring token
    // const { token } = isAuthenticate();
    // console.log(token)

    let { image_title, formdata } = gallery

    const handleSubmit = event => {
        event.preventDefault()
        setError('')
        setSuccess(false)


        // const formData = new FormData;
        formdata.append('image_title', image_title);
        // formData.append('gallery_image', gallery_image);

        fetch(`${API}/addimage`, {
            method: 'POST',
            // headers: {
            //     Authorization: `Bearer ${token}`
            // },
            body: formdata
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                    setSuccess(false);
                } else {
                    setError('');
                    setSuccess(true);
                    setGallery({ image_title: '', formdata: new FormData })
                    alert("Image uploaded")
                    // setGallery_name('');
                    // setGallery_image(null);
                }
            })
            .catch(err => console.log(err));

    }
    // Handle image change
    const handleImageChange = e => {
        // setGallery_image(e.target.files[0]);
        formdata.set("gallery_image", e.target.files[0])
    }

    // To show error message
    const showError = () => {
        error && <div className='alert alert-danger'>{error}</div>
    }

    // To show success message
    const showSuccess = () => {
        success && <div className='alert alert-success'>Image has been added successfully.</div>
    }

    return (
        <div>
            <form>
                {showError()}
                {showSuccess()}
                <div className="container w-1/3 pt-4">
                    <h1>Add Gallery</h1>
                    <div className='pb-2'>
                        <label htmlFor='image_title'>Gallery Name</label>
                        <input type='text' name='image_title' id='image_title' className='form-control' value={image_title} onChange={e => setGallery({ ...gallery, "image_title": e.target.value})} />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor='gallery_image'>Gallery Image</label>
                        <input type='file' name='gallery_image' id='gallery_image' className='form-control' onChange={handleImageChange} />
                    </div>
                    <div className="pb-2">
                        <button className="btn btn-primary " onClick={handleSubmit}>Add</button>
                    </div>



                </div>
            </form>
        </div>
    )
}

export default AddGallery