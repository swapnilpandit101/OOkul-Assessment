import React, { useEffect } from "react";

const Map = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      console.error("Google Maps API key is missing!");
      return;
    }

    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        initMap();
      };
    };

    window.initMap = () => {
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 19.076, lng: 72.8777 }, // Default: Mumbai
        zoom: 10,
      });
    };

    loadGoogleMaps();
  }, [apiKey]);

  return (
    <div>
      <h2>Google Map</h2>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default Map;
