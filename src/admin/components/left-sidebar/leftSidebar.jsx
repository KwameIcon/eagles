import ChurchLogo from "../UIComponents/logo/logo";
import { LeftSidebarContainer, LogoContainer } from "./leftSidebar.styled"

const LeftSidebar = () => {

    return(
        <LeftSidebarContainer>
            <LogoContainer>
                <ChurchLogo logoText= 'logoText'/>
            </LogoContainer>
        </LeftSidebarContainer>
    )
}

export default LeftSidebar;