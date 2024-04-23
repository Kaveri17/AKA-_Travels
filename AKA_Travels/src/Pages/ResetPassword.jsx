import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config'

const ResetPassword = () => {
    const params = useParams()
    
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    // read token
    const token= params.token
    
    const handleSubmit = event => {
        event.preventDefault()

        // reset password
        fetch(`${API}/resetpassword/${token}` ,{
            method: 'POST',
            headers:{
                Accept:'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ password })
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                setError(data.error)
                setSuccess(false)

            }
            else{
                setError('')
                setSuccess(true)
                setPassword('')
            }
           
        })
        .catch(err => console.log(err))

       


        
    }
    const showError = () => {
        if(error) {
            return <div className='text-bold text-center text-red-600 '>{error}</div>
        }
    }
    const showSuccess = () => {
        if(success) {
            return<div className='text-green-500 text-bold text-center'>"Your Password has Successfully Changed"</div>

        }
    }

  return (
    <>
     <div className=" w-5/6 mx-auto " >
 
 <form className='shadow-md  flex flex-col items-center justify-center w-full' style={{ height: '100vh' }}>
   {showError()}
   {showSuccess()}
   
   <div className=' w-full lg:w-1/2  border-2 border-solid border-slate-900 ps-3 pr-4 '>
     <h1 className='text-3xl font-bold text-center pb-4 pt-4 underline'>Reset Password</h1>
     
     <div className='pb-4  text-2xl font-semibold flex justify-between'>
       <label htmlFor="password" >Password</label>
       <input type="password" className=' border-2 border-zinc-300 p-2 rounded-md  w-5/6' name='pwd' id='pwd' onChange={event => setPassword(event.target.value)}/>
       
     </div>
     <div className='pb-4 '>
     <button className='font-bold text-xl border-2  border-red-300 bg-yellow-400 p-2 rounded-lg'onClick={handleSubmit} >
       Reset Password
        

     </button>
     </div>
    
    
   </div>

 </form>




</div>
    </>
    
  )
}

export default ResetPassword
