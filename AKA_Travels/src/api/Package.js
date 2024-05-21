import { API } from "../config"

export const getPackages = () => {
    return fetch(`${API}/getproductlist`)
    .then(response => response.json())
    .catch(error => console.log(error))

}



