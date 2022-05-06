import { memo } from "react";
import ClientLayout from "../components/ClientLayout";
import {MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit'
const Client = () => {
  return (
    <div>
      <ClientLayout>
        <MDBContainer className="d-flex justify-content-center">
          <MDBRow>
            <MDBCol>
              <h1>Hello</h1>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </ClientLayout>
    </div>
  );
};

export default memo(Client);
