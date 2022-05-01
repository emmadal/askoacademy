import React, { memo } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const About = () => {
  return (
    <MDBContainer className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol>
          <h2 className="section-title mt-4">
            Pourquoi <span className="has-line"> Askoacademy ?</span>
          </h2>
          <h1 className="css-1ktz1md-Alpa text-black">
            Learn the data skills you need online at your own pace—from
            non-coding essentials to data science and machine learning.
          </h1>
        </MDBCol>
        <MDBCol sm={5}>
          <iframe
            width="100%"
            height="235"
            src="https://www.youtube.com/embed/ok-Zv5it6Nc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default memo(About);
