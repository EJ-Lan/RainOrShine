import React, { useState, useEffect } from 'react';
import CloudsCard from './CloudsCard';
import SunriseSunsetCard from './SunriseSunsetCard';
import './styles/Sidebar.scss';
import { fetchForecast, fetchGeocoding } from '../../utils/api';

const Sidebar = ({ city }) => {
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const geocodeData = await fetchGeocoding(city);
                if (geocodeData.length > 0) {
                    const { lat, lon } = geocodeData[0];
                    const data = await fetchForecast(lat, lon);
                    setForecastData(data);
                }
            } catch (error) {
                console.error("Error fetching forecast data:", error);
            }
        };

        fetchData();
    }, [city]);

    const todayData = forecastData?.list[0];

    return (
        <aside className="sidebar">
            <CloudsCard cloudiness={todayData?.clouds?.all} />
            <SunriseSunsetCard sunrise={todayData?.sys?.sunrise} sunset={todayData?.sys?.sunset} />
        </aside>
    );
};

export default Sidebar;
