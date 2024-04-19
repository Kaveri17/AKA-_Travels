import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { verifyUser } from '../../api/Userapp'


const Verify = () => {
    const {token} = useParams()

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    let [isloading, setIsLoading] = useState(true)
    useEffect(( )=> {
        verifyUser(token)
        .then(data=>{
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
    }, [token])
    const showError = () =>{
        if(error) {
            return <div className='text-red-600 text-2xl font-bold'>{error}</div>
        }
    }
    const showSuccess = () =>{
        if(success) {
            return <div className='text-green-600 text-2xl font-bold'>{success}</div>
        }
    }
  return (
    <>
    {isloading ? <p>Loading.....</p>:<>
      
        {showError()}
        {showSuccess()}
    </>}
    </>
  )
}

export default Verify