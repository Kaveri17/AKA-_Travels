import React, { useState } from 'react'
import { forgetpassword } from '../api/Userapp'

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess ] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        forgetpassword({email})
        .then(data=>{
        if(data.error){
            setError(data.error)
            setSuccess(false)
        }
        else{
            setError('')
            setSuccess(true)
            setEmail('')
        }
    })
    .catch(err => console.log(err))
    }
    const showError = () => {
        if (error) {
          return <div className='text-red-600 text-xl font-bold text-center'>{error}</div>
        }
      }
      const showSuccess = () => {
        if(success) {
            return <div className ='text-green-500 text-lg font-bold'>"Password reset link has been sent to your email."</div>
        }
      }
  return (
    <> <div className=" w-5/6 mx-auto " >
 
         <form className='shadow-md  flex flex-col items-center justify-center w-full' style={{ height: '100vh' }}>
            {showError()}
            {showSuccess()}
           <div className=' w-full lg:w-1/2  border-2 border-solid border-slate-900 ps-3 pr-4 '>
             <h1 className='text-3xl font-bold text-center pb-4 pt-4 underline'>Forget Password</h1>
             
             <div className='pb-4  text-2xl font-semibold flex justify-between'>
               <label htmlFor="email" >Email</label>
               <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md  w-5/6' name='email' id='email'onChange={event => setEmail(event.target.value)} />
               
             </div>
             <div className='pb-4 '>
             <button className='font-bold text-xl border-2  border-red-300 bg-yellow-400 p-2 rounded-lg' onClick={handleSubmit}>
                Send password resent link
                

             </button>
             </div>
            
            
           </div>
   
         </form>
       
   
   
   
       </div>
    
    </>
//     <div className='w-11/12 m-auto mt-8' style={{height: '40vh'}}>
//     <div className="my-5 pt-12">
//         <form className="p-3 w-3/5 m-auto  ">
            
//             <h1 className='text-center text-2xl font-semibold '>Forget Password</h1>
//             <div className="mt-5 flex gap-2 flex-wrap ">
//                 <label htmlFor="email" className='text-xl'>Email</label>
//                 <input type="email" name='email' id='email' className='border-2 rounded-md border-black  py-1 w-full xl:w-11/12 px-2' placeholder='Enter email...'/>
//             </div>
//             <div className="mt-5 ">
//                 <button className='bg-yellow-500 py-1 px-2 rounded-md text-white'>Send Email</button>
//             </div>
//         </form>
//     </div>
// </div>

  )
}

export default ForgetPassword