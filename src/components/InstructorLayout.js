import { Fragment, memo } from "react";
import { Helmet } from "react-helmet";
import InstructorMenu from "./InstructorMenu";

const InstructorLayout = ({ title, children }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Askoacademy | {`${title}`}</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1">
            <InstructorMenu />
          </div>
          <div className="col p-5 bg-light" style={{height: 'auto'}}>{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(InstructorLayout);
