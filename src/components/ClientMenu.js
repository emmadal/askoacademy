import { memo } from "react";
import { Link } from "react-router-dom";

const ClientMenu = () => {

  return (
    <nav className="d-md-block bg-light sidebar collapse">
      <div className="position-sticky">
        <ul className="nav flex-column p-2 align-items-center">
          <li className="py-3 ">
            <Link to="/#">
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
            <Link to="/#" className="link">
              Accueil
            </Link>
          </li>
          <li className="py-3">
            <Link to="/programs" className="link">
              Programmes
            </Link>
          </li>
          <li className="py-3">
            <Link to="/meeting" className="link">
              Reunion
            </Link>
          </li>
          <li className="py-3 poweroff" onClick={() => ""}>
            <Link to="/#" className="link">
              Déconnexion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default memo(ClientMenu);
