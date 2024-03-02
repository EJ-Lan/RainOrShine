import React from 'react';
import './styles/WeatherCardHour.scss'; 

const WeatherCardHour = ({ day, hour, temp, tempFeelsLike }) => {
  return (
    <div className="weather-card-hour">
      <h4>{`${day}, ${hour}`}</h4>
      <p>Temp: {temp}°C, Feels like {tempFeelsLike}°C</p>
    </div>
  );
};

export default WeatherCardHour;