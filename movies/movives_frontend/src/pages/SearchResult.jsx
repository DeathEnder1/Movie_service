// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Card from './Card'; 

// function SearchResults  ({searchResults, onPlayClick})  {
//     const { keyword } = useParams();
//     const [searchResults, setSearchResults] = useState([]);
    
//     useEffect(() => {
//         const fetchSearchResults = async () => {
//             try {
//                 const response = await fetch(`http://localhost:8080/movies/search/${keyword}`);
//                 const data = await response.json();
//                 setSearchResults(data);
//             } catch (error) {
//                 console.error('Error fetching search results:', error);
//             }
//         };

//         fetchSearchResults();
//     }, [keyword]);

//     return (
//         <div style={{paddingTop:'100px', color:'white'}}>
//             <h2 style={{paddingBottom:'50px',}}>Search Results for: {keyword}</h2>
//             <ul>
//                 {searchResults && searchResults.length > 0 ? (
//                     searchResults.map((movie) => (
//                         <div className="col-lg-2 col-md-4 col-sm-6">
//                             <div className="movie-card">
//                                 <img src={movie.previewimg} alt="Preview_Image" className='img-fluid' />
//                                 <p>{movie.length} | {movie.category}</p>
//                                 <div className="content">
//                                     <h4>{movie.title}</h4>
//                                     <div className="card-icons">
//                                         <ion-icon name="add-outline"></ion-icon>
//                                         <ion-icon name="play-outline" onClick={handlePlayClick}></ion-icon>
//                                     </div>
//                                 </div>
//                             </div>  
//                         </div>
//                     ))
//                 ) : (
//                     <li>No results found</li>
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default SearchResults;

// SearchResults.jsx
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
        // <div style={{ paddingTop: '100px', color: 'white' }}>
        //     <h2 style={{ paddingBottom: '50px' }}>Search Results for: {keyword}</h2>
        //     <div className="row">
        //         {searchResults && searchResults.length > 0 ? (
        //             searchResults.map((movie) => (
        //                 <Card key={movie.id} movie={movie} movieId={movie.id} onPlayClick={handlePlayClick} />
        //             ))
        //         ) : (
        //             <p>No results found</p>
        //         )}
        //     </div>
        // </div>
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