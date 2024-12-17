'use client';

import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const mapOptions = {
  gestureHandling: 'greedy',
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
};

const mockData = [
  { id: 1, type: 'job', title: 'Software Engineer', company: 'Tech Co', lat: 37.7749, lng: -122.4194 },
  { id: 2, type: 'job', title: 'Data Analyst', company: 'Data Corp', lat: 40.7128, lng: -74.006 },
  { id: 3, type: 'city', name: 'Austin', cost: '$1,500/month', lat: 30.2672, lng: -97.7431 },
  { id: 4, type: 'city', name: 'Seattle', cost: '$2,000/month', lat: 47.6062, lng: -122.3321 },
];

export default function ExploreMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const filteredMarkers = mockData.filter(
    (marker) => filter === 'all' || marker.type === filter
  );

  if (loadError) return <div>Error loading Google Maps.</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="w-full h-full relative">
      {/* Filters floating above map */}
      <div className="absolute top-4 left-4 z-10 bg-sidebar p-2 rounded-md shadow-md">
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-accent text-white' : 'bg-gray-700 text-gray-200'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`px-3 py-1 rounded ${filter === 'job' ? 'bg-accent text-white' : 'bg-gray-700 text-gray-200'}`}
            onClick={() => setFilter('job')}
          >
            Jobs
          </button>
          <button
            className={`px-3 py-1 rounded ${filter === 'city' ? 'bg-accent text-white' : 'bg-gray-700 text-gray-200'}`}
            onClick={() => setFilter('city')}
          >
            Cities
          </button>
        </div>
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{ lat: 39.8283, lng: -98.5795 }}
        zoom={4}
        options={mapOptions}
      >
        {filteredMarkers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: marker.type === 'job' ? '/job-icon.png' : '/city-icon.png',
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="info-window">
              {selectedMarker.type === 'job' ? (
                <>
                  <h3 className="font-bold">{selectedMarker.title}</h3>
                  <p className="text-gray-400">{selectedMarker.company}</p>
                </>
              ) : (
                <>
                  <h3 className="font-bold">{selectedMarker.name}</h3>
                  <p className="text-gray-400">Cost of Living: {selectedMarker.cost}</p>
                </>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
