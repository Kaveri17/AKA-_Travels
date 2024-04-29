import { API } from "../config"

export const viewActivities = () => {
    return fetch(`${API}/getcategorylist`)
    .then(response => response.json())
    .catch(error => console.log(error))

}