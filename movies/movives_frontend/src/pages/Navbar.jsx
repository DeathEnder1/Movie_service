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
    
    const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);

    const toggleYearDropdown = () => {
      setYearDropdownOpen(!yearDropdownOpen);
    };
    
    const selectYear = (year) => {
      setSelectedYear(year);
      setYearDropdownOpen(false); // Đóng dropdown sau khi chọn
    };

    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    const toggleCategoryDropdown = () => {
      setCategoryDropdownOpen(!categoryDropdownOpen);
    };
    
    const selectCategory = (category) => {
      setSelectedCategory(category);
      setCategoryDropdownOpen(false); // Đóng dropdown sau khi chọn
    };

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

    const categories = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];
    const years = [2021, 2022, 2023, 2024, 2025];
    
  return (
    <header>
        <a href='/' className='logo'>
            Bún cua.com
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


          <li className="nav-item dropdown">
            <li className="nav-link" onClick={toggleCategoryDropdown} style={{ cursor: 'pointer' }}>
              <a>Category <ion-icon name="chevron-down-outline"></ion-icon></a>
            </li>
            <ul className={`dropdown-menu ${categoryDropdownOpen ? 'show' : ''}`}>
              {categories.map(category => (
                <li key={category} onClick={() => selectCategory(category)}>
                  <Link to={`/category/${category}`} className="dropdown-item">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
            
          <li className="nav-item dropdown">
            <li className="nav-link" onClick={toggleYearDropdown} style={{ cursor: 'pointer' }}>
              <a>Year <ion-icon name="chevron-down-outline"></ion-icon></a>
            </li>
            <ul className={`dropdown-menu ${yearDropdownOpen ? 'show' : ''}`}>
              {years.map(year => (
                <li key={year} onClick={() => selectYear(year)}>
                  <Link to={`/year/${year}`} className="dropdown-item">
                    {year}
                  </Link>
                </li>
              ))}
            </ul>
          </li>      

          {showAdminBoard && (
            <li className="nav-item dropdown">
              <li className="nav-link" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                <a>Manage <ion-icon name="chevron-down-outline"></ion-icon></a>
              </li>
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

                {currentUser && (
                  <li>
                    <Link to={"/user"} className="dropdown-item">
                    User
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          )}


          </div>

        </ul>

        <Search />
        
        {currentUser ? (
          <div className="Navbar-login">
            <li className="user-nav">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                <Button icon={<ion-icon name="log-out-outline"></ion-icon>} name='Log out'/>
              </a>
            </li>
          </div>
        ) : (
          <div className="Navbar-login">
            <li className="nav-item">
              <Link to={"/login"} className="nav-btn">
                <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='Log in'/>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to={"/register"} className="nav-btn">
                <Button name='Sign up'/>
              </Link>
            </li>
          </div>
        )}
        
    </header>
  )
}


export default Navbar
