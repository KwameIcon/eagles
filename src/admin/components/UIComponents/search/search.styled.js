import styled from "styled-components";

export const SearchContainer = styled.form`
    width: 280px;
    height: 50px;
    padding: 0 0 0 20px;
    border-radius: 30px;
    background-color: rgba(204, 204, 204, 0.2);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color: rgba(204, 204, 204, 0.1);
    }
`

export const SearchFieldContainer = styled.div`
    width: 100;
    height: 100%;
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;

    & > .icon{
        color: rgba(30, 162, 177, 0.5);
    }
`

export const SearchField = styled.input`
    width: auto;
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 1rem;

    &::placeholder{
        color: rgba(30, 162, 177, 0.5);
        word-spacing: 0.2rem;
    }
`