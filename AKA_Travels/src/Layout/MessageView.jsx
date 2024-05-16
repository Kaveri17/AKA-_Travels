import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getmessage } from '../api/Submitsend'


const MessageView = () => {
    const { id } = useParams()
    let [message, setMessage] = useState(null)

  
  // To fetch the message
  useEffect(() => {
    getmessage(id)
    .then((data) => {
          console.log("data message",data); // Log the response data
        if (data?.error) {
          console.log(data.error);
        } else {
          console.log(data);
          setMessage(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching message:', error);
      });
  }, [id]);
  
  return (
    <div className='w-11/12 m-auto'>
    <div className='pt-12'>
        {message && ( // Check if message is not null before accessing its properties
            <>
                <h1 className='font-semi-bold text-2xl'>
                    <span className='text-xl font-bold'>From:</span> {message.contact_fname}
                </h1>
                <h1 className='font-semibold'>
                    <span className='font-semibold text-lg'>To:</span> AKA Travels
                </h1>
                <h1 className=''>
                    <span className='font-semibold text-lg'>Email:</span> {message.contact_email}
                </h1>
                <h1 className='pb-3'>
                    <span className='font-semibold text-lg'>Phoneno:</span> {message.contact_phoneno}  
                </h1>
                <hr />
                <h1 className=''>Message: {message.contact_message}</h1>
            </>
        )}
    </div>
</div>
);
};
  


export default MessageView