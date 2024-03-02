import React, { useState, useEffect } from 'react';
import WeatherSectionHeader from './WeatherSectionHeader';
import WeatherCardDay from './WeatherCards/WeatherCardDay';
import WeatherCardHour from './WeatherCards/WeatherCardHour';
import './styles/WeatherSection.scss';
import { fetchGeocoding, fetchForecast } from '../../utils/api';

const WeatherSection = ({ city }) => {
    const [forecastData, setForecastData] = useState(null);
    const [forecastType, setForecastType] = useState('daily');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const geocodeData = await fetchGeocoding(city);
                if (geocodeData && geocodeData.length > 0) {
                    const { lat, lon } = geocodeData[0];
                    const forecastWeatherData = await fetchForecast(lat, lon);
                    setForecastData(forecastWeatherData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [city]);

    const onToggleForecast = (type) => {
        setForecastType(type);
    };

    return (
        <section className="weather-section">
            <WeatherSectionHeader city={city} forecastType={forecastType} onToggleForecast={onToggleForecast} />
            
            {forecastType === 'daily' && forecastData?.list?.filter((_, index) => index % 8 === 0).map((item, index) => (
                <WeatherCardDay
                    key={index}
                    day={new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}
                    description={item.weather[0].description}
                    temp={Math.round(item.main.temp)}
                    tempFeelsLike={Math.round(item.main.feels_like)}
                />
            ))}
            
            {forecastType === 'hourly' && forecastData?.list?.slice(0, 24).map((item, index) => (
                <WeatherCardHour
                    key={index}
                    dateTime={new Date(item.dt * 1000).toLocaleString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                    temp={Math.round(item.main.temp)}
                    tempFeelsLike={Math.round(item.main.feels_like)}
                />
            ))}
        </section>
    );
};

export default WeatherSection;
