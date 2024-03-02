import React from 'react';
import './styles/SearchBar.scss'

const SearchBar = ({ onSearchChange }) => {
    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Search for a city"
            onChange={onSearchChange}
        />
    );
};

export default SearchBar;