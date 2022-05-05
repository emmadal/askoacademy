import React, { memo } from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

const Loading = () => {
  return (
    <div className="loading">
      <MDBSpinner role="status" color="primary">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </div>
  );
};

export default memo(Loading);
