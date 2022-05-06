import { memo, useEffect } from "react";
import Avatar from "react-avatar";

const ClientMenu = () => {

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
            <a href="#" className="active">
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="item">Acceuil</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fas fa-user-friends"></i>
              </span>
              <span className="item">Programmes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fas fa-tachometer-alt"></i>
              </span>
              <span className="item">Reunion</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fas fa-power-off"></i>
              </span>
              <span className="item">Deconnexion</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(ClientMenu);
