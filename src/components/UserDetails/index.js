import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import './index.css';
import AddUser from '../AddUser'; // Make sure to import AddUser component

const UserDetails = () => {
  const { users, setUsers } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Simulate API call
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [setUsers]);

  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    alert('User deleted successfully!');
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  return (
    <div className="user-details-container">
      <div className="user-list">
        <h1 className="main-heading">User Details</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
                <p><strong>Id:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button className="buttons" onClick={() => handleEditUser(user)}>Edit</button>
              <button className="buttons" onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Render AddUser Component beside UserDetails */}
      {isEditing && selectedUser && (
        <div className="add-user-container">
          <h2>Edit User</h2>
          <AddUser selectedUser={selectedUser} isEditing={isEditing} />
        </div>
      )}
    </div>
  );
};

export default UserDetails;
