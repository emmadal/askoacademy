import { memo } from "react";
import InstructorMenu from "./InstructorMenu";

const InstructorLayout = ({ children }) => {
  return (
    <div>
      <InstructorMenu />
      <div>{children}</div>
    </div>
  );
};

export default memo(InstructorLayout);
