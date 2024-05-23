



import React from 'react';
import { isAuthenticated } from '../auth/authindex';

const Setting = () => {
    const { user } = isAuthenticated();

    return (
        <div className="container mx-auto mt-8 px-4">
            {/* <h2 className="text-2xl font-bold mb-4">User Profile<i class="bi bi-person-circle text-3xl"></i></h2> */}
            <h2 className="text-2xl font-bold mb-4 flex items-center">User Profile
    <i className="bi bi-person-circle text-3xl ml-2"></i>
</h2>
             <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div className="mb-2">
                    <strong className="text-gray-700">Name:</strong> {user.username}
                </div>
                <div className="mb-2">
                    <strong className="text-gray-700">Email:</strong> {user.email}
                </div>
                <div className="mb-2">
                    <strong className="text-gray-700">Role:</strong> {user.role}
                </div>
            </div>
        </div>
    );
};

export default Setting;





// import React, { useState, useEffect } from 'react';
// import { isAuthenticated } from '../auth/authindex';
// import { API } from "../config";

// const Setting = () => {
//     const { user, token } = isAuthenticated();
//     const [otherUser, setOtherUser] = useState(null);

//     useEffect(() => {
        
//         const endpoint = `${API}/getuserslist`; 

//         fetch(endpoint, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch other user information');
//             }
//             return response.json();
//         })
//         .then(data => {
//             setOtherUser(data);
//         })
//         .catch(error => {
//             console.error('Error fetching other user information:', error);
//         });
//     }, [token]);

//     const displayUserInfo = userInfo => {
//         if (!userInfo) {
//             return null;
//         }
//         return (
//             <div className="bg-white rounded-lg shadow-md p-6 mb-4">
//                 <div className="mb-2">
//                     <strong className="text-gray-700">Name:</strong> {userInfo.username}
//                 </div>
//                 <div className="mb-2">
//                     <strong className="text-gray-700">Email:</strong> {userInfo.email}
//                 </div>
//                 <div className="mb-2">
//                     <strong className="text-gray-700">Role:</strong> {userInfo.role}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="container mx-auto mt-8 px-4">
//             <h2 className="text-2xl font-bold mb-4 flex items-center">User Profile
//                 <i className="bi bi-person-circle text-3xl ml-2"></i>
//             </h2>
            
//             {displayUserInfo(user)}
        
//             {displayUserInfo(otherUser)}
//         </div>
//     );
// };

// export default Setting;
