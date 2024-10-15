import React from 'react';

const HourlyForecast = ({ forecast }) => {
  return (
    <section className="p-4 bg-gray-100">
      <h2 className="text-2xl mb-4">Hourly Forecast</h2>
      <div className="flex space-x-4 overflow-x-scroll">
        {forecast.map((hour, index) => (
          <div key={index} className="p-2 bg-blue-300 rounded">
            <h3>{hour.time}</h3>
            <p>{hour.temp}°C</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourlyForecast;
