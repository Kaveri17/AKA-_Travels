import { API } from "../config"

export const getPopular = () => {
    return fetch(`${API}/getpopularlist`)
    .then(response => response.json())
    .catch(error => console.log(error))

}
// export const getProd = (id) =>{
//     return fetch(`${API}/getproductdetails/${id}` )
//     .then(response => response.json())
//     .catch(error => console.log(error))


// }
export const getProd = () =>{
    return fetch(`${API}/getproductlist` )
    .then(response => response.json())
    .catch(error => console.log(error))


}