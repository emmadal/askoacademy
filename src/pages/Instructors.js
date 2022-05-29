import { memo } from "react";
import InstructorLayout from "../components/InstructorLayout";

const Instructors = () => {
  return (
    <InstructorLayout title="Enseignant - Coach">
      <h1 className="pt-5">Instructors page</h1>
    </InstructorLayout>
  );
};

export default memo(Instructors);
