import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { latLngDefault } from '../config/constants';

const Map = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });
  const { location, mapStyle } = props;

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyle}
      zoom={12}
      center={{ lat: location?.lat || latLngDefault.lat, lng: location?.lng || latLngDefault.lng }}>
      <Marker
        position={{ lat: location?.lat || latLngDefault.lat, lng: location?.lng || latLngDefault.lng }}
      >
      </Marker>
    </GoogleMap>
  ) : <></>;
};

export default Map;
