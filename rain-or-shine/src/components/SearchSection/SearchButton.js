import React from 'react';
import searchIcon from '../../assets/icons/search.png';
import './styles/SearchButton.scss';

const SearchButton = () => {
    return (
        <button className="search-button">
            <img src={searchIcon} alt="Search" />
        </button>
    );
};

export default SearchButton;