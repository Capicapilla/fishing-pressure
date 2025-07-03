import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const user = localStorage.getItem("usuario");

  return user ? <Navigate to="/profile" /> : <Outlet />;
};

export default PublicRoute;