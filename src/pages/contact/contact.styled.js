// contact.styled.js
import styled from "styled-components";

export const Container = styled.section`

`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
    background-color: #f4f4f4;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 30px;
    }

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const ContactInfo = styled.div`
    flex: 1;
    padding: 20px;
    h1 {
        font-size: 36px;
        margin-bottom: 20px;
    }
`;

export const ContactDetails = styled.div`
    p {
        font-size: 18px;
        margin-bottom: 10px;
        color: #333;
    }
`;

export const ContactForm = styled.div`
    flex: 1;
    background: #fff;
    padding: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    h2 {
        font-size: 28px;
        margin-bottom: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`;

export const InputField = styled.input`
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    &:focus {
        outline: none;
        border-color: #333;
    }
`;

export const TextArea = styled.textarea`
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    &:focus {
        outline: none;
        border-color: #333;
    }
`;

export const SubmitButton = styled.button`
    padding: 15px 30px;
    font-size: 18px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #555;
    }
`;
