import { API } from "../config"

export const getPackages = () => {
    return fetch(`${API}/getcategorylist`)
    .then(response => response.json())
    .catch(error => console.log(error))

}