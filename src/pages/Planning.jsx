import { useForm } from "react-hook-form";
import todasLasEspecies from "../data/especies";
import { useRef, useState } from "react";
import MapaSelector from "../components/MapaSelector";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import ResultToFish from "./ResultToFish";

const Planning = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dateRef = useRef();
  const navigate = useNavigate(); 
  const [location, setLocation] = useState(null); 

  const onSubmit = (data) => {
    if (!location) {
      alert("Seleccione una ubicación en el mapa.");
      return;
    }

    const planification = {
      ...data,
      ubicacion: {
        latitud: location[0],
        longitud: location[1]
      }
    };

    console.log("Formulario completado:", planification);

    navigate("/result-to-fish", { state: planification });
  };

  return (
    <div id="planning-form">
      <h1>Planning / Escapadas</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">

        <div className="mb-3">
          <label className="form-label">¿Cuándo será la sesión?</label>
          <input
            type="date"
            className="form-control"
            {...register("fecha", { required: "La fecha es obligatoria" })}
            ref={(e) => {
              register("fecha").ref(e);
              dateRef.current = e;
            }}
            onClick={() => dateRef.current?.showPicker()}
          />
          {errors.fecha && <p className="text-danger">{errors.fecha.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Especie objetivo</label>
          <select
            className="form-select"
            {...register("especie", { required: "Selecciona una especie" })}
          >
            <option value="">Selecciona una especie</option>
            {todasLasEspecies.map((especie) => (
              <option key={especie.value} value={especie.value}>
                {especie.label}
              </option>
            ))}
          </select>
          {errors.especie && <p className="text-danger">{errors.especie.message}</p>}
        </div>

        <div id="mapSelector" className="py-3">
          <MapaSelector onLocationSelect={(coords) => setLocation(coords)} />
        </div>

        <button type="submit" className="btn btn-success">Consultar condiciones</button>
      </form>
    </div>
  );
};

export default Planning;