import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieForm.css'; // Import your CSS file

const MovieForm = ({ initialData = {}, onSubmit }) => {
    const [movie, setMovie] = useState(initialData);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie({
            ...movie,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(movie);
    };

    const handleCancel = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <form onSubmit={handleSubmit} className="movie-form">
            <div className="form-row">
                <input
                    type="text"
                    name="title"
                    value={movie.title || ''}
                    onChange={handleChange}
                    placeholder="Title"
                />
            </div>
            <div className="form-row">
                <textarea
                    name="titleimg"
                    value={movie.titleimg || ''}
                    onChange={handleChange}
                    placeholder="Title Image"
                />
            </div>
            <div className="form-row">
                <textarea
                    name="bgimg"
                    value={movie.bgimg || ''}
                    onChange={handleChange}
                    placeholder="Background Image"
                />
            </div>
            <div className="form-row">
                <textarea
                    name="previewimg"
                    value={movie.previewimg || ''}
                    onChange={handleChange}
                    placeholder="Preview Image"
                />
            </div>
            <div className="form-row">
                <textarea
                    name="video"
                    value={movie.video || ''}
                    onChange={handleChange}
                    placeholder="Trailer"
                />
            </div>
            <div className="form-row">
                <textarea
                    name="video2"
                    value={movie.video2 || ''}
                    onChange={handleChange}
                    placeholder="Full Movie"
                />
            </div>
            <div className="form-row">
                <input
                    type="number"
                    name="year"
                    value={movie.year || ''}
                    onChange={handleChange}
                    placeholder="Year"
                />
                <input
                    type="text"
                    name="date"
                    value={movie.date || ''}
                    onChange={handleChange}
                    placeholder="Date"
                />
                <input
                    type="number"
                    name="agelimit"
                    value={movie.agelimit || ''}
                    onChange={handleChange}
                    placeholder="Age Limit"
                />
            </div>
            <div className="form-row">
                <input
                    type="text"
                    name="length"
                    value={movie.length || ''}
                    onChange={handleChange}
                    placeholder="Length"
                />
                <input
                    type="text"
                    name="category"
                    value={movie.category || ''}
                    onChange={handleChange}
                    placeholder="Category"
                />
                <input
                    type="text"
                    name="type"
                    value={movie.type || ''}
                    onChange={handleChange}
                    placeholder="Type"
                />
            </div>
            <div className="form-row">
                <textarea
                    name="description"
                    value={movie.description || ''}
                    onChange={handleChange}
                    placeholder="Description"
                />
            </div>
            <div className="form-row">
                <button type="submit" className="submit-button">Submit</button>
                <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
            </div>
        </form>
    );
};

export default MovieForm;