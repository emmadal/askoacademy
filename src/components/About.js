import React, { memo } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const About = () => {
  return (
    <MDBContainer className="my-5">
      <MDBRow>
        <MDBCol className="text-center">
          <h2 className="section-title mt-4">
            Pourquoi <span className="has-line"> Askoacademy ?</span>
          </h2>
          <h1 className="css-1ktz1md-Alpa text-black">
            Learn the data skills you need online at your own pace—from
            non-coding essentials to data science and machine learning.
          </h1>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default memo(About);
