import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <p>&copy; 2024 WeatherPredict. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#!">Facebook</a>
          <a href="#!">Twitter</a>
          <a href="#!">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
