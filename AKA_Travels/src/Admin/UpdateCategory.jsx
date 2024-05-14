
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../config';
import { isAuthenticated } from '../auth/authindex';

const UpdateCategory = () => {
    const params = useParams();
    console.log(params)
    const { token } = isAuthenticated();
    const id = params.id;

    // State variables
    const [category_name, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [category_image, setCategoryImage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Fetch category data based on ID
    useEffect(() => {
        axios.get(`${API}/getcategorydetails/${id}`)
            .then(res => {
                setCategoryName(res.data.category_name);
                setDescription(res.data.description);
                setCategoryImage(res.data.category_image);
            })
            .catch(err => console.log(err));
    }, []);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('category_name', category_name);
            formData.append('description', description);
            formData.append('category_image', category_image);

            const config = {
                headers: {
                    "Content-Type": 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            };

            await axios.put(`${API}/updatecategory/${id}`, formData, config);
            setSuccess(true);
            setError('');
        } catch (err) {
            setError(err.response.data.error);
            setSuccess(false);
        }
    };

    // Show error message
    const showError = () => error && <div className='alert alert-danger'>{error}</div>;

    // Show success message
    const showSuccess = () => success && <div className='alert alert-success'>Category has been updated successfully.</div>;

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <form className="shadow p-3" onSubmit={handleSubmit}>
                            {showError()}
                            {showSuccess()}
                            <h3 className='text-center'>Update Category Form</h3>
                            <div className="mb-2">
                                <label htmlFor="category">Category Name</label>
                                <input
                                    type="text"
                                    name="category"
                                    id="category"
                                    className='form-control'
                                    value={category_name}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    id="description"
                                    className='form-control'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="category_image">Category Image</label>
                                <input
                                    type="file"
                                    name="category_image"
                                    id="category_image"
                                    className='form-control'
                                    onChange={(e) => setCategoryImage(e.target.files[0])}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary text-gray-700">Update Category</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateCategory;
