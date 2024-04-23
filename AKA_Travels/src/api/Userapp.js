import { API } from "../config"


// // REGISTER
// export const register = (user) => {
//     return fetch(`${API}/register`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)
//     })
//         .then(response => response.json())
//         .catch(error => console.log(error))
// }
// register
export const register= (user) => {
    console.log(import.meta.env.VITE_BACKEND_URL)
    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    })
    .then(response => response.json())
    .catch(error => console.log(error))

}


export const verifyUser = (token) => {
    return fetch(`${API}/verify/${token}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}

// login
export const login = (email, password) => {
    console.log(API)
    return fetch(`${API}/login`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
      body: JSON.stringify({email,password})
    })
    .then(response => response.json())
    .catch(error => console.log(error))
  
}
// to keep logged in
export const authenticate = (data) => {
    localStorage.setItem('jwt', JSON.stringify(data))
}
// to check if logged in
export const isAuthenticate = () => {
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else {
        return false
    }
}
// for forget password
export const forgetpassword = user => {
    return fetch(`${API}/forgetpassword`, {
        method: 'POST',
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"

        },
        body: JSON.stringify(user)
    })
    .then(res => {
        return res.json()
    })
    .catch(err=>console.log(err))
}
