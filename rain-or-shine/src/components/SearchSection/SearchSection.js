import React from 'react';
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import './styles/SearchSection.scss';

const SearchSection = () => {
    return (
        <section className="search-section">
            <SearchBar />
            <SearchButton />
        </section>
    );
};

export default SearchSection;