import React, {useState, useEffect} from 'react';

import MovieContent from '../components/MovieContent';
import MovieData from '../components/MovieData';
import PlayBtn from '../components/PlayBtn';
import MovieSwiper from '../components/MovieSwiper';


import './Banner.css';

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:8080/movies')
    .then(res=>res.json())
    .then(data => setMovies(data))
    .catch(e=>console.log(e.message));
  };

  useEffect(()=>{
    fetchData()
  }, [])

  const handleSlideChange = id =>{
    const newMovies = movies.map(movie => {
      movie.active = false;
      if(movie._id === id){
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovies);
  };

  return (
    <div className="Banner">
      {
        movies && movies.length>0 && movies.map(movie=>(
          <div className="movie">
            <img src={movie.bgimg} alt="Background_Image" className={`bgImg ${movie.active ? 'active' : undefined}`} />
            <div className="movie-item">
              {/* Content movie is here */}
              <div className="movie-item-content">
                <MovieContent movie={movie}/>
              </div>
              {/* Data movie is here */}
              <div className="movie-item-data">
                <MovieData movie={movie}/>
                <PlayBtn movie={movie}/>
              </div>
            </div>
          </div>
        ))
      }

      {movies && movies.length>0 && <MovieSwiper slides={movies} slideChange={handleSlideChange}/>}
      
    </div>
  )
}

export default Banner