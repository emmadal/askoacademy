import { memo } from "react"
import Menu from "./Menu"
import Presentation from "./Presentation"
import About from "./About";
import BrowseCourse from "./BrowseCourse";
import "../styles/custom.css"

const Layout = () => {
    return (
      <div>
        <Menu />
        <Presentation />
        <About />
        <BrowseCourse />
      </div>
    );
}

export default memo(Layout)