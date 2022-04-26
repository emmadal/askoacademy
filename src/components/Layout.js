import { memo } from "react"
import Menu from "./Menu"
import Presentation from "./Presentation"
import "../styles/custom.css"

const Layout = () => {
    return(
        <div>
            <Menu />
            <Presentation />
        </div>
    )
}

export default memo(Layout)