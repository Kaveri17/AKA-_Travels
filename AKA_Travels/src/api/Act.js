import { API } from "../config"

export const getActivities = () => {
    return fetch(`${API}/getcategorylist`)
    .then(response => response.json())
    .catch(error => console.log(error))

}