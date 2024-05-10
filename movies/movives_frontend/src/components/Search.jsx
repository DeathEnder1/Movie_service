import React from 'react'
import './Search.css';

function Search() {
  return (
    <div className='Search'>
        <input type='text' placeholder='Search'></input> <ion-icon name="search-outline"></ion-icon>
    </div>
  )
}

export default Search