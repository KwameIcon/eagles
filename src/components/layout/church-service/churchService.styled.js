import styled from "styled-components";

export const ChurchServiceContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 25px;

  &:first-child{
    border-left: 5px solid #1ea2b1;
    padding-left: 20px;
  }
`;

export const Section = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
  color: #555;
`;

export const ServiceList = styled.ul`
  margin: 10px 0 20px 20px;
  list-style-type: disc;
`;

export const ServiceItem = styled.li`
  margin: 5px 0;
  font-size: 16px;
  color: #444;
`;
