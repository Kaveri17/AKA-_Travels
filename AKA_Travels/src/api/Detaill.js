import { API } from "../config"

export const Det = (id) =>{
    return fetch(`${API}/getproductdetails/${id}` )
    .then(response => response.json())
    .catch(error => console.log(error))


}






// import { API } from "../config";

//export const Det = async (productId) => {
//     try {
//         const response = await fetch(`${API}/getproductdetails/${productId}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch product details');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching product details:', error);
//         // Handle the error gracefully, such as returning a default value or throwing it further.
//         throw error;
//     }
// };
