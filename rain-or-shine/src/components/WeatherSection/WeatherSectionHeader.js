import React from 'react';
import './styles/WeatherSectionHeader.scss';

const WeatherSectionHeader = ( { city, onToggleForecast }) => {
    return (
        <div className="weather-section-header">
            <h2>{city}</h2>
            <button onClick={() => onToggleForecast('7-day')}>7-Day</button>
            <button onClick={() => onToggleForecast('24-hour')}>24-Hour</button>
        </div>
    );
};

export default WeatherSectionHeader;