import { Fragment, memo } from "react";
import { Helmet } from "react-helmet";
import ClientMenu from "./ClientMenu";

const ClientLayout = ({ title, children }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Askoacademy | {`${title}`}</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <ClientMenu />
          </div>
          <div className="col">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(ClientLayout);
