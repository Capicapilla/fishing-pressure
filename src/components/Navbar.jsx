import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-4">
      <Link className="navbar-brand" to="/">Fishing Pressure</Link>
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navContent"
        aria-controls="navContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navContent">
        <ul className="navbar-nav ms-auto">
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/especies">Especies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/planning">Planning</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logbook">Diario</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Log In</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              <FaUserCircle size={22} className='me-1' />
            </NavLink>
          </li>

          
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
