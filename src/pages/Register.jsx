import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("usuario", JSON.stringify(data));
    alert("Registro exitoso");
    navigate("/login");
  };

  return (
    <div className="position-relative min-vh-100 overflow-hidden">

      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <video
          className="position-absolute top-0 start-0 object-fit-cover"
          src="/videos/login-video.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="position-relative z-1 d-flex justify-content-center align-items-center min-vh-100 bg-dark bg-opacity-50 py-4"> 
        <div
          className="p-4 rounded shadow bg-white bg-opacity-75"
          style={{ width: "100%", maxWidth: "450px" }}
        >
          <h2 className="text-center mb-4">Registro de Usuario</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Nombre */}
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                {...register("nombre", { required: "El nombre es obligatorio" })}
              />
              {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
            </div>

            {/* Apellido */}
            <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                {...register("apellido", { required: "El apellido es obligatorio" })}
              />
              {errors.apellido && <p className="text-danger">{errors.apellido.message}</p>}
            </div>

            {/* Instagram */}
            <div className="mb-3">
              <label className="form-label">Instagram (opcional)</label>
              <input type="text" className="form-control" {...register("instagram")} />
            </div>

            {/* TikTok */}
            <div className="mb-3">
              <label className="form-label">TikTok (opcional)</label>
              <input type="text" className="form-control" {...register("tiktok")} />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                {...register("email", { required: "El email es obligatorio" })}
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>

            {/* Contraseña */}
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "Debe tener al menos 6 caracteres"
                  }
                })}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>

            {/* Repetir contraseña */}
            <div className="mb-3">
              <label className="form-label">Repetir contraseña</label>
              <input
                type="password"
                className="form-control"
                {...register("repeatPassword", {
                  validate: (value) =>
                    value === watch("password") || "Las contraseñas no coinciden"
                })}
              />
              {errors.repeatPassword && (
                <p className="text-danger">{errors.repeatPassword.message}</p>
              )}
            </div>

            {/* Botón */}
            <button type="submit" className="btn btn-primary w-100">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
