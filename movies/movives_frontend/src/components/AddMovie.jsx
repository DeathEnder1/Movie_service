import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MovieForm from './MovieForm';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MovieService from '../services/MovieService';

import './MovieForm.css';
import './EditMovie.css';

const AddMovie = () => {

    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [date, setDate] = useState('')
    const [agelimit, setAgeLimit] = useState('')
    const [length, setLength] = useState('')
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate();

    const handleAddMovie =  async (e) => {
        e.preventDefault();

        const movie = {title,year,date,agelimit,length,category,type,description}
        try {
            await MovieService.createMovie(movie);
            setTitle('');
            setYear('');
            setDate(' ');
            setAgeLimit(' ');
            setLength(' ');
            setCategory(' ');
            setType(' ');
            setDescription('');
        } catch (error) {
            console.error("There was an error creating the movie!", error);
        }
    };

    return (
        <div>
            <h2>Add Movie</h2>
            <form >
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Year</label>
                    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
                <div>
                    <label>Date</label>
                    <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label>AgeLimit</label>
                    <input type="number" value={agelimit} onChange={(e) => setAgeLimit(e.target.value)} />
                </div>
                <div>
                    <label>Length</label>
                    <input type="text" value={length} onChange={(e) => setLength(e.target.value)} />
                </div>
                <div>
                    <label>Category</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div>
                    <label>Type</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button onClick={(e) => handleAddMovie(e)}>Add Movie</button>
                <Link to="/movieslist" className="btn btn-danger"> Cancel </Link>
            </form>
        </div>
        
    );
};

export default AddMovie;