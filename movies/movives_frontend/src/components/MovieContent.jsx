import React from 'react'
import titleImg from '../images/image.png'

import './MovieContent.css';

function MovieContent() {
  return (
    <div className="content active">
        <img src={titleImg} alt="Movie Title" className="movie-title" />
        <h4>
            <span>Year</span>
            <span><i>Age</i></span>
            <span>Length</span>
            <span>Category</span>
        </h4>
        <p>Địt con mẹ thằng Thành thích ăn bún cua vcl.</p>
        <div className="button">Button</div>
    </div>
  )
}

export default MovieContent