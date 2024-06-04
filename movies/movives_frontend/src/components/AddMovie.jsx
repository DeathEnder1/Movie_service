import React from 'react';
import axios from 'axios';
import MovieForm from './MovieForm';
import './MovieForm.css';
import './EditMovie.css';


const AddMovie = () => {

    const navigate = useNavigate();
    const handleAddMovie = async (movie) => {
        await axios.post('http://localhost:8080/movies', movie);
        alert('Movie added successfully');
        navigate('/movieslist');
    };

    return (
        <div className='edit-movie-container'>
            <h2 className='edit-movie-heading'>Add New Movie</h2>
            <div className="edit-movie-form-container">
                <MovieForm onSubmit={handleAddMovie} />
            </div>
            
        </div>
        
    );
};

export default AddMovie;