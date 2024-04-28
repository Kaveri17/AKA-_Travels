import { API } from "../config"

// get all blog
export const viewBlog = () => {
    return fetch(`${API}/getblog` , )
    .then(response => response.json())
    .catch(error => console.log(error))

}
// Blog details
export const BlogPost = () =>{
    return fetch(`${API}/getblog`, )
    .then(response => response.json())
    .catch(error => console.log(error))


}
