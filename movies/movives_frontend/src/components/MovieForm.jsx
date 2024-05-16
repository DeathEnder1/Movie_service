import React, { useState } from 'react';

const MovieForm = ({ initialData = {}, onSubmit }) => {
    const [movie, setMovie] = useState(initialData);

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

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={movie.title || ''}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                type="number"
                name="year"
                value={movie.year || ''}
                onChange={handleChange}
                placeholder="Year"
            />
            <input
                type="number"
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
                placeholder="Agelimit"
            />
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
            <textarea
                name="description"
                value={movie.description || ''}
                onChange={handleChange}
                placeholder="Description"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MovieForm;
