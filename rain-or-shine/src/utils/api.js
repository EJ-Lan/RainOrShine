const API_BASE_URL = 'https://api.openweathermap.org';
const GEOCODING_API_URL = `${API_BASE_URL}/geo/1.0/direct`;
const WEATHER_API_URL = `${API_BASE_URL}/data/2.5/weather`;
const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * Fetches the latitude and longitude for a given city name.
 *
 * @param cityName
 * @param limit
 * @returns {Promise<any>}
 */
export const fetchGeocoding = async (cityName, limit = 5) => {
    const url = `${GEOCODING_API_URL}?q=${cityName}&limit=${limit}&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch geolocation data: ${response.statusText}`);
        }
        return response.json(); // Returns an array of locations
    } catch (error) {
        console.error("Error fetching geolocation data:", error);
        throw error;
    }
};

export const fetchCurrentWeather = async (lat, lon) => {
    const url = `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch current weather data: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching current weather data:" , error);
        throw error;
    }
}
