import { DirectionsRenderer, GoogleMap, Marker } from '@react-google-maps/api';

const center = { lat: 48.8584, lng: 2.2945 };

interface GoogleMapsProps {
  directionsResponse?: google.maps.DirectionsResult;
}

const GoogleMaps: React.FC<GoogleMapsProps> = (props) => {

  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={center} />
      {props.directionsResponse && <DirectionsRenderer directions={props.directionsResponse} />}
    </GoogleMap>
  );
};

export default GoogleMaps;
