import L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { Directions } from "../../../models/Directions";
import node_geocoder from "node-geocoder";

export interface RoutingProps {
  directions: Directions;
}

const Routing: React.FC<RoutingProps> = (props) => {
  const map = useMap();

  let origin: node_geocoder.Entry[];
  let destination: node_geocoder.Entry[];

  const geocoder = node_geocoder({
    provider: 'openstreetmap'
  })

  useEffect(() => {
    if (!map) return;

    handleControl();

  }, [map]);

  const handleControl = async () => {

    await handleDirections();

    if (origin && destination
      && origin[0].latitude && origin[0].longitude
      && destination[0].latitude && destination[0].longitude) {
      const control = L.routing.control({
        waypoints: [
          L.latLng(origin[0].latitude, origin[0].longitude),
          L.latLng(destination[0].latitude, destination[0].longitude)
        ],
        lineOptions: {
          styles: [{
            color: 'black',
            opacity: 1,
            weight: 2
          }],
          extendToWaypoints: false,
          missingRouteTolerance: 0
        },
        show: false
      }).addTo(map);
    } else {
      const control = L.routing.control({
        waypoints: [L.latLng(39.2012627, -0.3866468), L.latLng(39.4697065, -0.3763353)],
        lineOptions: {
          styles: [{
            color: 'black',
            opacity: 1,
            weight: 2
          }],
          extendToWaypoints: false,
          missingRouteTolerance: 0
        },
        show: false
      }).addTo(map);
    };
  };

  const handleDirections = async () => {
    if (props.directions.destination !== '' && props.directions.origin !== '') {
      origin = await geocoder.geocode('albalat de la ribera');
      destination = await geocoder.geocode('benicull del xuquer');
    }
  }

  return (<></>)
}

export default Routing;