import Notification from "../UIComponents/notification/notification";
import Search from "../UIComponents/search/search";
import Settings from "../UIComponents/settings/settings";
import ProfileCard from "../UIComponents/user-profile/user-profile-card/ProfileCard";
import { TopSideBarContainer, TopSidebarHeaderText } from "./topSidebar.styled"


const TopSidebar = () => {

    return(
        <TopSideBarContainer>

            {/* header text */}
            <TopSidebarHeaderText>Overview</TopSidebarHeaderText>

            {/* Search */}
            <Search/>

            {/* settings */}
            <Settings/>

            {/* notification */}
            <Notification/>

            {/* user profile */}
            <ProfileCard/>
        </TopSideBarContainer>
    )
}

export default TopSidebar;