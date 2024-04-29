import React, { useState } from 'react';
import { isAuthenticated } from '../auth/authindex';
import { API } from '../config'; 

const AddCategory = () => {
    const [category_name, setCategory_name] = useState('');
    const [description, setDescription] = useState('');
    const [category_image, setCategory_image] = useState(null); // State to store the selected image
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Destructuring token
    const { token } = isAuthenticated();

    const handleSubmit = e => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        const formData = new FormData();
        formData.append('category_name', category_name);
        formData.append('description', description);
        formData.append('category_image', category_image); // Append the selected image to the FormData

        fetch(`${API}/postcategory/`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData // Send FormData object instead of JSON
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setError(data.error);
                setSuccess(false);
            } else {
                setError('');
                setSuccess(true);
                setCategory_name('');
                setDescription('');
                setCategory_image(null); // Reset the selected image
            }
        })
        .catch(err => console.log(err));
    }

    // Handle image change
    const handleImageChange = e => {
        setCategory_image(e.target.files[0]); // Set the selected image to state
    }

    // To show error message
    const showError = () => (
        error && <div className='alert alert-danger'>{error}</div>
    );

    // To show success message
    const showSuccess = () => (
        success && <div className='alert alert-success'>Category has been added successfully.</div>
    );

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
                                <input type="text" name="category" id="category" className='form-control' value={category_name} onChange={e => setCategory_name(e.target.value)} />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="description">Description</label>
                                <input type="text" name="description" id="description" className='form-control' value={description} onChange={e => setDescription(e.target.value)} />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="category_image">Category Image</label>
                                <input type="file" name="category_image" id="category_image" className='form-control' onChange={handleImageChange} />
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

export default AddCategory;
