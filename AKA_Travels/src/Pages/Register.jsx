import React from 'react'

const Register = () => {
  return (
    <>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' />
            
            <label htmlFor="email">Email</label>
            <input type="email" id='email' />
        </form>
    </>
  )
}

export default Register