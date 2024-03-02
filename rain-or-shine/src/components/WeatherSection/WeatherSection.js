import React, { useState } from 'react';
import WeatherSectionHeader from './WeatherSectionHeader';
import WeatherCardDay from './WeatherCards/WeatherCardDay';
import WeatherCardHour from './WeatherCards/WeatherCardHour';
import './styles/WeatherSection.scss';

const WeatherSection = () => {
    const [forecastType, setForecastType] = useState('7-day'); // For toggling between views

    // Placeholder data
    const dayData = [
        { day: 'Monday', description: 'Sunny', temp: '25', tempFeelsLike: '23' },
        { day: 'Tuesday', description: 'Cloudy', temp: '22', tempFeelsLike: '20' },
        // Add more days as necessary
    ];

    const hourData = [
        { day: 'Monday', hour: '10:00', temp: '20', tempFeelsLike: '18' },
        { day: 'Monday', hour: '13:00', temp: '23', tempFeelsLike: '21' },
        // Add more hours as necessary
    ];

    const onToggleForecast = (type) => {
        setForecastType(type);
    };

    return (
        <section className="weather-section">
            <WeatherSectionHeader city="City Name" onToggleForecast={onToggleForecast} />
            {forecastType === '7-day' ? (
                dayData.map((data, index) => (
                    <WeatherCardDay key={index} {...data} />
                ))
            ) : (
                hourData.map((data, index) => (
                    <WeatherCardHour key={index} {...data} />
                ))
            )}
        </section>
    );
};

export default WeatherSection;