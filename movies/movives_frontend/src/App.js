import React from 'react';
import 'swiper/css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import NavbarAdmin from './pages/NavbarAdmin'; 
import Banner from './pages/Banner';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';

import './App.css';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route index element={<><Navbar /><Banner /><NavbarAdmin /></>} />     
            <Route path="/admin" element={<MovieList />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="/edit/:id" element={<EditMovie />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
