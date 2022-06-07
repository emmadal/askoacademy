import { memo } from "react";
import DangerZone from "../components/DangerZone";
import InstructorLayout from "../components/InstructorLayout";
import PasswordUser from "../components/PasswordUser";
import ProfileName from "../components/ProfileName";

const Profile = () => {
  return (
    <InstructorLayout title="Rapport">
      <ProfileName />
      <hr />
      <PasswordUser />
      <hr />
      <DangerZone />
    </InstructorLayout>
  );
};

export default memo(Profile);
