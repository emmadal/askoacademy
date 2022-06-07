import { useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";

const PasswordUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formValue, setFormValue] = useState({
    cpassword: "",
    npassword: "",
    npassword2: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <MDBRow>
      <MDBCol sm={5}>
        <p className="fw-bold fs-3">Mot de passe</p>
        <p>Changez votre mot de passe ici.</p>
      </MDBCol>
      <MDBCol sm={7}>
        <form className="" onSubmit={() => ""}>
          <MDBInput
            value={formValue.cpassword}
            name="cpassword"
            onChange={onChange}
            required
            type="password"
            className="my-4"
            label="Actuel mot de passe"
          />
          <MDBInput
            value={formValue.npassword}
            name="npassword"
            onChange={onChange}
            required
            className="my-4"
            label="Nouveau mot de passe"
          />
          <MDBInput
            value={formValue.npassword2}
            name="npassword2"
            onChange={onChange}
            required
            className="my-4"
            label="Confirmez le mot de passe"
          />
          <MDBBtn className="tp-btn-3 mb-3" type="submit">
            Changez le mot passe
          </MDBBtn>
        </form>
      </MDBCol>
    </MDBRow>
  );
};

export default PasswordUser;
