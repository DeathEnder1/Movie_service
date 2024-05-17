import React from 'react';
import Navlistitem from '../components/Navlistitem';
import Navlistdata from '../data/Navlistdata';
import Search from '../components/Search';
import { Link } from 'react-router-dom';

import './Navbar.css';
import Button from '../components/Button';

function Navbar() {
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
        </ul>
        <Search />

        <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='Sign in'/>
    </header>
  )
}

export default Navbar