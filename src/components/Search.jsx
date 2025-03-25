import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Search = ({searchTerm, setSearchTerm}) => {
    return <div className="search">
        <div>
            <i className="ri-search-line text-blue-600 text-2xl"></i>
            <input type="text" placeholder='Search through thousands of movies' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        </div>
    </div>;
};

export default Search