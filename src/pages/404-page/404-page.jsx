import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>
        <h1>404</h1>
        <p>Page Not Found</p>
        <HomeButton onClick={() => window.location.href = "/"}>Go to Home</HomeButton>
      </ErrorMessage>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const ErrorMessage = styled.div`
  text-align: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HomeButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default ErrorPage;
