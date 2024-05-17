// MovieList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('http://localhost:8080/movies');
      setMovies(response.data);
    };
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/movies/${id}`);
    setMovies(movies.filter(movie => movie.id !== id));
    alert('Movie deleted successfully');
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h2 className="admin-title">Movie List</h2>
        <Link to="/add" className="admin-button">Add New Movie</Link>
      </div>
      
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie.id} className="movie-item">
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
