import { memo } from "react";
import ClientMenu from "./ClientMenu";
import InstructorMenu from "./InstructorMenu";

const ClientLayout = ({ children }) => {
  const status = "";
  return (
    <div>
      {status === "others" ? <ClientMenu /> : <InstructorMenu />}
      <div>{children}</div>
    </div>
  );
};

export default memo(ClientLayout);
