import styled from "styled-components";


export const Footer = styled.footer`
  background-color: #1b1919;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const FooterContent = styled.div`
  margin: 0 0 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 25px;
`;

export const FooterText = styled.div`
  max-width: 350px;
  margin-right: 20px;
  color: #939287;
`;

export const SocialIcons = styled.div`
  display: flex;
  margin: 50px 0 10px 0;
  gap: 20px;
`;

export const SocialIconLink = styled.a`
  color: goldenrod;
  font-size: 28px;
  transition: color 0.3s ease;

  &:hover {
    color: #0f6c75;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: first baseline;
`;

export const FooterColumn = styled.div`
  flex-shrink: none;
  width: 300px;
  /* border: 1px solid red; */

  @media screen and (max-width: 430px) {
    flex-flow: wrap;
    max-width: 160px;

    &.service{
      min-width: 250px;
    }
  }
`;

export const FooterColumnHeading = styled.h3`
  margin: 20px 0 30px 0;
  color: #e6e6e6;

  &.churchName{
  font-family: "Lobster";
  }

  & > span{
    color: goldenrod;
  }
`;

export const FooterColumnList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const FooterColumnItem = styled.li`
  margin: 5px 0;
`;

export const FooterColumnLink = styled.a`
  text-decoration: none;
  color: #939287;

  &:hover{
    color: goldenrod;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding: 10px 0;
  color: #8f8f8e;
`;