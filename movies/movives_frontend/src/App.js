import React from 'react';
import 'swiper/css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Banner from './pages/Banner';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import UserService from './data/UserService';
import LoginPage from './pages/auth/LoginPage';
import RegistrationPage from './pages/auth/RegistrationPage';
import UpdateUser from './pages/userspage/UpdateUser';
import UserManagementPage from './pages/userspage/UserManagementPage';
import ProfilePage from './pages/userspage/ProfilePage';

import './App.css';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route index element={<><Navbar /><Banner /></>} />     
            <Route path="/add" element={<AddMovie />} />
            <Route path="/edit/:id" element={<EditMovie />} />
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {UserService.adminOnly() && (
              <>
                <Route path="/admin" element={<MovieList />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/admin/user-management" element={<UserManagementPage />} />
                <Route path="/update-user/:userId" element={<UpdateUser />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/login" />} />‰
          </Routes>
        </Router>
      </>
  );
}

export default App;
