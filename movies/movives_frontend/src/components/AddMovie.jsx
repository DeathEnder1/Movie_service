import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MovieService from '../services/MovieService';

import './MovieForm.css';
import './EditMovie.css';

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [date, setDate] = useState('');
    const [agelimit, setAgeLimit] = useState('');
    const [length, setLength] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [active, setActive]= useState('');
    const [titleimg, setTitleimg]= useState('');
    const [bgimg, setBgimg]= useState('');
    const [previewimg, setPreviewimg]= useState('');
    const [video, setVideo]= useState('');
    const [video2, setVideo2]= useState('');
    const navigate = useNavigate();

    const handleAddMovie = async (e) => {
        e.preventDefault();

        const movie = { title, year, date, agelimit, length, category, type, description, active, titleimg, bgimg, previewimg, video, video2 };
        
        try {
            await MovieService.createMovie(movie);
            setTitle('');
            setYear('');
            setDate('');
            setAgeLimit('');
            setLength('');
            setCategory('');
            setType('');
            setDescription('');
            setActive('');
            setTitleimg('');
            setBgimg('');
            setPreviewimg('');
            setVideo('');
            setVideo('');
            navigate('/movieslist');
            SecurityPolicyViolationEvent(' ');

        } catch (error) {
            console.error("There was an error creating the movie!", error);
        }
    };

    return (
       
        <div> 
            <div className='edit-movie-heading'>
                <h2>Add Movie</h2>
            </div>
            <div>
                <form className="movie-form">
            <div className="form-row">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Title Image</label>
                    <input type="text" value={titleimg} onChange={(e) => setTitleimg(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Background Image</label>
                    <input type="text" value={bgimg} onChange={(e) => setBgimg(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Preview Image</label>
                    <input type="text" value={previewimg} onChange={(e) => setPreviewimg(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Trailer</label>
                    <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Full</label>
                    <input type="text" value={video2} onChange={(e) => setVideo2(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Year</label>
                    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Date</label>
                    <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>AgeLimit</label>
                    <input type="number" value={agelimit} onChange={(e) => setAgeLimit(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Length</label>
                    <input type="text" value={length} onChange={(e) => setLength(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Category</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Type</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-row">
                    <button onClick={(e) => handleAddMovie(e)} className="submit-button">
                        Add Movie
                    </button>
                    <Link to="/movieslist" className="cancel-button btn btn-danger">
                        Cancel
                    </Link>
                </div>
            </form>
            </div>
            
        </div>
    );
};

export default AddMovie;