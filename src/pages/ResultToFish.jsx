import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";

const ResultToFish = () => {
  const { state } = useLocation();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (state?.ubicacion) {
      const { latitud, longitud } = state.ubicacion;
      getWeather(latitud, longitud)
        .then((data) => setWeather(data))
        .catch((err) => console.error("Vaya, parece que no ha cargado", err));
    }
  }, [state]);

  if (!state) {
    return <p>No se han cargado los datos</p>;
  }

  const { fecha, especie, ubicacion } = state;

  return (
    <>
      <div id="containerResults">
        <h1>Resultados para Pescar</h1>
        <div id="resultToFish">
          <p><strong>Fecha:</strong> {fecha}</p>
          <p><strong>Especie:</strong> {especie}</p>
          <p><strong>Ubicación:</strong> Lat: {ubicacion.latitud}, Lng: {ubicacion.longitud}</p>
        </div>
      </div>

      {weather && (
        <div id="weather-info" className="mt-4">
          <h4>Condiciones Climáticas</h4>
          <div id="weather-results">
            <p><strong>Temperatura:</strong> {weather.main.temp} °C</p>
            <p><strong>Presión:</strong> {weather.main.pressure} hPa</p>
            <p><strong>Viento:</strong> {weather.wind.speed} m/s</p>
            <p><strong>Clima:</strong> {weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultToFish;
