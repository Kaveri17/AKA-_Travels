import { API } from "../config"

export const Det = (id) =>{
    return fetch(`${API}/getproductdetails/${id}` )
    .then(response => response.json())
    .catch(error => console.log(error))


}






