import styled from "styled-components";

export const SettingsContainer = styled.div`

`

export const SettingsBtnContainer = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(204, 204, 204, 0.2);
    user-select: none;
    transition: 0.3s ease-in-out;

    .icon{
        color: rgba(30, 162, 177, 0.5);
        font-size: 1.2rem;
        cursor: pointer;
    }

    &:hover{
        background-color: rgba(204, 204, 204, 0.5);

        .icon{
        color: rgba(30, 162, 177, 1);
        }
    }
`

export const NavBtnContainer = styled.div`
    position: absolute;
    top: 85%;
    margin-left: -180px;
    width: 200px;
    height: 200px;

    .icon{
        padding-left: 0;
        padding-right: 0;
    }
`

export const Header = styled.h2`
    text-transform: capitalize;
    font-size: 1rem;
    margin-bottom: 10px;
    padding-left: 15px;
`

export const NavBtns = styled.ul`
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

`

export const NavBtn = styled.li`
    font-weight: 300;
    font-size: 15px;
    color: rgba(30, 162, 177, 0.5);
    width: 100%;
    height: 40px;
    padding: 10px 10px 10px 0;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    padding-left: 15px;

    &:hover{
        background-color: rgba(204, 204, 204, 0.2);
        cursor: pointer;
    }
`