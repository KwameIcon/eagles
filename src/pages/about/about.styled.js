import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const AboutSection = styled.section`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  color: #333;
`;

export const SectionContent = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TeamMember = styled.div`
  flex: 1 1 200px; 
  text-align: center;
`;

export const MemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const MemberName = styled.h3`
  font-size: 1.2rem;
  margin: 5px 0;
`;

export const MemberRole = styled.p`
  font-size: 1rem;
  color: #888;
`;
