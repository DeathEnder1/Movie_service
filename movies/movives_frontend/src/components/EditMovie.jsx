
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieForm from './MovieForm';
import { useParams, useNavigate , Link} from 'react-router-dom';
import './EditMovie.css';
import MovieService from '../services/MovieService';

const EditMovie = () => {
    const { id } = useParams();
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
            setTitleimg(prevTitleimg => prevTitleimg || response.data.titleimg);
            setPreviewimg(response.data.previewimg);
            setBgimg(response.data.bgimg);
            setVideo(response.data.video);
            setVideo2(response.data.video2);
        }catch (error) {
            console.error("There was an error fetching the movie!", error);
        }
    };

    const handleEditMovie = async (e) => {
        e.preventDefault();
        const movie = { title,year,date,agelimit,length,category,type,description, titleimg, bgimg, previewimg, video, video2 };
        try {
            await MovieService.updateMovie(id, movie);
            alert('Movie updated successfully');
            navigate('/movieslist');
        } catch (error) {
            console.error("There was an error updating the movie!", error);
        }
    };

    return (
        <div>
            <div className='editmovie-header'>
                <div>
                    <Link to="/" className="editmovie-button"><ion-icon name="home-outline"></ion-icon></Link>
                    <Link to="/movieslist" className="editmovie-button"><ion-icon name="arrow-back-outline"></ion-icon></Link>
                </div>
                <h2 className="editmovie-title">Edit movie</h2>
            </div>

            <div>
    <form className="movie-form">
        <div className="form-row">
            
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Title</label>
        </div>
        <div className="form-row">
            
            <input type="text" value={titleimg} onChange={(e) => setTitleimg(e.target.value)} />
            <label>Title Image</label>
        </div>
        <div className="form-row">
            
            <input type="text" value={bgimg} onChange={(e) => setBgimg(e.target.value)} />
            <label>Background Image</label>
        </div>
        <div className="form-row">
            
            <input type="text" value={previewimg} onChange={(e) => setPreviewimg(e.target.value)} />
            <label>Preview Image</label>
        </div>
        <div className="form-row">
            
            <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} />
            <label>Trailer</label>
        </div>
        <div className="form-row">
            
            <input type="text" value={video2} onChange={(e) => setVideo2(e.target.value)} />
            <label>Full</label>
        </div>
        <div className="form-row">
            
            <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
            <label>Year</label>
        </div>
        <div className="form-row">
            
            <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
            <label>Date</label>
        </div>
        <div className="form-row">
            
            <input type="text" value={agelimit} onChange={(e) => setAgeLimit(e.target.value)} />
            <label>Age Limit</label>
        </div>
        <div className="form-row">
            
            <input type="text" value={length} onChange={(e) => setLength(e.target.value)} />
            <label>Length</label>
        </div>
        <div className="form-row">
            
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            <label>Category</label>
        </div>
        <div className="form-row">
            
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
            <label>Type</label>
        </div>
        <div className="form-row">
            
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <label>Description</label>
        </div>
        <div className="form-row">
            <button onClick={(e) => handleEditMovie(e)} className="submit-button">Update Movie</button>
            <Link to="/movieslist" className="cancel-button">Cancel</Link>
        </div>
    </form>
</div>

            
        </div>
    );
};

export default EditMovie;
