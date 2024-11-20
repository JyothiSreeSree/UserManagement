import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProvider from './context/UserContext';
import Home from './components/Home';
import AddUser from './components/AddUser';
import UserDetails from './components/UserDetails';

const App = () => (
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/add-user" element={<AddUser />} />
        <Route exact path="/view-users" element={<UserDetails />} />
      </Routes>
    </Router>
  </UserProvider>
);

export default App;
