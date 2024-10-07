import LeftSidebar from "../left-sidebar/leftSidebar"
import TopSidebar from "../top-sidebar/topSidebar"
import { LayoutContainer } from "./layout.styled"

const DashboardLayout = () =>{
    return(
        <LayoutContainer>

            {/* Top sidebar component */}
            <TopSidebar/>
            <LeftSidebar/>
        </LayoutContainer>
    )
}

export default DashboardLayout