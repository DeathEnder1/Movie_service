import React from 'react'
import titleImg from '../images/image.png'

import './MovieContent.css';
import Button from './Button';

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
        <div className="button">
          <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} name='Book' color='#ff3700' bgColor="#ffffff" />
          <Button icon={<ion-icon name="add-outline"></ion-icon>} name='My list' />
        </div>
    </div>
  )
}

export default MovieContent