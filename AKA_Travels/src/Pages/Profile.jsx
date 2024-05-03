import React from 'react'
import { isAuthenticated } from '../auth/authindex'

const Profile = () => {
    const {user} = isAuthenticated

  return (
    <div>Profile</div>
  )
}

export default Profile