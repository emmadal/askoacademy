import { memo } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import "../styles/custom.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

export default memo(Layout);
