import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getallmessage } from '../api/Submitsend'

const AdminMessage = () => {
  let [message, setMessage] = useState([])
  useEffect(()=> {
    getallmessage().then((data) => {
      if(data.error) {
        console.log(data.error);

      }
      else{
        console.log(data)
        setMessage(data.reverse())
      }
    });

  }, [])
  return (
    <div>
      <h1 className='font-bold text-5xl ps-11 py-12 '>Messages</h1>
      {message.map((mess) => {
        return(
          <div key={mess._id} className='w-1/5 ps-10 pb-4 '>
      <Link to={`/messageview/${mess._id}`}className=''>
        <h1 className='font-bold w-1/5'>{mess.contact_fname}</h1>
       <h1 className='font-bold w-1/5'>{mess.contact_lname}</h1>
       <h1>{mess.contact_email}</h1>
       <h1>{mess.contact_phoneno}</h1>
       <p className=' font-semibold '>{mess.contact_message}</p>

      </Link>
      <hr/>
      </div>
        )
      })}
    </div>
  )
}

export default AdminMessage