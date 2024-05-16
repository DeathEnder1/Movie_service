import React, {useState, useEffect} from 'react';

import MovieContent from '../components/MovieContent';
import MovieData from '../components/MovieData';
import PlayBtn from '../components/PlayBtn';
import MovieSwiper from '../components/MovieSwiper';

import './Banner.css';

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3000/Data/movieData.json')
    .then(res=>res.json())
    .then(data => setMovies(data))
    .catch(e=>console.log(e.message));
  };

  useEffect(()=>{
    fetchData()
  }, [])

  const handleSlideChange = id =>{
    console.log(id);
  }

  return (
    <div className="Banner">
      {
        movies && movies.length>0 && movies.map(movie=>(
          <div className="movie">
            <img src={movie.bgImg} alt="Background Image" className={`bgImg ${movie.active ? 'active' : undefined}`} />
            <div className="container-fuild">
              <div className="row">
                {/* Content movie is here */}
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie}/>
                </div>
                {/* Data movie is here */}
                <div className="col-lg-6 col-md-12">
                  <MovieData movie={movie}/>
                  <PlayBtn movie={movie}/>
                </div>
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