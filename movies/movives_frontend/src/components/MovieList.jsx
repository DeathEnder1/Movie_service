// MovieList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieService from '../services/MovieService';

import './MovieList.css';
import Search from './Search';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

    useEffect(() => {

      fetchMovies();
  }, [])


    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/movies');
        setMovies(response.data);
    } catch (error) {
        console.error("There was an error fetching the movies!", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await MovieService.deleteMovie(id);
      fetchMovies();
  } catch (error) {
      console.error("There was an error deleting the movie!", error);
  }
};

  return (
    <div className="admin-page">
      <div className="admin-header">
        <Link to="/" className="admin-button"><ion-icon name="home-outline"></ion-icon></Link>
        <h2 className="admin-title">Movie List</h2>
        <Search />
        <Link to="/add" className="admin-button"><ion-icon name="add-circle-outline"></ion-icon>Add New Movie</Link>
      </div>
      
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie.id} className="movie-item">
            <img src={movie.previewimg} alt="" className="movie-item-img" />
            <h3 className="movie-item-title">{movie.title} ({movie.year})</h3>
            <div className="movie-item-actions">
              <Link to={`/edit/${movie.id}`} className="edit-button">Edit</Link>
              <button className="delete-button" onClick={() => handleDelete(movie.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
