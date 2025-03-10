// src/utils/Calculations.jsx

// Function to calculate the total path length in kilometers
export function calculateLength(coordinates) {
    let length = 0;
  
    for (let i = 0; i < coordinates.length - 1; i++) {
      length += getDistanceFromLatLonInKm(
        coordinates[i].lat,
        coordinates[i].lng,
        coordinates[i + 1].lat,
        coordinates[i + 1].lng
      );
    }
  
    return length;
  }
  
  // Haversine formula to calculate distance between two latitude/longitude points
  function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
    const R = 6371; 
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c;
  }
  
  // Convert degrees to radians
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  