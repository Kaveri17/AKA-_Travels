import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { authenticate, login } from '../api/Userapp'

const Login = () => {
  let [email, setEmail] = useState('')
  let[password , setPassword] = useState('')
  let [error, setError] = useState('')
  let [success, setSuccess] = useState('')
  let navigate = useNavigate()
  let [user, setUser] = useState({})


  const handleLogin = event => {
    event.preventDefault()
    login(email, password)
    .then(data => {
      if(data.error){
        setError(data.error)
        setSuccess(false)
      }
      else{
        setSuccess(true)
        setError('')
        authenticate(data)
        setUser(data)
      }
    })
    .catch(error => {
      console.log(error)

    })
  }
  const showError = () => {
    if (error) {
      return <div className='text-red-600 text-xl font-bold text-center'>{error}</div>
    }
  }
  const redirect = () => {
    if (success) {
      if (user.role === 1) {
        return navigate('/admindashboard')
      }
      else {
        return navigate('/')
      }
    }
  }
  const handleCancel = () => {
    navigate('/register');
}

  return (
  <>
 <div className=" w-5/6 mx-auto " >
 {redirect()}
      <form className=' flex flex-col items-center justify-center w-full' style={{ height: '100vh' }}>
   

        <div className=' w-full lg:w-1/2 border-2 border-solid border-red-300 p-4  ' style={{ backgroundColor: "skyblue" }}>
          <h1 className='text-3xl font-bold text-center pb-4 pt-4 underline'>LOGIN</h1>
          
          <div className='pb-3  text-2xl font-semibold flex justify-between'>
            <label htmlFor="username" >Email</label>
            <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='email' id='email' onChange={event=> setEmail(event.target.value)}/>
            
          </div>
          <div className='  flex justify-between text-2xl font-semibold '>
            <label htmlFor="pwd"  >Password</label>
            <input type="password" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='pwd' id='pwd' onChange={event => setPassword(event.target.value)} />
         

          </div>

          {showError()}
         
          <div className='text-center space-x-4 pt-4'>

            <button className=' font-semibold rounded-md px-4 py-2 text-lg border-2 border-solid bg-red-300 hover:bg-slate-400' onClick={handleLogin} >Login</button>
            <button className=' font-semibold rounded-md px-4 py-2 text-lg border-2 border-solid bg-red-300 hover:bg-slate-400' >Forget password</button>
            <button className=' font-semibold rounded-md px-4 py-2 text-lg border-2 border-solid bg-red-300 hover:bg-slate-400 'onClick={handleCancel}>Cancel</button>
          </div>
          <div className='text-xl  pt-3 text-center'>
            Already have an account? <Link to="/register" className='ps-3 text-blue-700 font-semibold'>Register</Link>
          </div>
        </div>

      </form>
    



    </div>
 
  </>
  )
}

export default Login