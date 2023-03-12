import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import Routing from "./Routing/Routing";
import { Directions } from "../../models/Directions";

export interface MapProps {
  directions: Directions;
}

const Map: React.FC<MapProps> = (props) => {

  return (
    <MapContainer
      style={{ height: "100%", width: '100%' }}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing 
        directions={props.directions}
      />
    </MapContainer>
  );
}

export default Map;