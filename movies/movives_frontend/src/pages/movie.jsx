import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "./movie.css";

const GoogleDriveVideo = ({ match }) => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
        const fetchMovieDetails = async () => {
            try {
            const response = await axios.get(`http://localhost:8080/movies/${id}`);
            setMovie(response.data);
            } catch (error) {
            console.error('Error fetching movie details: ', error);
            }
        };

        fetchMovieDetails();
        }
    }, [id]);

    const movie_full = movie ? movie.video2 : '';
    const fileId = movie_full ? movie_full.match(/\/file\/d\/(.+?)\//)[1] : '';
    const embeddableLink = fileId
        ? `https://drive.google.com/file/d/${fileId}/preview`
        : '';

    const frontendURL = movie ? `/movies/${movie.title.replace(/\s+/g, '-')}` : '';

    return (
        <div style={{ backgroundColor: '#011' , padding:'100px',width: '70%', margin: '0 auto'}}>
        {movie ? (
            <div className='container'>
                <div className='movie-content'>
                    <div className='left-content'>
                        <img src={movie.previewimg} alt="Movie Title" className="movie-title" />
                    </div>

                    <div className='right-content'>
                        <img src={movie.titleimg} alt="Movie Title" className="movie-title" />
                        <h2 style={{padding:'10px'}}>{movie.title}</h2>
                        {movie.genres ? (
                            <p>Thể loại: {movie.genres.map((genre, index) => (
                                index === 0 ? genre : `, ${genre}`
                            ))}</p>
                        ) : null}
                        <p>Thời lượng: {movie.length}</p>
                    </div>
                </div>
                
                <div className="description">
                    <h2 className='title'>DESCRIPTION</h2>
                    <p>{movie.description}</p>
                </div>                
            </div>
        ) : (
            <p>Loading...</p>
        )}
        {/* <p>Frontend URL: {frontendURL}</p> */}
        <iframe
            title="Google Drive Video"
            width="1140"
            height="600"
            src ={embeddableLink}
            allow="autoplay; fullsreen"
            allowFullScreen
        ></iframe>

        </div>
        
    );
};

export default GoogleDriveVideo;