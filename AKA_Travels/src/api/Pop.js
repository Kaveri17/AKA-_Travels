import { API } from "../config"

export const getPopular = () => {
    return fetch(`${API}/getpopularlist`)
    .then(response => response.json())
    .catch(error => console.log(error))

}