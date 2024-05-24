import React, { useState } from 'react';
import { isAuthenticated } from '../auth/authindex';
import { API } from '../config'; 

const AddPopular = () => {
    const [popular_name, setPopular_name] = useState('');
    const [description, setDescription] = useState('');
    const [popular_image, setPopular_image] = useState(null); // State to store the selected image
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Destructuring token
    const { token } = isAuthenticated();
    console.log(token)

    const handleSubmit = e => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        const formData = new FormData();
        formData.append('popular_name', popular_name);
        formData.append('description', description);
        formData.append('popular_image', popular_image); // Append the selected image to the FormData

        fetch(`${API}/addpopular/`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData 
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setError(data.error);
                setSuccess(false);
            } else {
                setError('');
                setSuccess(true);
                setPopular_name('');
                setDescription('');
                setPopular_image(null); // Reset the selected image
            }
        })
        .catch(err => console.log(err));
    }

    // Handle image change
    const handleImageChange = e => {
        setPopular_image(e.target.files[0]); // Set the selected image to state
    }

    // To show error message
    const showError = () => (
        error && <div className='alert alert-danger'>{error}</div>
    );

    // To show success message
    const showSuccess = () => (
        success && <div className='alert alert-success'>Popular has been added successfully.</div>
    );

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <form className="shadow p-3">
                            {showError()}
                            {showSuccess()}
                            <h2 className='text-center'>Add Popular</h2>
                            <div className="mb-2">
                                <label htmlFor="popular">Popular Name</label>
                                <input type="text" name="popular" id="popular" className='form-control' value={popular_name} onChange={e => setPopular_name(e.target.value)} />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="description">Description</label>
                                <input type="text" name="description" id="description" className='form-control' value={description} onChange={e => setDescription(e.target.value)} />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="popular_image">Popular Image</label>
                                <input type="file" name="popular_image" id="popular_image" className='form-control' onChange={handleImageChange} />
                            </div>
                            
                            <div className="mb-2">
                                <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddPopular;
