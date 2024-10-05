import styled from "styled-components";

export const PhilosophyContainer = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  padding-left: 20px;
  margin-bottom: 25px;
  border-left: 5px solid #1ea2b1;
`;


export const Description = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const BibleQuote = styled.blockquote`
  font-size: 18px;
  font-style: italic;
  color: #2c3e50;
  border-left: 4px solid #3498db;
  padding-left: 15px;
  margin: 20px 0;
`;

export const QuoteSource = styled.cite`
  display: block;
  font-size: 14px;
  color: #555;
  text-align: right;
  margin-top: 10px;
`;
