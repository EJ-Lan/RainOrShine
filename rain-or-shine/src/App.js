import React, {useState} from 'react';
import Header from './components/Header/Header';
import SearchSection from "./components/SearchSection/SearchSection";
import SideBar from "./components/Sidebar/SideBar";
import WeatherSection from "./components/WeatherSection/WeatherSection";
import './styles/App.scss';

const App = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="app-grid">
            <Header toggleTheme={toggleTheme} />
            <SearchSection />
            <SideBar />
            <WeatherSection />
        </div>
    );
};

export default App;