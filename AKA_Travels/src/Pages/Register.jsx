import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../api/Userapp'

const Register = () => {
  let [username, setUsername] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

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
          setError('')
        }
      })
  }
  const showError = () => {
    if (error) {
      return <div>{error}</div>
    }
  }
  const showSuccess = () => {
    if (success) {
      return <div className='text-red'> "User registered successfully. "</div>
    }

  }
  return (
    <>
      <div className=" w-5/6 mx-auto" >
        {showError()}
        {showSuccess()}

        <form className='flex w-full items-center justify-center' style={{ height: '100vh' }}   >

          <div className='w-1/2 border-2 border-solid border-red-300 p-4 ' style={{ backgroundColor: "skyblue" }}>
            <h1 className='text-4xl font-bold text-center pb-3'>Register</h1>
            <div className='  flex justify-between text-xl font-semibold '>
              <label htmlFor="username"  >Username</label>
              <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-4/5' name='username' id='username' onChange={(event) => { setUsername(event.target.value) }} />

            </div>

            <div className='pt-3  text-xl font-semibold flex justify-between'>
              <label htmlFor="username" >Email</label>
              <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-4/5' name='email' id='email' onChange={(event) => { setEmail(event.target.value) }} />
            </div>

            <div className=' flex justify-between pt-3 pb-4 text-xl font-semibold '>
              <label htmlFor="pwd" >Password </label>
              <input type="password" className=' border-2 border-zinc-300 p-2 rounded-md w-4/5 ' name='pwd' id='pwd' onChange={(event) => { setPassword(event.target.value) }} />

            </div>
            <div className='text-center space-x-4'>

              <button className=' font-semibold rounded-md px-4 py-2 text-2xl border-2 border-solid bg-red-300 hover:bg-slate-400' onClick={handleRegister}>Register</button>
              <button className=' font-semibold rounded-md px-4 py-2 text-2xl border-2 border-solid bg-red-300 hover:bg-slate-400 '>Go Back</button>
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