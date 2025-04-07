import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMapComponent = () => {
  const mapRef = useRef(null);
  const API_KEY = "YOUR_API_KEY"; // Replace with your Google Maps API Key

  useEffect(() => {
    const loader = new Loader({
      apiKey: API_KEY,
      version: "beta", // Required for AdvancedMarkerElement
      libraries: ["marker"],
    });

    loader.load().then(() => {
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
        zoom: 12,
        mapId: "YOUR_MAP_ID", // Optional: Create a custom map style in Google Cloud
      });

      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat: 37.7749, lng: -122.4194 },
        map: map,
        title: "San Francisco",
      });
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl h-96 bg-white shadow-lg rounded-lg">
        <div ref={mapRef} className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default GoogleMapComponent;

