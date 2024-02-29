import React from 'react';
import './styles/Header.scss';
import ThemeButton from "./ThemeButton";

const Header = ({ toggleTheme }) => {
    return (
        <header className="header">
            <h1>RainOrShine</h1>
            <ThemeButton toggleTheme={toggleTheme} />
        </header>
    );
};

export default Header;