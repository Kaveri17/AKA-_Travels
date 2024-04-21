import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { verifyUser } from '../../api/Userapp'


const Verify = () => {
    const {token} = useParams()

    let [error, setError] = useState('')
    let [success, setSuccess] = useState('')

    let [isLoading, setIsLoading] = useState(true)
    useEffect(() => { 
        if (token) {
        verifyUser(token)
        .then(data=> {
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(data.message)
            }
           
        })
        .finally(()=>{
            setIsLoading(false)
        })
       
    }
    }, [token])
    const showError = () =>{
        if(error) {
            return <div className='text-red-600 text-2xl font-bold text-center '>{error}
            <br />
               <Link className='inline-block p-2 bg-green-500 rounded-lg  ' to ="/login">Login</Link>
               </div>
        }
    }
    const showSuccess = () =>{
        if(success) {
            return <div className='text-green-600 text-2xl font-bold text-center'>{success}
             <br />
               <Link className='inline-block p-2 bg-yellow-500 rounded-lg ' to ="/login">Login</Link>
               </div>
        }
    }
  return (
  
    <div className='w-full flex flex-col justify-center items-center'style={{height:'100vh'}}>
    {isLoading ? <p>LOADING........</p> : <>
    {showSuccess()}
        {showError()}

    </>}
        
  </div>
  )
}

export default Verify