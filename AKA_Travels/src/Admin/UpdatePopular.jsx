
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../config';
import { isAuthenticated } from '../auth/authindex';

const UpdatePopular = () => {
    const params = useParams();
    console.log(params)
    const { token } = isAuthenticated();
    const id = params.id;

    // State variables
    const [popular_name, setPopularName] = useState('');
    const [description, setDescription] = useState('');
    const [popular_image, setPopularImage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Fetch category data based on ID
    useEffect(() => {
        axios.get(`${API}/getpopulardetails/${id}`)
            .then(res => {
                setPopularName(res.data.popular_name);
                setDescription(res.data.description);
                setPopularImage(res.data.popular_image);
            })
            .catch(err => console.log(err));
    }, []);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('popular_name', popular_name);
            formData.append('description', description);
            formData.append('popular_image', popular_image);

            const config = {
                headers: {
                    "Content-Type": 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            };

            await axios.put(`${API}/updatepopular/${id}`, formData, config);
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
                            <h3 className='text-center'>Update Popular Form</h3>
                            <div className="mb-2">
                                <label htmlFor="category">Popular Name</label>
                                <input
                                    type="text"
                                    name="popular"
                                    id="popular"
                                    className='form-control'
                                    value={popular_name}
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
                                <label htmlFor="popular_image">Popular Image</label>
                                <input
                                    type="file"
                                    name="popular_image"
                                    id="popular_image"
                                    className='form-control'
                                    onChange={(e) => setPopularImage(e.target.files[0])}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary text-gray-700" onClick={handleSubmit}>Update Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdatePopular;
