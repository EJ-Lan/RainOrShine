import React from 'react';
import './styles/SunriseSunsetCard.scss';
import sunnyIcon from '../../assets/icons/sunny.png';

const SunriseSunsetCard = () => {
    return (
      <div className="sunrise-sunset-card">
        <img src={sunnyIcon} alt="Sunrise and Sunset" />
        <div>
          <h3>Sunrise & Sunset</h3>
          <p>Sunrise: 6:00 AM</p> 
          <p>Sunset: 8:00 PM</p>
        </div>
      </div>
    );
  };
  
  export default SunriseSunsetCard;