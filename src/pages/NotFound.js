import { Fragment, memo } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Fanbies | Page Not Found</title>
        <meta
          name="Askoacademy"
          content=""
        />
      </Helmet>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <h3 className="text-center fw-semibold">
                This page cannot be found
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(NotFound);
