import styled from "styled-components";


export const LogoContainer = styled.div`
  width: 180px;
  height: 75px;
  display: flex;
  gap: 5px;
  justify-content: space-around;
  align-items: last baseline;
    
  @media screen and (max-width: 430px) {
    width: 150px;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 80px;

  @media screen and (max-width: 430px) {
    height: 60px;
    width: 50px;
  }
`;


export const LogoText = styled.h2`
  font-size: 17px;
  color: ${({isHeaderFix}) => isHeaderFix ? "#000" : "#fff"};
  font-family: "Lobster";
  font-weight: 500;

  span{
    background-position: center;
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media screen and (max-width: 430px) {
    line-height: 18px;
  }
`;