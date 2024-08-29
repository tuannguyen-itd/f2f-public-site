import React, { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder';

const MapLeaflet = ({ location, onMapClick }) => {
  const mapRef = useRef(null);
  const userMarkerRef = useRef(null);

  const customIcon = leaflet.icon({
    iconUrl: 'theme/template/images/marker-icon.png',
    iconSize: [20, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = leaflet
        .map('map')
        .setView([location.lat, location.lng], 13);

      leaflet
        .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(mapRef.current);

      const geocoder = leaflet.Control.Geocoder.nominatim();
      leaflet.Control.geocoder({
        geocoder,
        defaultMarkGeocode: false,
        position: 'topleft',
      }).on('markgeocode', (e) => {
        const bbox = e.geocode.bbox;
        const bounds = new leaflet.LatLngBounds(
          [bbox.getSouthWest().lat, bbox.getSouthWest().lng],
          [bbox.getNorthEast().lat, bbox.getNorthEast().lng]
        );
        mapRef.current.fitBounds(bounds);

        const { center } = e.geocode;
        leaflet
          .marker(center, { icon: customIcon })
          .addTo(mapRef.current)
          .openPopup();
      }).addTo(mapRef.current);

      mapRef.current.addEventListener('click', (e) => {
        const { lat, lng } = e.latlng;
        onMapClick({ lat, lng });

        leaflet
          .marker([lat, lng], { icon: customIcon })
          .addTo(mapRef.current)
          .bindPopup(`lat: ${lat}, long: ${lng}`).openPopup();
      });
    }
  }, [onMapClick]);

  useEffect(() => {
    if (location.lat && location.lng) {
      if (userMarkerRef.current) {
        mapRef.current.removeLayer(userMarkerRef.current);
      }

      userMarkerRef.current = leaflet
        .marker([location.lat, location.lng], { icon: customIcon })
        .addTo(mapRef.current)
        .bindPopup(`lat: ${location.lat}, lng: ${location.lng}`).openPopup();

      mapRef.current.setView([location.lat, location.lng]);

      const el = userMarkerRef.current.getElement();
      if (el) {
        el.style.filter = 'hue-rotate(120deg)';
      }
    }
  }, [location, customIcon]);

  return <div id="map" style={{ height: '95vh', width: '100%' }}></div>;
};

export default MapLeaflet;
