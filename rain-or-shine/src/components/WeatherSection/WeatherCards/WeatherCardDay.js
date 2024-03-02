import React from 'react';
import './styles/WeatherCardDay.scss'; 

const WeatherCardDay = ({ day, description, temp, tempFeelsLike }) => {
  return (
    <div className="weather-card-day">
      <h3>{day}</h3>
      <p>{description}</p>
      <p>Temp: {temp}°C</p>
      <p>Feels Like: {tempFeelsLike}°C</p>
    </div>
  );
};

export default WeatherCardDay;