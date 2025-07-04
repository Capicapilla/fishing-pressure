
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const user = localStorage.getItem('usuario');
    return user ? <Outlet /> : <Navigate to="/login" />;


};

export default PrivateRoute;