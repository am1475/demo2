import React from 'react';

const DailyForecast = ({ forecast }) => {
  return (
    <section className="p-4 bg-white">
      <h2 className="text-2xl mb-4">Daily Forecast</h2>
      <div className="grid grid-cols-7 gap-4">
        {forecast.map((day, index) => (
          <div key={index} className="p-2 bg-blue-200 rounded">
            <h3>{day.day}</h3>
            <p>{day.temp}°C</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyForecast;
