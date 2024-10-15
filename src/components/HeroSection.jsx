import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo1 from '../images/logo1.jpg';
import logo2 from '../images/logo2.jpg';
import logo3 from '../images/logo3.jpeg';

const HeroSection = () => {
  const [weatherCondition, setWeatherCondition] = useState('Clear');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        setWeatherCondition(response.data.weather[0].main);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  const getImageUrl = () => {
    switch (weatherCondition) {
      case 'Clear':
        return logo1;
      case 'Clouds':
        return logo2;
      case 'Rain':
        return logo3;
      // Add more cases for other weather conditions as needed
      default:
        return '/images/default-hero.jpg'; // Default image for unknown conditions
    }
  };

  return (
    <section className="bg-cover bg-center h-96" style={{ backgroundImage: `url(${getImageUrl()})` }}>
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <h1 className="text-white text-4xl">Welcome to WeatherPredict</h1>
      </div>
    </section>
  );
};

export default HeroSection;
