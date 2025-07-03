import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("usuario"));
    setUser(savedUser);
  }, []);

  const handleDeleteAccount = () => {
    const confirm = window.confirm("Si lo deseas, borramos la cuenta pero te echaremos de menos");
    if (confirm) {
      localStorage.removeItem("usuario");
      alert("Ya hemos borrado su cuenta");
      navigate("/register");
    }
  };

    //Close session
    const handleLogout = () => {
    localStorage.removeItem('usuario'); 
    navigate('/login');
    };


  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-4 text-left mb-4">
          <div className="mb-4 d-flex flex-column align-items-center">
            <div className="rounded-circle bg-secondary mx-auto" 
            style={{ width: "150px", height: "150px" , 
            lineHeight: "150px", color: "white" }}>
            </div>

            <button className="btn btn-primary mt-3" onClick={handleLogout}>Cerrar Sesión</button>
          </div>

          <div className="list-group">
            <button className="list-group-item list-group-item-action active">Cuenta / Contraseña</button>
            <button className="list-group-item list-group-item-action">Pedidos</button>
            <button className="list-group-item list-group-item-action">Post & Comentarios en Foro</button>
            <button className="list-group-item list-group-item-action">Mis Puestos de Pesca</button>
            <button className="list-group-item list-group-item-action">Publicaciones en Galería</button>
            
            {/*Borrar cuenta*/}
            <button
              className="list-group-item list-group-item-action text-danger"
              onClick={handleDeleteAccount}
            >
              Borrar Cuenta
            </button>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card p-4">
            <h4 className="mb-3">Cuenta / Contraseña</h4>
            {user ? (
              <>
                <p><strong>Nombre:</strong> {user.nombre}</p>
                <p><strong>Apellido:</strong> {user.apellido}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Instagram:</strong> {user.instagram || "No facilitado"}</p>
                <p><strong>TikTok:</strong> {user.tiktok || "No facilitado"}</p>
              </>
            ) : (
              <p>Cargando pescador...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
