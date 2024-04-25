import { API } from "../config"

export const viewBlog = () => {
    return fetch(`${API}/getblog`)
    .then(response => response.json())
    .catch(error => console.log(error))

}