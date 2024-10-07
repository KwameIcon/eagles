import styled, {keyframes} from "styled-components";

export const NotificationContainer = styled.div`
    position: relative;
`

export const NotificationBtn = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(204, 204, 204, 0.2);
    user-select: none;
    transition: 0.3s ease-in-out;
    position: relative;

    .icon{
        color: rgba(30, 162, 177, 0.5);
        font-size: 1.2rem;
        cursor: pointer;
    }

    span{
        position: absolute;
        top: -3px;
        right: 10px;
        width: 15px;
        height: 15px;
        font-weight: 500;
        border-radius: 100%;
        background-color: crimson;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:hover{
        background-color: rgba(204, 204, 204, 0.5);
        cursor: pointer;

        .icon{
        color: rgba(30, 162, 177, 1);
        }
    }
`

const RollIn = keyframes`
    from{
        /* right: -400%; */
        opacity: 0;
    }
    to{
     /* right: 85%; */
     opacity: 1;
    }
`

export const NotificationCard = styled.div`
    position: absolute;
    top: 85%;
    right: 85%;
    width: 300px;
    padding: 10px;
    min-height: 200px;
    overflow: hidden;
    animation: ${RollIn} 0.3s ease-in;
    
    .card{
        padding: 20px 0;
    }
`

export const SubHeader = styled.p`
    font-size: 15px;
    padding-left: 15px;
    margin-bottom: 10px;
    color: #ccc;

    span{
        color: #1ea2b1;
    }
`

export const Notifications = styled.ul`
    width: 100%;
    margin-top: 20px;
    display: flex;
    gap: 2px;
    align-items: flex-start;
    flex-direction: column;
`

export const Message = styled.li`
    font-weight: 300;
    font-size: 15px;
    color: rgba(30, 162, 177, 0.5);
    width: 100%;
    height: 70px;
    padding: 10px 10px 10px 0;
    border-radius: 5px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color: rgba(204, 204, 204, 0.1);
        cursor: pointer;
    }

    &.unRead{
        background-color: rgba(204, 204, 204, 0.2);
    }
`

export const MessageInfo = styled.div`
    width: auto;
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: flex-start;
`

export const MessageTitle = styled.p`
    color: #023439;
    font-weight: 500;
`

export const MessageDate = styled.p`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    color: rgba(30, 162, 177, 0.5);

    .icon{
        color: #177d88;
    }
`