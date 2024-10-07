import { FaBell } from "react-icons/fa";
import { Message, MessageDate, MessageInfo, MessageTitle, NotificationBtn, NotificationCard, NotificationContainer, Notifications, SubHeader } from "./notification.styled"
import Card from "../card/card";
import { Header } from "../settings/settings.styled";

// images
import Pic from '../../../../assets/others/pexels-anna-nekrashevich-6801642.jpg'
import Pic1 from '../../../../assets/others/istockphoto-1495088043-612x612.jpg'
import Pic2 from '../../../../assets/others/pp.jpg'
import Pic3 from '../../../../assets/others/ppp.jpg'
import Pic4 from '../../../../assets/others/pppp.jpg'
import Pic5 from '../../../../assets/others/ppppp.jpg'
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState } from "react";
import UserProfile from "../user-profile/user-profilePic/userProfilePic";
import { Overlay } from "../user-profile/user-profile-card/profileCard.styled";


const Notification = () => {

    // states management
    const [displayMessageCard, setDisplayMessageCard] = useState(false);


    // toggle message card display
    const toggleMessageCardDisplay = () => {
        setDisplayMessageCard((prev) => !prev);
    }

     return(
        <NotificationContainer>

            {/*  */}
            {displayMessageCard && <Overlay onClick={toggleMessageCardDisplay}/>}

            {/* notification buttons */}
            <NotificationBtn onClick={toggleMessageCardDisplay}>
                <FaBell className="icon"/>
                <span>3</span>
            </NotificationBtn>

            {/* notification card */}
            {displayMessageCard && <NotificationCard>
                {/* <img src= {Pic} alt="Profile"/> */}
               <Card className= 'card'>
                <Header style={{paddingLeft: "15px"}}>All Notifications</Header>
                <SubHeader>You have <span>3</span> unread messages</SubHeader>
                <Notifications>
                    <Message className="unRead">
                        <UserProfile Picture = {Pic}/>
                        <MessageInfo>
                            <MessageTitle>Made a Donation</MessageTitle>
                            <MessageDate>
                                <AiOutlineClockCircle className="icon" />
                                <p>Oct 6, 2024 9:45 AM</p>
                            </MessageDate>
                        </MessageInfo>
                    </Message>

                    <Message className="unRead">
                        <UserProfile Picture = {Pic1}/>
                        <MessageInfo>
                            <MessageTitle>Contributed to the Church Fund</MessageTitle>
                            <MessageDate>
                                <AiOutlineClockCircle className="icon" />
                                <p>Oct 6, 2024 9:45 AM</p>
                            </MessageDate>
                        </MessageInfo>
                    </Message>

                    <Message>
                        <UserProfile Picture = {Pic2}/>
                        <MessageInfo>
                            <MessageTitle>Submitted an Offering</MessageTitle>
                            <MessageDate>
                                <AiOutlineClockCircle className="icon" />
                                <p>Oct 6, 2024 9:45 AM</p>
                            </MessageDate>
                        </MessageInfo>
                    </Message>

                    <Message>
                        <UserProfile Picture = {Pic3}/>
                        <MessageInfo>
                            <MessageTitle>Sent a Tithe</MessageTitle>
                            <MessageDate>
                                <AiOutlineClockCircle className="icon" />
                                <p>Oct 6, 2024 9:45 AM</p>
                            </MessageDate>
                        </MessageInfo>
                    </Message>

                    <Message>
                        <UserProfile Picture = {Pic4}/>
                        <MessageInfo>
                            <MessageTitle>Made a Contribution</MessageTitle>
                            <MessageDate>
                                <AiOutlineClockCircle className="icon" />
                                <p>Oct 6, 2024 9:45 AM</p>
                            </MessageDate>
                        </MessageInfo>
                    </Message>

                    <Message className="unRead">
                        <UserProfile Picture = {Pic5}/>
                        <MessageInfo>
                            <MessageTitle>Offered a Gift</MessageTitle>
                            <MessageDate>
                                <AiOutlineClockCircle className="icon" />
                                <p>Oct 6, 2024 9:45 AM</p>
                            </MessageDate>
                        </MessageInfo>
                    </Message>

                </Notifications>
               </Card>
            </NotificationCard>}
        </NotificationContainer>
     )
}

export default Notification;