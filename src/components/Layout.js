import { memo } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div data-bs-spy="scroll">
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

export default memo(Layout);
