import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const Map = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 }); // Default center (San Francisco)
  const [locations, setLocations] = useState([]); // Store nearby locations
  const [selectedLocation, setSelectedLocation] = useState(null); // Store selected location for InfoWindow
  const [currentLocation, setCurrentLocation] = useState(null); // Store user's current location

  const mapContainerStyle = {
    width: '100%',
    height: '500px', // Adjust height as needed
  };

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
    // Fetch more places near the selected location
    fetchNearbyPlaces(location.position);
  };

  // Fetch nearby locations based on user's current location
  const fetchNearbyLocations = async () => {
    if (currentLocation) {
      // Mock function; replace with Google Places API call
      const nearbyPlaces = [
        { id: 1, name: 'Golden Gate Park', position: { lat: 37.7694, lng: -122.4862 } },
        { id: 2, name: 'Alcatraz Island', position: { lat: 37.8267, lng: -122.4229 } },
        { id: 3, name: 'Fisherman\'s Wharf', position: { lat: 37.8080, lng: -122.4177 } },
      ];
      setLocations(nearbyPlaces);
    }
  };

  // Fetch places near a selected location (mock function)
  const fetchNearbyPlaces = async (location) => {
    // Replace this mock with actual API call to get places near the selected location
    const nearbyPlaces = [
      { id: 1, name: 'Place A', position: { lat: location.lat + 0.01, lng: location.lng + 0.01 } },
      { id: 2, name: 'Place B', position: { lat: location.lat - 0.01, lng: location.lng - 0.01 } },
    ];
    setLocations(nearbyPlaces);
  };

  // Get current user location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentLocation(userLocation);
        setMapCenter(userLocation);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    fetchNearbyLocations();
  }, [currentLocation]);

  return (
    <LoadScript > {/*googleMapsApiKey={YOUR_GOOGLE_MAPS_API_KEY} INSIDE LOADSCRIPT TAG */}
      <div className="relative">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">Explore Nearby Attractions</h2>
        <button
          onClick={getCurrentLocation}
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md shadow-md"
        >
          Locate Me
        </button>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={12}
          onClick={() => setSelectedLocation(null)} // Close InfoWindow on map click
        >
          {locations.map(location => (
            <Marker
              key={location.id}
              position={location.position}
              onClick={() => handleMarkerClick(location)}
            />
          ))}
          
          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.position}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div>
                <h3 className="text-lg font-semibold">{selectedLocation.name}</h3>
                <p>Click to see nearby attractions.</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Map;
