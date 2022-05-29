import { memo } from "react";
import ClientMenu from "./ClientMenu";

const ClientLayout = ({ children }) => {
  return (
    <div>
     <ClientMenu /> 
      <div>{children}</div>
    </div>
  );
};

export default memo(ClientLayout);
