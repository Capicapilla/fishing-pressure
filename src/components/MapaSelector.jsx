import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";
import L from "leaflet";

const SearchControl = ({ setPosition, onLocationSelect }) => {
  const map = useMap();

  useEffect(() => {

    class MixedSearchProvider extends OpenStreetMapProvider {
      async search({ query }) {
        const coordRegex = /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/;
        if (coordRegex.test(query)) {
          const [lat, lon] = query.split(",").map(Number);
          return [
            {
              x: lon,
              y: lat,
              label: `Coordenadas: ${lat}, ${lon}`,
              bounds: L.latLngBounds(L.latLng(lat, lon), L.latLng(lat, lon)),
              raw: { lat, lon },
            },
          ];
        }

        return super.search({ query });
      }
    }

    const provider = new MixedSearchProvider();

    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      autoClose: true,
      keepResult: true,
      showMarker: false,
    });

    map.addControl(searchControl);

    map.on("geosearch/showlocation", (result) => {
      const lat = result.location.raw?.lat ?? result.location.y;
      const lon = result.location.raw?.lon ?? result.location.x;
      const newPos = [lat, lon];
      setPosition(newPos);
      onLocationSelect(newPos);
    });

    return () => {
      map.removeControl(searchControl);
    };
  }, [map, setPosition, onLocationSelect]);

  return null;
};

const MapaSelector = ({ onLocationSelect }) => {
  const [position, setPosition] = useState([39.377609, -4.244074]);
  const mapRef = useRef();

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const newPos = [e.latlng.lat, e.latlng.lng];
        setPosition(newPos);
        onLocationSelect(newPos);
      },
    });
    return null;
  };
  
  return (
    <MapContainer
      center={position}
      zoom={8}
      style={{ height: "400px", width: "100%" }}
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} />
      <MapEvents />
      <SearchControl setPosition={setPosition} onLocationSelect={onLocationSelect} />
    </MapContainer>
  );
};

export default MapaSelector;
