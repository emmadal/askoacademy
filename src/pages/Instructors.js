import { memo, useContext } from "react";
import { UserAuth } from "../App";
import InstructorLayout from "../components/InstructorLayout";

const Instructors = () => {
  const {user} = useContext(UserAuth)
  console.log(user)
  return (
    <InstructorLayout title="Enseignant - Coach">
      <h1 className="pt-5">Instructors page</h1>
    </InstructorLayout>
  );
};

export default memo(Instructors);
