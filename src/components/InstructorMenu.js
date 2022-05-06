import { memo } from "react";
import { Link } from "react-router-dom";

const InstructorMenu = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="profile">
          <img
            src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
            alt="profile_picture"
          />
          <h3>Anamika Roy</h3>
          <p>Designer</p>
        </div>
        <ul>
          <li>
            <Link to="" className="active">
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="item">Acceuil</span>
            </Link>
          </li>
          {/* <li>
            <a href="#">
              <span className="icon">
                <i className="fas fa-user-shield"></i>
              </span>
              <span className="item">Admin</span>
            </a>
          </li> */}
          <li>
            <Link to="">
              <span className="icon">
                <i className="fas fa-user-friends"></i>
              </span>
              <span className="item">Clients</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span className="icon">
                <i className="fas fa-tachometer-alt"></i>
              </span>
              <span className="item">Activité</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span className="icon">
                <i className="fas fa-database"></i>
              </span>
              <span className="item">Diffusion</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span className="icon">
                <i className="fas fa-chart-line"></i>
              </span>
              <span className="item">Rapports</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span className="icon">
                <i className="fas fa-power-off"></i>
              </span>
              <span className="item">Deconnexion</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(InstructorMenu);
