import { memo, useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Avatar from "react-avatar";
import { mentors } from "../data";
import { Link } from "react-router-dom";

const Mentors = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div>
      <MDBNavbar
        expand="md"
        light
        bgColor="light"
        fixed="top"
        id="navbar-example"
      >
        <MDBContainer fluid className="p-2">
          <Link to="/" className="text-black">
            LOGO
          </Link>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="ms-auto mb-2 mb-lg-0 justify-content-end">
              <MDBNavbarItem>
                <MDBNavbarLink className="text-black">
                  <Link to="/mentors" className="text-black">
                    Mentors
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="contact" className="tp-btn tp-btn-4">
                  Connexion
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <MDBContainer>
        <MDBRow className="mt-5">
          <MDBCol className="mt-5 d-inline-flex justify-content-center flex-wrap">
            {mentors.map((mentor) => (
              <MDBCard style={{ width: "23rem" }} className="m-3">
                <MDBCardBody>
                  <div className="d-inline-flex align-items-center">
                    <Avatar name={mentor.name} size="100" round />
                    <div className="ms-2">
                      <MDBCardTitle>{mentor.name}</MDBCardTitle>
                      <span className="text-muted">{mentor.job}</span>
                      <p>
                        <Link to="">Voir le profil</Link>
                      </p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default memo(Mentors);
