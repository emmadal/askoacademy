import { memo } from "react";
import InstructorLayout from "../components/InstructorLayout";

const Client = () => {
  return (
    <InstructorLayout title="Client">
      <h3 className="pt-5">Liste des clients</h3>
    </InstructorLayout>
  );
};

export default memo(Client);
