import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Callback function to update users list when a new user is added
  const handleUserAdded = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
    setSuccessMessage('User added successfully!');
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          User Management
        </h1>
        
        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
            {successMessage}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="order-2 md:order-1">
            <UserList 
              users={users} 
              setUsers={setUsers} 
              setLoading={setLoading} 
            />
          </div>
          <div className="order-1 md:order-2">
            <UserForm 
              onUserAdded={handleUserAdded} 
              setLoading={setLoading} 
            />
          </div>
        </div>

        {/* Loading Overlay */}
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-2 text-gray-700">Loading...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users; 