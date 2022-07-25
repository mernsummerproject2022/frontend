import React from 'react';

const Searchbar = () => {
    return ( 
        <div className='search'>
            <label>Search by:</label>
            <select>
                <option>date</option>
                <option>title</option>
                <option>language</option>
                <option>location</option>
            </select>
        </div>
    )
};

export default Searchbar;