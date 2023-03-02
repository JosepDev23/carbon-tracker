import L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';


const Routing = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

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

  }, [map])

  return (<></>)
}

export default Routing;