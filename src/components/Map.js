import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ mapHeight, mapWidth }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const coordinates = [47.55952037319517, -52.754913427285835]

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            // Initialize map only if not already initialized
            mapInstance.current = L.map(mapRef.current).setView(coordinates, 16); 

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(mapInstance.current);

            // Define default icon
            const defaultIcon = L.icon({
                iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // Default Leaflet icon
                iconSize: [25, 41], // Size of the icon
                iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
                popupAnchor: [1, -34] // Point from which the popup should open relative to the iconAnchor
            });

            // Place a marker at the desired location with the default icon
            const markerPosition = coordinates; 
            L.marker(markerPosition, { icon: defaultIcon }).addTo(mapInstance.current)
                //.bindPopup('Pinned Location') // Optional Pop up
                .openPopup();
        }

        // Cleanup function to remove map instance
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    return <div id="map" style={{ height: mapHeight, width: mapWidth }} ref={mapRef}></div>;
}

export default Map;
