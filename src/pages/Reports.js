import { memo } from "react";
import InstructorLayout from "../components/InstructorLayout";

const Reports = () => {
  return (
    <InstructorLayout title="Rapport">
      <h1 className="pt-5">Report page</h1>
    </InstructorLayout>
  );
};

export default memo(Reports);
