import { memo } from "react";
import InstructorLayout from "../components/InstructorLayout";

const Activity = () => {
  return (
    <InstructorLayout title="Activite">
      <h1 className="pt-5">Report page</h1>
    </InstructorLayout>
  );
};

export default memo(Activity);
