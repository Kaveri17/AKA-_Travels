import React, { useState } from 'react';
import { isAuthenticated } from '../auth/authindex';
import { API } from '../config'; 
import { useParams } from 'react-router-dom';

const AddItenary = () => {
    const [days, setDays] = useState('');
    const [day_title, setDay_title] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Destructuring token
    const { token } = isAuthenticated();
    console.log(token)
    const{id} = useParams();

    const handleSubmit = e => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        // const formData = new FormData;
        // formData.set('days', days);
        // formData.set('daytitle', day_title);
        

        fetch(`${API}/additenary/${id}`, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
                // Authorization: `Bearer ${token}`
            },
            // body: formData 
            body: JSON.stringify({days, day_title}) 
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setError(data.error);
                setSuccess(false);
            } else {
                setError('');
                setSuccess(true);
                setDays('');
                setDay_title('');
                console.log(data);
                
            }
        })
        .catch(err => console.log(err));
    }
    // To show error message
    const showError = () => (
        error && <div className='alert alert-danger'>{error}</div>
    );

    // To show success message
    const showSuccess = () => (
        success && <div className='alert alert-success'>Itenary has been added successfully.</div>
    );

    return (
        <>
            <div className="container py-32">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <form className="shadow p-3">
                            {showError()}
                            {showSuccess()}
                            <h2 className='text-center'>Add Itenary</h2>
                            <div className="mb-2">
                                <label htmlFor="days">Days</label>
                                <input type="text" name="days" id="days" className='form-control' value={days} onChange={e => setDays(e.target.value)} />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="daytitle">Day Title</label>
                                <input type="text" name="daytitle" id="daytitle" className='form-control' value={day_title} onChange={e => setDay_title(e.target.value)} />
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

export default AddItenary;
