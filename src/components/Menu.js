import React, { useState, memo, useCallback } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [showBasic, setShowBasic] = useState(false);

  const scollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MDBNavbar
      expand="md"
      light
      bgColor="light"
      fixed="top"
      id="navbar-example"
    >
      <MDBContainer fluid className="p-2">
        <Link to="/" className="text-black" onClick={scollToTop}>
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
              <MDBNavbarLink className="text-black" href="#pourquoiaskoacademy">
                Présentation
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="text-black" href="#typeformations">
                Type de formations
              </MDBNavbarLink>
            </MDBNavbarItem>
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
  );
}

export default memo(Menu);
