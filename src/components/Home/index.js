import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <div className='home-container'>
      <h1 className='main-heading'>Welcome to Zysk User Management System</h1>
      <p className='webpage-description'>
        Your one-stop solution for managing user data effortlessly.<br />
        The Zysk User Management System is designed to make managing user details seamless and efficient.
      </p>
      <h2 className='main-heading'>Features</h2>
      <ul className='features-list'>
        <li className='webpage-description'><strong>Add Users:</strong> Quickly register new users.</li>
        <li className='webpage-description'><strong>Edit User Information:</strong> Modify user details.</li>
        <li className='webpage-description'><strong>Delete Users:</strong> Remove inactive users.</li>
        <li className='webpage-description'><strong>View Users:</strong> Organized user data display.</li>
      </ul>
      <div className='button-container'>
        <Link to="/add-user">
          <button className='buttons'>Add User Data</button>
        </Link>
        <Link to="/view-users">
          <button className='buttons'>View User Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
