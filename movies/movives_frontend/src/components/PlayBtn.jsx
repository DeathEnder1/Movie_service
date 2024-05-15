import React from 'react'
import './PlayBtn.css'

function PlayBtn() {
  return (
    <div className="trailer active">
        <a href="#" className="playBtn">
        <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
    </div>
  );
}

export default PlayBtn