import React, {useState, useEffect} from 'react';

import MovieContent from '../components/MovieContent';
import MovieData from '../components/MovieData';
import PlayBtn from '../components/PlayBtn';

import bgImg from '../images/bg-the-covenant.jpeg'

import './Banner.css';
import MovieSwiper from '../components/MovieSwiper';


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

  return (
    <div className="Banner">
      <div className="movie">
        <img src={bgImg} alt="Background Image" className="bgImg active" />
        <div className="container-fuild">
          <div className="row">
            {/* Content movie is here */}
            <div className="col-lg-6 col-md-12">
              <MovieContent />
            </div>
            {/* Data movie is here */}
            <div className="col-lg-6 col-md-12">
              <MovieData />
              <PlayBtn />
            </div>
          </div>
        </div>
      </div>
      {movies && movies.length>0 && <MovieSwiper slides={movies}/>}
      
    </div>
  )
}

export default Banner