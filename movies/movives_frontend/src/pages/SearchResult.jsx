import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

function SearchResults({ }) {
    const { keyword } = useParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch(`http://localhost:8080/movies/search/${keyword}`);
                const data = await response.json();
                setSearchResults(data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [keyword]);

    const handlePlayClick = movieId => {
        window.location.href = `/movies/${movieId}`;
    };

    return (
        <section id="schedule" className='schedule'>
            <div className="container-fuild">
                <div className="row">
                    <h4 className='section-tittle'>Search Results for: "{keyword}"</h4>
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

export default SearchResults;