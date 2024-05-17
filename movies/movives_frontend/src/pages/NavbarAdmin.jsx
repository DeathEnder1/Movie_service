import React from 'react';
import { Link } from 'react-router-dom';

import './NavbarAdmin.css'; // Import CSS for NavbarAdmin

function NavbarAdmin() {
  return (
    <header className="admin-header">
      <nav>
        <Link to="/admin" className="admin-link" rel="noopener noreferrer">Admin Page</Link>
      </nav>
    </header>
  );
}

export default NavbarAdmin;
