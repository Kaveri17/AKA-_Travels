import { API } from "../config"

// get all blog
export const viewBlog = () => {
    return fetch(`${API}/getblog` , )
    .then(response => response.json())
    .catch(error => console.log(error))

}
// Blog details
export const BlogDet = (id) =>{
    return fetch(`${API}/getdescriptions/${id}`, )
    .then(response => response.json())
    .catch(error => console.log(error))


}
// getall post
export const gpost= (id) => {
    return fetch(`${API}/getpost/${id}`,)
    .then(response => response.json())
    .catch(error => console.log(error))
}
