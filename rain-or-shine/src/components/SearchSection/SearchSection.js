import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import './styles/SearchSection.scss';

const SearchSection = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = () => {
        onSearch(searchTerm); 
    };

    return (
        <section className="search-section">
            <h2>Search A City</h2>
            <div className="search-container">
                <SearchBar onSearchChange={handleSearchChange} />
                <SearchButton onSearchSubmit={handleSearchSubmit} />
            </div>
        </section>
    );
};

export default SearchSection;