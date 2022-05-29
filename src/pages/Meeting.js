import { memo } from "react";
import ClientLayout from "../components/ClientLayout";

const Meeting = () => {
  return (
    <ClientLayout title="Reunion">
        <h1 className="pt-5">Meeting page</h1>
    </ClientLayout>
  );
};

export default memo(Meeting);
