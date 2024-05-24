import React from 'react'

const UpdateGallery = () => {
  return (
    <div>

<div className="container py-32">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <form className="shadow p-3">
                       
                        <h3 className='text-center'>Update Gallery</h3>
                        <div className="mb-2">
                            <label htmlFor="gallery_name">Gallery Name</label>
                            <input type="text" name="gallery_name" id="gallery_name" className='form-control' 
                             />
                        </div>
                    <div className="mb-2">
                                <label htmlFor="gallery_image">Gallery Image</label>
                                <input
                                    type="file"
                                    name="gallery_image"
                                    id="gallery_image"
                                    className='form-control'
                                   
                                />
                                </div>

                        
                        
                         <button type="submit" className="btn btn-primary text-gray-700">Update Gallery</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateGallery