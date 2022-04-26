import React, { useState, memo } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';

const Menu = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="md" light bgColor="light">
      <MDBContainer fluid className="p-2">
        <MDBNavbarBrand className="mx-2" href="#">
          LOGO
        </MDBNavbarBrand>
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
            <MDBNavbarItem className="mx-2">
              <MDBNavbarLink href="#" className="text-black">
                Pourquoi Askoacademy
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="mx-2">
              <MDBNavbarLink className="text-black" href="#">
                Coaching
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="mx-2">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link text-black">
                  Cours à domicile
                </MDBDropdownToggle>
                <MDBDropdownMenu >
                  <MDBDropdownItem>
                    <MDBDropdownLink>
                      En présentiel
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">En ligne</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="mx-2">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link text-black">
                  Formations
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>En présentiel</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>En ligne</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="mx-2">
              <MDBBtn color="primary">Devenir Professeur</MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default memo(Menu);
