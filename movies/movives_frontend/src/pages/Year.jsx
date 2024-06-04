import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

function Year({ }) {
    const { year } = useParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch(`http://localhost:8080/movies/year/${year}`);
                const data = await response.json();
                setSearchResults(data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [year]);

    const handlePlayClick = movieId => {
        window.location.href = `/movies/${movieId}`;
    };

    return (
        <section id="schedule" className='schedule'>
            <div className="container-fuild">
                <div className="row">
                    <h4 className='section-tittle'>Year: "{year}"</h4>
                </div>
                <div className="row mt-5">
                {searchResults && searchResults.length > 0 ? (
                    searchResults.map((movie) => (
                        <Card key={movie.id} movie={movie} movieId={movie.id} onPlayClick={handlePlayClick} />
                        ))
                    ) : (
                        <p style={{color:'white'}}>No results found</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Year;