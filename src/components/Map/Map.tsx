import { MapContainer, TileLayer } from "react-leaflet";
import L from 'leaflet';

const Map: React.FC = () => {
  let map = L.map('map');

  return (
    <MapContainer
      style={{ height: "100%", width: '100%' }}
      center={[51.505, -14.09]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;