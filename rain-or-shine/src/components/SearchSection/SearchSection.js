import React from 'react';
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import './styles/SearchSection.scss';

const SearchSection = () => {
    return (
        <section className="search-section">
            <h2>Search A City</h2>
            <div className="search-container">
                <SearchBar/>
                <SearchButton/>
            </div>
        </section>
    );
};

export default SearchSection;