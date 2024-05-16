
import React from "react";
import { useLocation } from "react-router-dom";

const Save = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get the saved information from URL parameters
  const savedUsername = queryParams.get("username");
  const savedEmail = queryParams.get("email");
  const savedNotificationsEnabled = queryParams.get("notificationsEnabled");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Settings Saved Successfully!</h1>
      
      <p className="text-2xl">Username: {savedUsername}</p>
      <p className="text-2xl">Email: {savedEmail}</p>
      <p className="text-2xl">Notifications Enabled: {savedNotificationsEnabled}</p>
    </div>
  );
};

export default Save;
