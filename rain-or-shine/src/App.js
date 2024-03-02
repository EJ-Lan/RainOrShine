import React, {useState} from 'react';
import Header from './components/Header/Header';
import SearchSection from "./components/SearchSection/SearchSection";
import SideBar from "./components/Sidebar/SideBar";
import WeatherSection from "./components/WeatherSection/WeatherSection";
import './styles/App.scss';


const App = () => {
    const [theme, setTheme] = useState('light');
    const [city, setCity] = useState('London');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    const handleSearch = (searchedCity) => {
        setCity(searchedCity);
    };

    return (
        <div className="app-grid">
            <Header toggleTheme={toggleTheme} />
            <SearchSection onSearch={handleSearch} />
            <SideBar city={city} />
            <WeatherSection city={city} />
        </div>
    );
};

export default App;