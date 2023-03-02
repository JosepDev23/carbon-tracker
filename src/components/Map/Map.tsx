import { MapContainer, TileLayer, useMap } from "react-leaflet";
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Routing from "./Routing/Routing";

const Map: React.FC = () => {

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
      <Routing />
    </MapContainer>
  );
}

export default Map;