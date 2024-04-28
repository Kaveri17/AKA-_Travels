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

import { API } from "../config"

// Gallery
export const getGallery = () => {
    return fetch(`${API}/getgallery`) 
    .then(response => response.json())
    .catch(error => console.log(error))
}


