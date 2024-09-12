import styled from "styled-components";

export const LinkContainer = styled.div`
    width: fit-content;
    margin: 20px 0;
    color: #1ea2b1;
    display: flex;
    gap: 10px;
    align-items: center;
    transition: 0.3s ease-in-out;

    &:hover{
        gap: 20px;
        color: goldenrod;
        cursor: pointer;
        border-bottom: 1px solid #1ea2b1;
    }
`