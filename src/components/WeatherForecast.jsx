import React from 'react';

const WeatherForecast = ({ weather }) => {
  if (!weather) {
    return null; // Return null if weather data is not available yet
  }

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-2">Current Weather</h2>
      <div className="flex items-center">
        <img src={`/icons/${weather.condition.toLowerCase()}.png`} alt={weather.condition} className="h-10 w-10 mr-2" />
        <div>
          <p className="font-semibold text-lg">{weather.temperature}°C</p> {/* Increased font size */}
          <p className="text-base">{weather.description}</p> {/* Adjust font size as needed */}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
