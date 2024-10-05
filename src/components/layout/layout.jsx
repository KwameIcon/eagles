import { FaArrowRight } from "react-icons/fa"
import { LayoutContainer, MainContent, RightSideBar, RightSideBarActionsContainer, RightSideBarBtn, RightSideBarBtnText, RightSideBarHeader } from "./layout.styled"
import History from "./history/history"
import ChurchService from "./church-service/churchService"
import { useState } from "react"
import MissionStatement from "./mission-statement/missionStatement"
import OurMessage from "./our-message/ourMessage"
import Philosophy from "./philosophy/philosophy"
import StatementFaith from "./statement-faith/statementFaith"
import ChurchVision from "./churchVision/churchVision"

// array of modal buttons
const ModalButtons = ['History', 'Church Service', 'Our mission statement', 'Our Message (Jeremiah 29:11 (NIV))', 'Our philosophy', 'Statement of faith', 'Vision of CCC (Jeremiah 29:11)']

// components array
const Modals = [<History/>, <ChurchService/>, <MissionStatement/>, <OurMessage/>, <Philosophy/>, <StatementFaith/>, <ChurchVision/>]


const Layout = () =>{
    

    // states management
    const [currentModal, setCurrentModal] = useState(0);


    // handle modals display
    const handleNextModal = (index) =>{
        setCurrentModal(index)
    }

    return(
        <LayoutContainer>
            <RightSideBar>
                <RightSideBarHeader>
                    Related Links
                </RightSideBarHeader>
                <RightSideBarActionsContainer>
                    {ModalButtons.map((btn, index) => (
                        <RightSideBarBtn key={index} onClick={() => handleNextModal(index)}>
                            <FaArrowRight className="icon"/>
                            <RightSideBarBtnText>
                                {btn}
                            </RightSideBarBtnText>
                        </RightSideBarBtn>
                    ))}
                </RightSideBarActionsContainer>
            </RightSideBar>
            <MainContent>
              {Modals[currentModal]}
            </MainContent>
        </LayoutContainer>
    )
}

export default Layout