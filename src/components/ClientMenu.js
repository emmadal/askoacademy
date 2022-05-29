import { memo } from "react";
import { Link } from "react-router-dom";

const ClientMenu = () => {

  return (
    <nav className="d-md-block bg-light sidebar collapse">
      <div className="position-sticky">
        <ul className="nav flex-column p-2 align-items-center">
          <li className="py-3 ">
            <Link to="/dashboard">
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
            <Link to="/dashboard" className="link">
              <i className="fa-solid fa-house fa-2xl">Accueil</i>
            </Link>
          </li>
          <li className="py-3">
            <Link to="/programmes" className="link">
              <i className="fa-solid fa-bell fa-2xl">Programmes</i>
            </Link>
          </li>
          <li className="py-3">
            <Link to="/reunion" className="link">
              <i className="fa-solid fa-user fa-2xl">Rèunion</i>
            </Link>
          </li>
          <li className="py-3 poweroff" onClick={() => ''}>
            <Link to="/#" className="link">
              <i className="fa-solid fa-power-off fa-2xl">Déconnexion</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default memo(ClientMenu);
