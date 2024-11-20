import React, { useState, useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './index.css';

const AddUser = () => {
  const { setUsers } = useContext(UserContext);
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: formData.id,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      department: formData.department,
    };

    // Updating the user list with the new user
    setUsers((prevUsers) => [...prevUsers, newUser]);

    alert('User successfully added! You can view user details by clicking "View User Details".');

    // Resetting form
    setFormData({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      department: '',
    });

    // Navigate to the users list page after adding a new user
    navigate('/view-users');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='form-container'>
      <h1 className='main-heading'>Enter User Details</h1>
      <form onSubmit={handleSubmit}>
        {/* ID */}
        <div className="each-input-container">
          <label className="input-labels" htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            placeholder="Enter User ID"
            className="input-field"
            onChange={handleChange}
            required
          />
        </div>

        {/* First Name */}
        <div className="each-input-container">
          <label className="input-labels" htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            placeholder="Enter First Name"
            className="input-field"
            required
            onChange={handleChange}
          />
        </div>

        {/* Last Name */}
        <div className="each-input-container">
          <label className="input-labels" htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            placeholder="Enter Last Name"
            className="input-field"
            required
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="each-input-container">
          <label className="input-labels" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            className="input-field"
            required
            onChange={handleChange}
          />
        </div>

        {/* Department */}
        <div className="each-input-container">
          <label className="input-labels" htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            placeholder="Enter Department"
            className="input-field"
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="buttons">Add User Data</button>
      </form>

    </div>
  );
};

export default AddUser;
