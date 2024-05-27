import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../api/Userapp'
import { signup } from '../auth/authindex'

const Register = () => {
  let [username, setUsername] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleRegister = e => {
    e.preventDefault()
    register({ username, email, password })
      .then(data => {
        if (data.error) {
          setError(data.error)
          setSuccess(false)
        }
        else {
          setSuccess(true)
          setUsername('')
          setEmail('')
          setPassword('')
          setError('')
        }
      })
  }
  const showError = () => {
    if (error) {
      return <div className='text-red-600 text-2xl font-bold '>{error}</div>
    }
  }
  const showSuccess = () => {
    if (success) {
      return <div className='text-green-600 text-2xl font-bold '> "User registered successfully. "</div>
    }

  }
  const handleCancel = () => {
    navigate('/');
}

  return (
    <>
      <div className=" w-5/6 mx-auto " >
      

        <form className=' flex flex-col items-center justify-center w-full ' style={{ height: '100vh' }}>
        {showError()}
        {showSuccess()}
       

          <div className=' w-full lg:w-1/2 border-2 border-solid border-red-300 p-4  ' style={{ backgroundColor: "skyblue" }}>
            <h1 className='text-3xl font-bold text-center md:pb-4 pb-4 md:pt-3 pt-3 underline'>REGISTER</h1>
            <div className='  flex justify-between text-xl font-semibold '>
              <label htmlFor="username" className='w-2/5 sm:w-1/5 text-lg sm:text-xl'  >Username</label>
              <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='username' id='username' onChange={(event) => { setUsername(event.target.value) }} value={username} />

            </div>

            <div className=' md:pt-3 pt-3  text-xl font-semibold flex justify-between'>
              <label htmlFor="username" className='w-2/5 sm:w-1/5 text-lg sm:text-xl' >Email</label>
              <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='email' id='email' onChange={(event) => { setEmail(event.target.value) }} value={email} />
            </div>

            <div className='  flex justify-between md:pt-3 pt-3 md:pb-4 pb-4 text-xl font-semibold '>
              <label htmlFor="pwd" className='w-2/5 sm:w-1/5 text-lg sm:text-xl'>Password </label>
              <input type="password" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='pwd' id='pwd' onChange={(event) => { setPassword(event.target.value) }} value={password} />

            </div>
            <div className='text-center space-x-4 '>

              <button className=' font-semibold rounded-md px-4 py-2 text-2xl border-2 border-solid bg-red-300 hover:bg-slate-400' onClick={handleRegister}>Register</button>
              <button className=' font-semibold rounded-md px-4 py-2 text-2xl border-2 border-solid bg-red-300 hover:bg-slate-400 'onClick={handleCancel}>Go Back</button>
            </div>
            <div className='text-xl  pt-3 text-center'>
              Already have an account? <Link to="/login" className='ps-3 text-blue-700 font-semibold'>Login</Link>
            </div>
          </div>

        </form>
      



      </div>
    </>
  )
}

export default Register