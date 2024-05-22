// EditMovie.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieForm from './MovieForm';
import { useParams, useNavigate } from 'react-router-dom';
import './EditMovie.css';

const EditMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(`http://localhost:8080/movies/${id}`);
            setMovie(response.data);
        };
        fetchMovie();
    }, [id]);

    const handleEditMovie = async (updatedMovie) => {
        await axios.put(`http://localhost:8080/movies/${id}`, updatedMovie);
        alert('Movie updated successfully');
        navigate('/admin');
    };

    return (
        <div className="edit-movie-container">
            <h2 className="edit-movie-heading">Edit Movie</h2>
            <div className="edit-movie-form-container">
                {movie && <MovieForm initialData={movie} onSubmit={handleEditMovie} />}
            </div>
        </div>
    );
};

export default EditMovie;
