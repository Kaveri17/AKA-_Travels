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