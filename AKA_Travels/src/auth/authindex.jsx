import { data } from "autoprefixer";
import{ API } from "../config";

//signup
export const signup=user=>{
  return fetch(`${API}/register`,{
    method:'POST',
    headers:{
      Accept:"application/json",
      "content-type":"application/json"
    },
    body:JSON.stringify(user)
  })
  .then(res=>{
    return res.json()
  })
  .catch(err=>console.log(err))
}
//signin
export const signin=user=>{
  return fetch(`${API}/signin`,{
    method: 'POST',
    headers:{
      Accept: "application/json",
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(res=>{
    return res.json()
  })
  .catch(err =>console.log(err))
}

//authenticate and store token in local staorage

export const authenticate=(data,next)=>{
  if(typeof window!=='undefined'){
    localStorage.setItem('jwt',JSON.stringify(data))
    next()
  }
}

//redirect user by role
export const isAuthenticated=()=>{
  if(typeof window==='undefined'){
    return false
  }
  if(localStorage.getItem('jwt')){
    return JSON.parse(localStorage.getItem('jwt'))
  }
  else{
    return false
  }
}

//signout
export const signout=next=>{
  if(typeof window!=='undefined'){
    localStorage.removeItem('jwt')
    next()
    return fetch(`${API}/signout`,{
      method: 'POST'
    })
    .then(res=>{
      console.log('signout',res)
    })
    .catch(err=>console.log(err))
  }
}




//to redirect user

const redirectedUser=()=>{
  if(redirectedTo){
    if(user && user.role===1){
      return navigate('/admin/dashboard')
    }
    else{
      navigate('/profile')
    }
  }
}
















