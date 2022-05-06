import { memo } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBNavbar,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import Avatar from "react-avatar";
import { mentors } from "../data";
import { Link } from "react-router-dom";

const Mentors = () => {
  return (
    <div>
      <MDBNavbar
        expand="md"
        light
        bgColor="light"
        fixed="top"
        id="navbar-example"
      >
        <MDBContainer fluid className="p-2 ">
          <Link to="/" className="text-black">
            LOGO
          </Link>
          <Link to="/mentors" className="text-black ">
            Mentors
          </Link>
          <Link to="/contact" className="tp-btn tp-btn-4">
            Connexion
          </Link>
        </MDBContainer>
      </MDBNavbar>

      <MDBContainer>
        <MDBRow className="mt-5">
          <MDBCol className="mt-5 d-inline-flex justify-content-center flex-wrap">
            {mentors.map((mentor) => (
              <MDBCard
                style={{ width: "23rem" }}
                key={mentor.id}
                className="m-3"
              >
                <MDBCardBody>
                  <div className="d-inline-flex align-items-center">
                    <Avatar name={mentor.name} size="100" round />
                    <div className="ms-2">
                      <MDBCardTitle>{mentor.name}</MDBCardTitle>
                      <span className="text-muted">{mentor.job}</span>
                      <p>
                        <Link to={`/mentor/${mentor.id}`}>Voir le profil</Link>
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
