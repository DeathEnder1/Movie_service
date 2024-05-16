import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div>
            <h2>Movie List</h2>
            <Link to="/add">Add New Movie</Link>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        {movie.title} ({movie.Year})
                        <Link to={`/edit/${movie.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(movie.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
