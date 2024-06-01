import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './MovieList.css';
import Search from './Search';

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
    const confirmDelete = window.confirm('Are you sure you want to delete this movie?');
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/movies/${id}`);
      setMovies(movies.filter(movie => movie.id !== id));
      alert('Movie deleted successfully');
    }
  };

  return (
    <div className="admin-page" style={{ color: 'white' }}>
      <div className="admin-header">
        <Link to="/" className="admin-button"><ion-icon name="home-outline"></ion-icon></Link>
        <h2 className="admin-title">Movie List</h2>
        <Search />
        <Link to="/add" className="admin-button"><ion-icon name="add-circle-outline"></ion-icon>Add New Movie</Link>
      </div>

      <table className="movie-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id} className="movie-row">
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>
                <Link to={`/edit/${movie.id}`} className="edit-button">Edit</Link>
                <button className="delete-button" onClick={() => handleDelete(movie.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;