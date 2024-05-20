import { API } from "../config"

// Gallery
export const getGallery = () => {
    return fetch(`${API}/getgallery`) 
    .then(response => response.json())
    .catch(error => console.log(error))
}