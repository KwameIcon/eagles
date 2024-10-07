import styled, {keyframes} from "styled-components";

export const ProfileCardContainer = styled.div`
    position: relative;

    .picture{
        cursor: pointer;
        width: 50px;
        height: 50px;
    }
`

export const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: transparent;
`

const RollIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

export const UserProfileCard = styled.div`
    position: absolute;
    top: 85%;
    right: 60%;
    width: 310px;
    padding: 10px;
    min-height: 200px;
    overflow: hidden;
    animation: ${RollIn} 0.3s ease-in;
    
    .card{
        padding: 20px 0;
    }
`

export const CardHeaderText = styled.h2`
    text-transform: capitalize;
    font-size: 1rem;
    margin-bottom: 10px;
    padding-left: 15px;
`

export const UserInfoContainer = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .pic{
        width: 60px;
        height: 60px;
    }
`

export const UserInofText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
`

export const UserName = styled.p`
    color: #023439;
    font-weight: 500;
    font-size: 15px;
`

export const UserRole = styled.p`
    color: rgba(30, 162, 177, 0.3);
    font-size: 15px;
`

export const UserEmail = styled.p`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    color: rgba(30, 162, 177, 0.4);
    font-size: 15px;

    .icon{
        color: #177d88;
    }
`

export const Logout = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        width: 90%;
        height: 30px;
        border: 1px solid crimson;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        transition: 0.3s ease-in;

        &:hover{
            background-color: crimson;
            color: #fff;
            cursor: pointer;
        }
    }
`