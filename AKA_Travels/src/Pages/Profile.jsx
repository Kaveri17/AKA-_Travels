import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Profile = () => {
 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Settings saved:", { username, email, notificationsEnabled });
    navigate(`/save-response?username=${username}&email=${email}&notificationsEnabled=${notificationsEnabled}`);
  };

 
  

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-4 justify-center flex"><i class="bi bi-person-circle text-4xl"></i></h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 w-1/2">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2 ">Username</label>
          <input
            type="text"
            id="username"
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>


        <div className="mb-4 w-1/2">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email" 
            id="email"
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">
            <input
              type="checkbox"
              className="mr-2 leading-tight"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
            />
            Enable Notifications
          </label>
        </div>
        {/* <Link to="/save-response"> */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Response
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Profile;


