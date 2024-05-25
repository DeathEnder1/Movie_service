import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        <div style={{ backgroundColor: 'white' }}>
        {movie ? (
            <div>
            <h2>{movie.title}</h2>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        <p>Frontend URL: {frontendURL}</p>
        <iframe
            title="Google Drive Video"
            width="1100"
            height="600"
            src ={embeddableLink}
            allow="autoplay; fullsreen"
            allowFullScreen
        ></iframe>

        </div>
        
    );
};

export default GoogleDriveVideo;