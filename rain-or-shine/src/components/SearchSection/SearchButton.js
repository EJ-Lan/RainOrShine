import React from 'react';
import searchIcon from '../../assets/icons/search.png';
import './styles/SearchButton.scss';

const SearchButton = ({ onSearchSubmit }) => {
    return (
        <button className="search-button" onClick={onSearchSubmit}>
            <img src={searchIcon} alt="Search" />
        </button>
    );
};

export default SearchButton;