import { memo } from "react";
import InstructorLayout from "../components/InstructorLayout";

const Client = () => {
  return (
    <InstructorLayout title="Client">
      <h1 className="pt-5">Client page</h1>
    </InstructorLayout>
  );
};

export default memo(Client);
