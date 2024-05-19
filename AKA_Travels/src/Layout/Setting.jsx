



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


