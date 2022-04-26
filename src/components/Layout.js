import { memo } from "react"
import Menu from "./Menu"

const Layout = () => {
    return(
        <div>
            <Menu />
        </div>
    )
}

export default memo(Layout)