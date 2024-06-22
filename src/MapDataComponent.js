import React, { useState, useEffect } from 'react';

const MapDataComponent = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await fetch('/api/receive-map-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ /* Your map data object here */ })
        });
        const data = await response.json();
        setMapData(data);
      } catch (error) {
        console.error('Error fetching map data:', error);
      }
    };

    fetchMapData();
  }, []);

  if (!mapData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cyrodiil Map</h1>
      <pre>{JSON.stringify(mapData, null, 2)}</pre>
    </div>
  );
};

export default MapDataComponent;
