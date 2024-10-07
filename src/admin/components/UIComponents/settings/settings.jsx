import { FaCog } from "react-icons/fa"
import { Header, NavBtn, NavBtnContainer, NavBtns, SettingsBtnContainer, SettingsContainer } from "./settings.styled"
import Card from "../card/card"
import { useState } from "react"
import { Overlay } from "../user-profile/user-profile-card/profileCard.styled"


const Settings = () => {

    // states management
    const [displaySettings, setDisplaySettings] = useState(false);


    // toggles settings card display
    const handleDisplaySettings = () => {
        setDisplaySettings((prev) => !prev);
    }

    return(
        <SettingsContainer>

            {/*  */}
            {displaySettings && <Overlay onClick={handleDisplaySettings}/>}

            {/* settings button */}
            <SettingsBtnContainer onClick={handleDisplaySettings}>
                <FaCog className="icon"/>
            </SettingsBtnContainer>

            {/* navigational buttons */}
            {displaySettings && <NavBtnContainer>
                <Card className= 'icon'>
                    <Header>Manage you Info</Header>
                    <NavBtns>
                        <NavBtn>Account Settings</NavBtn>
                        <NavBtn>Profile Settings</NavBtn>
                    </NavBtns>
                </Card>
            </NavBtnContainer>}
        </SettingsContainer>
    )
}

export default Settings