import React from 'react';
import axios from 'axios';
import MovieForm from './MovieForm';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {

    const navigate = useNavigate();
    const handleAddMovie = async (movie) => {
        await axios.post('http://localhost:8080/movies', movie);
        alert('Movie added successfully');
        navigate('/movieslist');
    };

    return (
        <div>
            <h2>Add New Movie</h2>
            <MovieForm onSubmit={handleAddMovie} />
        </div>
    );
};

export default AddMovie;
