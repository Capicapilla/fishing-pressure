import { Link } from "react-router-dom"
import Register from "./Register"

const Login = () => {
    return (
        <>
        <div>
            <h1>Log In</h1>
        </div>
        <div>
            <p>
                <Link to="/register">¿No tienes cuenta? Registrate aquí</Link>
            </p>
        </div>
        </>
    )
}

export default Login;