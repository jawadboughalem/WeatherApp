const API_KEY = 'dc8d2d260163a565be873de2ecdeb149';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export const fetchWeather = async (lat, lon) => {
  const url = `${BASE_URL}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    throw error;
  }
};
