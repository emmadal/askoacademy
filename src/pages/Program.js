import { memo } from "react";
import ClientLayout from "../components/ClientLayout";

const Program = () => {
  return (
    <ClientLayout title="Programmes">
      <h1 className="pt-5">Program page</h1>
    </ClientLayout>
  );
};

export default memo(Program);
