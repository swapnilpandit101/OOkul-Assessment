import { XMLParser } from 'fast-xml-parser';
import { calculateLength } from './Calculations';

export async function parseKMLFile(file) {
  const text = await file.text();
  const parser = new XMLParser({ ignoreAttributes: false });

  try {
    const result = parser.parse(text);
    const elements = [];
    const document = result.kml.Document;

    if (document.Placemark) {
      const placemarks = Array.isArray(document.Placemark) ? document.Placemark : [document.Placemark];

      placemarks.forEach((placemark) => {
        if (placemark.LineString) {
          const coordinates = parseCoordsString(placemark.LineString.coordinates);
          elements.push({
            type: 'LineString',
            coordinates,
            length: calculateLength(coordinates),
          });
        }
      });
    }

    return elements;
  } catch (error) {
    throw new Error('Failed to parse KML file');
  }
}

function parseCoordsString(coordStr) {
  return coordStr
    .trim()
    .split(/\s+/)
    .map(coord => {
      const [lng, lat] = coord.split(',');
      return { lat: parseFloat(lat), lng: parseFloat(lng) };
    });
}
