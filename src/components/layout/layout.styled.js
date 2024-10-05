import styled from "styled-components";


export const LayoutContainer = styled.section`
    width: 100%;
    margin: 10px 0;
    padding: 20px;
    min-height: 80vh;
    overflow: hidden;
    position: relative;
    color: rgba(0, 0, 0, 0.6);
`

export const RightSideBar = styled.div`
    position: absolute;
    width: 28%;
    left: 70%;
`

export const RightSideBarHeader = styled.h2`
    margin: 0 0 20px 0;
    padding-left: 20px;
    border-left: 2px solid #000;
    color: rgba(100, 42, 42, 0.2);
    font-weight: 300;
    text-transform: uppercase;
`

export const RightSideBarActionsContainer = styled.ul`
    border: 1px solid #ccc;
    display: flex;
    gap: 0;
    flex-direction: column;
    justify-content: flex-start;
`


export const RightSideBarBtn = styled.li`
    width: 100%;
    height: 50px;
    padding: 20px 25px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #ccc;
    transition: 0.3s ease-in-out;

    & > .icon{
        font-size: 16px;
        border-radius: 100%;
        background-color: #1ea2b1;
        color: #fff;
    }

    &:hover{
        background-color: #ccc;
        cursor: pointer;
        color: #fff;
    }
`

export const RightSideBarBtnText = styled.p`

`

export const MainContent = styled.div`
    position: absolute;
    width: 70%;
    left: 0;
    top: 0;
    height: 100%;
    padding: 20px;
    overflow-y: scroll;
    line-height: 1.7rem;
`