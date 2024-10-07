import UserProfile from "../user-profilePic/userProfilePic";
import { UserProfileCard, CardHeaderText, Logout, ProfileCardContainer, UserEmail, UserInfoContainer, UserInofText, UserName, UserRole, Overlay } from "./profileCard.styled"

// images
import ProfilePicture from '../../../../../assets/others/pppp.jpg'
import Card from "../../card/card";
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";


const ProfileCard = () =>{

    // states management
    const [displayProfileCard, setDisplayProfileCard] = useState(false);

    // toggle the display of the profile card
    const toggleUserProfileCard = () => {
        setDisplayProfileCard((prev) => !prev);
    }

    return(
        <ProfileCardContainer>

            {/*  */}
            {displayProfileCard && <Overlay onClick={toggleUserProfileCard}/>}

            {/* profile picture */}
            <UserProfile Picture={ProfilePicture} onClick={toggleUserProfileCard} className= 'picture'/>

            {/* card */}
            { displayProfileCard && <UserProfileCard>
                <Card className= 'card'>
                    <CardHeaderText>My Profile</CardHeaderText>
                    <UserInfoContainer>
                        <UserProfile Picture={ProfilePicture} className= 'pic'/>
                        <UserInofText>
                            <UserName>Charlene Reed</UserName>
                            <UserRole>Deacon</UserRole>
                            <UserEmail>
                                <FaEnvelope className="icon"/>
                               <p> deaconkubi@gmail.com</p>
                            </UserEmail>
                        </UserInofText>
                    </UserInfoContainer>

                    <Logout>
                        <p>Logout</p>
                    </Logout>
                </Card>
            </UserProfileCard>}

        </ProfileCardContainer>
    )
}

export default ProfileCard;