import { ProfilePic, ProfilePicContainer } from "./userProfilePic.styled"


const UserProfile = ({Picture, className, onClick}) => {

    return(
        <ProfilePicContainer className= {className} onClick={onClick}>
            <ProfilePic src= {Picture} alt="User Profile"/>
        </ProfilePicContainer>
    )
}

export default UserProfile