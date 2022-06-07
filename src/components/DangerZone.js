import {
  MDBBtn,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

const DangerZone = () => {
  return (
    <MDBRow>
      <MDBCol sm={5}>
        <p className="fs-4 text-danger fw-bold">Fermeture de compte</p>
        <p>
          <span className="fw-bold">Attention</span>: La fermeture de votre
          compte est irreversible.
        </p>
      </MDBCol>
      <MDBCol sm={7}>
        <MDBBtn color="danger" className="mt-3 tp-btn-3" type="submit">
          Fermez votre compte
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  );
};

export default DangerZone;
