import React from 'react';
import './styles/SunriseSunsetCard.scss';
import sunnyIcon from '../../assets/icons/sunny.png'; 

const SunriseSunsetCard = ({ sunrise, sunset }) => {
    const formatTime = (timestamp) => timestamp ? new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A';

    return (
        <div className="sunrise-sunset-card">
            <img src={sunnyIcon} alt="Sunrise and Sunset" />
            <div>
                <h3>Sunrise & Sunset</h3>
                <p>Sunrise: {formatTime(sunrise)}</p> 
                <p>Sunset: {formatTime(sunset)}</p>
            </div>
        </div>
    );
};

export default SunriseSunsetCard;