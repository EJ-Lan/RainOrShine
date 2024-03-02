const API_BASE_URL = 'https://api.openweathermap.org';
const API_KEY = process.env.REACT_APP_API_KEY;


// Fetch geocoding data to convert city names to lat/lon coordinates
export const fetchGeocoding = async (cityName) => {
  const response = await fetch(`${API_BASE_URL}/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);
  if (!response.ok) throw new Error('Failed to fetch geocoding data');
  return response.json();
};

// Fetch 5-day/3-hour forecast data
export const fetchForecast = async (lat, lon) => {
  const response = await fetch(`${API_BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error('Failed to fetch forecast data');
  return response.json();
};