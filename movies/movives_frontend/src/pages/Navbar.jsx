import React from 'react';
import Navlistitem from '../components/Navlistitem';
import Navlistdata from '../data/Navlistdata';
import Search from '../components/Search';
import UserService from '../data/UserService';
import { Link } from 'react-router-dom';


import './Navbar.css';
import Button from '../components/Button';

function Navbar() {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();



    const handleLogout = () => {
        const confirmDelete = window.confirm('Are you sure you want to logout this user?');
        if (confirmDelete) {
            UserService.logout();
        }
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
                {!isAuthenticated && <li><Link to="/"></Link></li>}
                {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                {isAdmin && <li><Link to="/admin/user-management">User Management</Link></li>}
                {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
            </ul>

            <Search />
            
            {/* <Link to='/admin' className='admin-link' rel="noopener noreferrer">Admin</Link> */}

            <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='Sign in'/>
        </header>
    )
}

export default Navbar