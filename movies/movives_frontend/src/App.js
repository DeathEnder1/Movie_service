import React from 'react';
import 'swiper/css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Banner from './pages/Banner';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import GoogleDriveVideo from './pages/movie';
import SearchResult from './pages/SearchResult';

// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Main from './pages/Main';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route index element={<><Navbar /><Banner /><Main /></>} />     
            <Route path="/admin" element={<MovieList />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="/edit/:id" element={<EditMovie />} />
            <Route path="/movies/:id" element={<><Navbar /><GoogleDriveVideo /></>} />
            <Route path="/search/:keyword" element={<><Navbar /><SearchResult /></>} />
          </Routes>
        </Router>
      </>
  );
}


export default App;

