import { TAMIL_NADU_CITIES } from '../data/companyData';
import { TamilNaduCity } from '../types';

// Haversine formula to compute great-circle distance between two coordinates in kilometers
function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function findNearestTamilNaduCity(latitude: number, longitude: number): TamilNaduCity | null {
  // Bounding box approximate check for South India / Tamil Nadu vicinity
  if (latitude < 7.5 || latitude > 14.5 || longitude < 76.0 || longitude > 81.0) {
    return null;
  }

  let closestCity: TamilNaduCity | null = null;
  let minDistance = Infinity;

  for (const city of TAMIL_NADU_CITIES) {
    const dist = getDistanceKm(latitude, longitude, city.lat, city.lng);
    if (dist < minDistance) {
      minDistance = dist;
      closestCity = city;
    }
  }

  // If closest city is within reasonable range (e.g. 75km), return it
  if (minDistance <= 80 && closestCity) {
    return closestCity;
  }

  // Otherwise if inside state bounds, still return the closest Tamil Nadu hub
  return closestCity || null;
}
