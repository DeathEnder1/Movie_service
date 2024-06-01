  import React from 'react';
  import './Card.css';


  function Card({ movie, onPlayClick }) {
    const handlePlayClick = () => {
        window.location.href = `/movies/${movie.id}`; // Chuyển id của phim cho component cha xử lý chuyển hướng
  };

      return (
          <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="movie-card">
                  <img src={movie.previewimg} alt="Preview_Image" className='img-fluid' />
                  <p style={{ paddingTop: '2vh' }}>{movie.title}</p>
                  <p>{movie.length} | {movie.category}</p>
                  <div className="content">
                      <h4>{movie.title}</h4>
                      <div className="card-icons">
                          <ion-icon name="add-outline"></ion-icon>
                          <ion-icon name="play-outline" onClick={handlePlayClick}></ion-icon>
                      </div>
                  </div>
              </div>  
          </div>
      );
  }

  export default Card;