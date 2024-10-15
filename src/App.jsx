import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WeatherForecast from './components/WeatherForecast';
import DailyForecast from './components/DailyForecast';
import HourlyForecast from './components/HourlyForecast';
import InteractiveMap from './components/InteractiveMap';
import Footer from './components/Footer';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [city, setCity] = useState(''); // State to store the user's selected city

  const apiKey = '5318e8f880639c3905da1c3fd93df643';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);

        setWeather({
          temperature: weatherResponse.data.main.temp,
          condition: weatherResponse.data.weather[0].main,
          description: weatherResponse.data.weather[0].description,
        });

        const daily = forecastResponse.data.list.filter((item, index) => index % 8 === 0).map(item => ({
          day: new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short' }),
          temp: item.main.temp,
        }));
        
        const hourly = forecastResponse.data.list.slice(0, 8).map(item => ({
          time: new Date(item.dt_txt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          temp: item.main.temp,
        }));

        setDailyForecast(daily);
        setHourlyForecast(hourly);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (city) { // Fetch weather data only if city is not empty
      fetchWeatherData();
    }
  }, [apiKey, city]);

  return (
    <div>
      <Header onSearch={setCity} /> {/* Pass setCity function to the Header component */}
      <HeroSection />
      <WeatherForecast weather={weather} />
      <DailyForecast forecast={dailyForecast} />
      <HourlyForecast forecast={hourlyForecast} />
      <InteractiveMap />
      <Footer />
    </div>
  );
};

export default App;
