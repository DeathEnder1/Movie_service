// import React from 'react'

// import './Search.css';

// function Search() {
//   return (
//     <div className='Search'>
//         <input type='text' placeholder='Search'></input> <ion-icon name="search-outline"></ion-icon>
//     </div>
//   )
// }

// export default Search
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Search.css';

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search/${keyword}`);
    };

    return (
      <div className='Search'>
        <input
            type="text"
            placeholder="Search for movies"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    handleSearch();
                }
            }}
        />
        <ion-icon name="search-outline"></ion-icon>
      </div>
        
    );
};

export default Search;