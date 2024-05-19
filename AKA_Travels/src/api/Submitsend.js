import { API } from "../config"

export const submitmessage = (send) => {
    return fetch(`${API}/submitmessage`, {
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(send)

    })
    .then(response => response.json())
    .catch(error => console.log(error))
}
// get all message
export const getallmessage=() => {
    return fetch(`${API}/getallmessage`)
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// get message by id

export const getmessage = (id) => {
    return fetch(`${API}/getmessage/${id}`)
    .then(res=>res.json())
    .catch(error=>console.log(error))
}
// export const getmessage = (id) =>{
//     return fetch(`${API}/getmessage/${id}`)
//     .then(response=>response.json())
//     .catch(error=>console.log(error))
// }