import React from 'react';
import './styles/WeatherSectionHeader.scss';

const WeatherSectionHeader = ({ city, forecastType, onToggleForecast }) => {
    return (
        <div className="weather-section-header">
            <h2>{city}</h2>
            <button
                className={forecastType === 'daily' ? 'active' : ''}
                onClick={() => onToggleForecast('daily')}>5-Day
            </button>
            <button
                className={forecastType === 'hourly' ? 'active' : ''}
                onClick={() => onToggleForecast('hourly')}>3-Hour
            </button>
        </div>
    );
};

export default WeatherSectionHeader;