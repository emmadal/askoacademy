import { memo } from "react";
import { Link } from "react-router-dom";

const InstructorMenu = () => {
  return (
    <nav className="d-md-block bg-light sidebar collapse">
      <div className="position-sticky">
        <ul className="nav flex-column p-2 align-items-center">
          <li className="py-3 ">
            <Link to="/instructors">
              <img
                src="/logo192.png"
                loading="lazy"
                alt="Askoacademy"
                className="img-fluid home-logo"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li className="py-3">
            <Link to="/instructors" className="link">
              <i className="fa-solid fa-house fa-2xl">Accueil</i>
            </Link>
          </li>
          <li className="py-3">
            <Link to="/clients" className="link">
              <i className="fas fa-user-friends">Clients</i>
            </Link>
          </li>
          <li className="py-3">
            <Link to="/activity" className="link">
              <i className="fas fa-tachometer-alt">Activité</i>
            </Link>
          </li>
          <li className="py-3" onClick={() => ""}>
            <Link to="/broadcasting" className="link">
              <i className="fas fa-tv">Diffusion</i>
            </Link>
          </li>
          <li className="py-3" onClick={() => ""}>
            <Link to="/reports" className="link">
              <i className="fas fa-tv">Rapports</i>
            </Link>
          </li>
          <li className="py-3 poweroff" onClick={() => ""}>
            <Link to="/#" className="link">
              <i className="fas fa-power-off">Déconnexion</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default memo(InstructorMenu);