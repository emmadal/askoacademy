import { memo } from "react"
import Menu from "./Menu"
import Presentation from "./Presentation"
import About from "./About";
import "../styles/custom.css"

const Layout = () => {
    return (
      <div>
        <Menu />
        <Presentation />
        <About />
      </div>
    );
}

export default memo(Layout)