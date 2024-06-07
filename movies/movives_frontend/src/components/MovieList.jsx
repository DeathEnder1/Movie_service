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
    if (window.confirm("Are you sure you want to delete this movie?")) {
        try {
            await MovieService.deleteMovie(id);
            fetchMovies();
        } catch (error) {
            console.error("There was an error deleting the movie!", error);
        }
    }
};

  return (
    <div className="admin-page" style={{ color: 'white' }}>
      <div className="admin-header">
        <Link to="/" className="admin-button"><ion-icon name="home-outline"></ion-icon></Link>
        <h2 className="admin-title">Movie List</h2>
        <Link to="/add" className="admin-button"><ion-icon name="add-circle-outline"></ion-icon>Add New Movie</Link>
      </div>

      <div className='table-container'>
        <table className="movie-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.id} className="movie-row">
                <td><img src={movie.previewimg}/></td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>
                  <button className="edit-button"><Link to={`/edit/${movie.id}`}><ion-icon name="create-outline"></ion-icon></Link></button>
                  <button className="delete-button" onClick={() => handleDelete(movie.id)}><ion-icon name="trash-outline"></ion-icon></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;