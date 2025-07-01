import { Link } from "react-router-dom"
import Register from "./Register"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
            register,
            handleSubmit,
            formState: { errors }
        } = useForm();

        const navigate = useNavigate();

        const onSubmit = (data) => {
            const storedUser = JSON.parse(localStorage.getItem('usuario'));

            if (
                storedUser && data.email === storedUser.email && data.password === storedUser.password
            ) {
                alert('Inicio de sesión exitoso');
                navigate('/logbook');
            } else {
                alert('Correo electrónico o contraseña incorrectos');
            }
            
        };
    
    return (

        
        <div className="position-relative min-vh-100 overflow-hidden">
            <video
            className="position-absolute top-0 start-0 object-fit-cover"
            src="/videos/login-video.mp4"
            autoPlay
            loop
            muted
            
            />

        <div className="position-relative z-1 d-flex justify-content-center align-items-center min-vh-100 bg-dark bg-opacity-50">
            <div className="p-4 rounded shadow bg-white bg-opacity-75" style={{ width: '100%', maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Iniciar Sesión</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    {...register("email", { required: "Este campo es obligatorio" })}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>

                <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    {...register("password", {
                    required: "La contraseña es obligatoria"
                    })}
                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>

                <button type="submit" className="btn btn-success w-100">Iniciar sesión</button>

                <p className="mt-3 text-center">
                ¿No tienes cuenta?{" "}
                <Link to="/register" className="text-decoration-none">Regístrate aquí</Link>
                </p>
            </form>
            </div>
      </div>
    </div>
        
    )
}

export default Login;