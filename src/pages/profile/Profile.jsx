import React from 'react';
import Navbar from '../../components/navbar/NavBar';

const Profile = () => {
  return (
    
    <>
      <Navbar />  
  <div className="container mx-auto py-8">
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <div className="text-lg font-bold text-gray-800 mb-4">User Profile</div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
              alt="User Avatar"
            />
            <div className="ml-4">
              <div className="text-sm font-semibold text-gray-600">
                Parth Radadiya
              </div>
              <div className="text-xs text-gray-500">parthradadiya433@gmail.com</div>
            </div>
          </div>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Edit Profile
          </a>
        </div>
        <hr className="mb-4" />
        <div>
          <div className="text-sm font-semibold text-gray-600 mb-2">
            Shipping Address
          </div>
          <div className="text-sm text-gray-700">
            123 Main St
            <br />
            City, State 12345
            <br />
            Country
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
        <a href="#" className="text-sm text-blue-500 hover:underline">
          Change Password
        </a>
      </div>
    </div>
  </div>
</>


  );
};

export default Profile;
