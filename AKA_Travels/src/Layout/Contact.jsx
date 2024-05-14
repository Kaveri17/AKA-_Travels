import React, { useState } from 'react'
import Header from './Header'
import './Blogs.css'
import { submitmessage } from '../api/Submitsend'

const Contact = () => {
  const [contact_fname, setContactFname] = useState('');
const [contact_lname, setContactLname] = useState('');
const [contact_email, setContactEmail] = useState('');
const [contact_phoneno, setContactPhoneno] = useState('');
const [contact_message, setContactMessage] = useState('');
  const [error, setError] = useState('')
  const[success, setSuccess] = useState(false)

  const handleSend = (event) => {
    event.preventDefault();
    submitmessage({ contact_fname, contact_lname, contact_email, contact_phoneno, contact_message })

    .then(data => {
      if(data.error){
        setError(data.error)
        setSuccess(false)

      }
      else{
        setError('')
        setSuccess(true)
     
        setContactFname('')
        setContactLname('')
        setContactEmail('')
        setContactMessage('')
        setContactPhoneno('')
      }
    })
    .catch(error => console.log(error))
  }
  const showError = () => {
    if(error){
      return <div className='font-bold text-red-300 text-lg text-center'>{error}</div>
    }
  }
  const showSuccess = () => {
    if(success){
        return <div className='text-green-500 text-xl font-bold text-center py-5'>"Message Sent"</div>
    }
}

  return (
    <>
   <div >
   <div className='w-5/6 mx-auto pb-14'>
    
    <div className='bg-orange-600 rounded-lg my-20 py-20 '>
        <div className='flex flex-wrap'>
            <div className=' w-full md:w-1/3 px-8 py-2'>
                <div className='bg-white h-full rounded-lg py-4 px-2'>

                    <div className='flex px-8'>
                    <i class=" add bi bi-geo-alt text-xl px-4 py-2 text-white "></i>
                  <h1 className='text-lg font-bold text-center md:text-xs lg:text-xl'> Address</h1>
                  
                  </div>

                  <p className='text-center'>27 Rodn St, Brklyn, East Houston </p>
                  <p className='text-center '>Street New York City</p>
                    
                  </div>                   
            </div>


            <div className='w-full md:w-1/3  px-8 py-2'>
                <div className='bg-white h-full rounded-lg py-4 px-2' >

                    <div className='flex px-8'>
                <i class=" add bi bi-person-lines-fill text-lg px-4 py-2 text-white"></i>
                  <h1 className='text-lg font-bold text-center md:text-xs lg:text-xl'> Contact</h1>
                  </div>

                  <p className='text-center'>Mobile: 123456789 </p>
                  <p className='text-center'>Hotline: 123456789</p>
                    
                  </div>
                    
                    
            </div>

            <div className='w-full md:w-1/3  px-8 py-2'>
                <div className='bg-white h-full rounded-lg py-4 px-2'>


                    <div className='flex px-8'>
                <i class="add bi bi-clock text-lg px-4 py-2 text-white"></i>
                  <h1 className='text-lg font-bold text-center md:text-xs lg:text-xl'> Office Hour</h1>

                  </div>
                  <p className='text-center'>Monday - Friday: 8:30 - 20:00</p>
                  <p className='text-center'>Saturday & Sunday: 9:30 - 21:30</p>
                    
                  </div>
                    
                    
            </div>




        </div>


       
    </div>



    <div className='bg-gray-200  h-full w-full'>
    
        <div className='text-orange-600 text-xl text-center py-12'>Contact Us</div>
        <div className='text-4xl text-center font-black '>GET IN TOUCH</div>
       <p className='text-center text-slate-500 py-2'> Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget<br/>consectetur sed, convgallis at tellus. Vestibulum ac diam sit.</p>

       {showError()}
      {showSuccess()}
<div class="m-3 flex flex-col sm:flex-row py-2 justify-center">
  <input type="text" placeholder="Enter Your First Name" value={contact_fname} class="w-full sm:w-2/5 bg-white mb-3 sm:mb-0 sm:me-3 py-3 px-4 sm:px-5 rounded-md" onChange={event =>setContactFname(event.target.value)} />
  <input type="text" placeholder="Enter Your Last Name" value={contact_lname} class="w-full sm:w-2/5 bg-white mb-3 sm:mb-0 sm:me-3 py-3 px-4 sm:px-5 rounded-md" onChange={event => setContactLname(event.target.value)} />
</div>

       

        <div className='m-3 flex  flex-col sm:flex-row py-2 justify-center'>
        {/* <input type="email" placeholder='Your Email'  className='w-1/2 bg-white py-3 me-3 px-5' />
        
         */}
          <input type="email" placeholder="Your Email" value={contact_email} name='contact_email' class="w-full sm:w-2/5  bg-white mb-3 sm:mb-0 sm:me-3 py-3 px-4 sm:px-5 rounded-md" onChange={event=>setContactEmail(event.target.value)} />

        {/* <input type="number" placeholder='Phone Number' className='w-1/2 bg-white px-5 ' /> */}
        <input type="number" placeholder="Phone Number" value={contact_phoneno} class="w-full sm:w-2/5  bg-white mb-3 sm:mb-0 sm:me-3 py-3 px-4 sm:px-5 rounded-md" onChange={event=>setContactPhoneno(event.target.value)} />
        </div>

        
        <div className='m-1 py-2 flex justify-center'>
  <input type="text" placeholder='Write Your Comment' value={contact_message} className='bg-white h-32 w-full sm:w-4/5 px-5 rounded-md' onChange={event=>setContactMessage(event.target.value)}/>
</div>


       <button class='block mx-auto bg-orange-600 border-1 text-white font-bold w-full sm:w-1/2 md:w-1/3 lg:w-1/5 rounded-lg h-10'onClick={handleSend}>SEND MESSAGE</button>


        </div>
        </div>
        </div>






    </>
  )
}

export default Contact