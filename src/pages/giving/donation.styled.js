import styled from "styled-components";

export const Container = styled.div`

`

export const GiveContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background-color: #f1f5f8;
  min-height: 100vh;

    @media screen and (max-width: 480px) {
      padding: 15px;
    }
`;

export const GivingHeader = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

export const GivingInfo = styled.p`
  font-size: 1.3rem;
  text-align: center;
  max-width: 800px;
  margin-bottom: 2rem;
  color: #7f8c8d;

    @media screen and (max-width: 480px) {
      text-align: left;
    }
`;

export const MobileMoneyOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  max-width: 1000px;
  gap: 1.5rem;

    @media screen and (max-width: 480px) {
      gap: 1.1rem;
    }
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 30%;

  img {
    width: 120px;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: #34495e;
  }

  p {
    font-size: 1.1rem;
    color: #7f8c8d;
  }

  p:last-of-type {
    font-weight: bold;
    color: #2c3e50;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const FooterNote = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #34495e;
  margin-top: 2rem;
  max-width: 800px;
  line-height: 1.6;
`;
