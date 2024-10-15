import React, { useEffect } from 'react';

const InteractiveMap = ({ location }) => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 10
    });

    new window.google.maps.Marker({
      position: location,
      map: map,
      title: 'PUNE'
    });
  }, [location]);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default InteractiveMap;
