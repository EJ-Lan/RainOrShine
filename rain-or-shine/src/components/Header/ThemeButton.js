import React from 'react';
import './styles/ThemeButton.scss';
import sunIcon from '../../assets/icons/sun.png';

const ThemeButton = ({ toggleTheme }) => {
    return (
        <button onClick={toggleTheme} className="theme-toggle-button">
            <img src={sunIcon} alt="Toggle theme" />
        </button>
    );
};

export default ThemeButton;