import { useState, memo } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBBtn,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Contact = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_pass: "",
  });

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <MDBNavbar expand="md" light bgColor="light">
        <MDBContainer fluid className="p-2">
          <MDBNavbarNav className="ms-auto mb-2 mb-lg-0 justify-content-center">
            <MDBNavbarItem className="text-center">
              <Link to="/" className="text-black text-center">
                LOGO
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

      <MDBContainer fluid className="dc-account__wrapper">
        <MDBRow>
          <MDBCol className="tabbed-pane_2DfHq my-5">
            <MDBTabs justify className="mb-3 py-4">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab1")}
                  active={justifyActive === "tab1"}
                >
                  Nouveau compte
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab2")}
                  active={justifyActive === "tab2"}
                >
                  Se connecter
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent className="mb-3 py-2">
              <MDBTabsPane show={justifyActive === "tab1"}>
                <h3 className="display-h3 text-center py-2 fw-bold">
                  Creer votre compte
                </h3>
                <p className="text-black text-center">
                  Formez vous aujourd'hui avec les meilleurs coachs et
                  enseignants.
                </p>
                <form onSubmit={handleSignup} className="form_wrapper">
                  <MDBInput
                    size="lg"
                    className="ctact_input form-control"
                    label="Nom"
                    value={user.lastname}
                    onChange={handleChange}
                    name="lastname"
                    type="text"
                  />
                  <MDBInput
                    className="ctact_input form-control"
                    size="lg"
                    label="Prénom"
                    onChange={handleChange}
                    name="firstname"
                    value={user.firstname}
                    type="text"
                  />
                  <select className="form-outline form-control form-control-lg">
                    <option>Status social</option>
                    <option value="coach">Coach</option>
                    <option value="professeur">Professeur</option>
                    <option value="autres">Autres</option>
                  </select>
                  <MDBInput
                    className="ctact_input form-control"
                    size="lg"
                    label="Email"
                    onChange={handleChange}
                    value={user.email}
                    name="email"
                    type="email"
                  />
                  <MDBInput
                    className="ctact_input form-control"
                    size="lg"
                    label="Mot de passe"
                    onChange={handleChange}
                    value={user.lastname}
                    name="password"
                    type="password"
                  />
                  <MDBInput
                    className="ctact_input form-control"
                    size="lg"
                    onChange={handleChange}
                    label="Confirmer le mot de passe"
                    value={user.confirm_pass}
                    name="confirm_pass"
                    type="password"
                  />
                  <p className="text-muted vds-text">
                    En cliquant sur S'inscrire, vous acceptez nos Conditions
                    d'utilisation et notre Politique de confidentialité.
                  </p>
                  <MDBBtn className="tp-btn-3 mb-3" type="submit">
                    Creer un compte
                  </MDBBtn>
                </form>
              </MDBTabsPane>
              <MDBTabsPane show={justifyActive === "tab2"}>
                <h3 className="display-h3 text-center py-2 fw-bold">
                  Se connecter
                </h3>
                <p className="text-black text-center">
                  Formez vous aujourd'hui avec les meilleurs coachs et
                  enseignants.
                </p>
                <form onSubmit={handleSignin} className="form_wrapper">
                  <MDBInput
                    className="ctact_input form-control my-5"
                    size="lg"
                    label="Email"
                    onChange={handleChange}
                    value={user.email}
                    name="email"
                    type="email"
                  />
                  <MDBInput
                    className="ctact_input form-control my-5"
                    size="lg"
                    label="Mot de passe"
                    onChange={handleChange}
                    value={user.lastname}
                    name="password"
                    type="password"
                  />
                  <p className="text-muted vds-text">
                    En cliquant sur Connexion, vous acceptez nos Conditions
                    d'utilisation et notre Politique de confidentialité.
                  </p>
                  <MDBBtn className="tp-btn-3 mb-3" type="submit">
                    Connexion
                  </MDBBtn>
                  <hr />
                  <Link to="/" className="text-black text-center fw-bold">
                    Mot de passe oublié ?
                  </Link>
                </form>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default memo(Contact);
