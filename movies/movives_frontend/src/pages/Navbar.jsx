import React, { useEffect, useState } from 'react';
import Navlistitem from '../components/Navlistitem';
import Navlistdata from '../data/Navlistdata';
import Search from '../components/Search';


import './Navbar.css';
import Button from '../components/Button';

import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import BoardAdmin from "../components/board-admin.component";
// import BoardModerator from "../components/board-moderator.component";
// import BoardUser from "../components/board-user.component";
// import Login from "../components/login.component";
// import Profile from "../components/profile.component";
// import Register from "../components/register.component";

function Navbar() {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [dropdownOpen, setDropdownOpen] = useState(false); // Quản lý trạng thái dropdown
    
    useEffect(() => {
      const user = AuthService.getCurrentUser();
  
      if (user) {
        setCurrentUser(user);
        setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
        setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      }
  
      EventBus.on("logout", logOut);
  
      return () => {
        EventBus.remove("logout", logOut);
      };
    }, []);
  
    const logOut = () => {
      AuthService.logout();
      setCurrentUser(undefined);
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    };

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

  return (
    <header>
        <a href='/' className='logo'>
            Hentai.com
        </a>

        <ul className='btn'>
            {
                Navlistdata.map(btn => (
                    <Navlistitem key={btn._id} btn={btn} />
                ))
            }

        <div className="navbar-nav mr-auto">
          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item dropdown">
              <span className="nav-link" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                Manage
              </span>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link to={"/admin"} className="dropdown-item">
                    Admin Board
                  </Link>
                </li>
                <li>
                  <Link to={"/movieslist"} className="dropdown-item">
                    MovieList
                  </Link>
                </li>
                <li>
                  <Link to={"/profile"} className="dropdown-item">
                    View Profile
                  </Link>
                </li>
              </ul>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
        </ul>

        <Search />
        
        <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='Sign in'/>
    </header>
  )
}


export default Navbar
