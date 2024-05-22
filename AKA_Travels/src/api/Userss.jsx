export const getOtherUserInfo=()=>{
    return fetch(`${API}/getuserslist`)
    .then(response=>response.json())
    .catch(error=>console.log(error))
}