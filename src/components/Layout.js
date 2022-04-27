import { memo } from "react"
import Menu from "./Menu"
import Presentation from "./Presentation"
import About from "./About";
import BrowseCourse from "./BrowseCourse";
import BecomeInstructor from "./BecomeInstructor";
import "../styles/custom.css"

const Layout = () => {
    return (
      <div>
        <Menu />
        <Presentation />
        <About />
        <BrowseCourse />
        <BecomeInstructor />
      </div>
    );
}

export default memo(Layout)