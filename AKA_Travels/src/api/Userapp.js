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
