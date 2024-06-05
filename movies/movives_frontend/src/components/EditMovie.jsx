// EditMovie.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieForm from './MovieForm';
import { useParams, useNavigate , Link} from 'react-router-dom';
import './EditMovie.css';
import MovieService from '../services/MovieService';

const EditMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [date, setDate] = useState('')
    const [agelimit, setAgeLimit] = useState('')
    const [length, setLength] = useState('')
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        fetchMovie();
    }, []);

    const fetchMovie = async () => {
        try{
            const response = await axios.get(`http://localhost:8080/movies/${id}`);
            setTitle(response.data.title);
            setYear(response.data.year);
            setDate(response.data.date);
            setAgeLimit(response.data.agelimit);
            setLength(response.data.length);
            setCategory(response.data.category);
            setType(response.data.type);
            setDescription(response.data.description);  
        }catch (error) {
            console.error("There was an error fetching the movie!", error);
        }
    };

    const handleEditMovie = async (e) => {
        e.preventDefault();
        const movie = { title,year,date,agelimit,length,category,type,description };
        try {
            await MovieService.updateMovie(id, movie);
            alert('Movie updated successfully');
            navigate('/admin');
        } catch (error) {
            console.error("There was an error updating the movie!", error);
        }
    };

    return (
        <div>
            <h2>Edit Movie</h2>
            <form>
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
                    <input type="number" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label>AgeLimit</label>
                    <input type="number" value={agelimit} onChange={(e) => setAgeLimit(e.target.value)} />
                </div>
                <div>
                    <label>Length</label>
                    <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
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
                <button onClick={(e) => handleEditMovie(e) }>Update Movie</button>
                <Link to="/movieslist" className="btn btn-danger"> Cancel </Link>
            </form>
        </div>
    );
};

export default EditMovie;
