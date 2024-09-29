import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EventDetailsContainer = styled.div`
  padding: 20px;
  text-align: center;
  max-width: 800px; /* Optional: Limit max width for better readability */
  margin: 0 auto; /* Center the container */
`;

export const EventHero = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

export const EventContent = styled.div`
  padding: 20px;
`;

export const EventTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333; /* Improved text color for better readability */
`;

export const EventDate = styled.p`
  color: #888;
  margin-bottom: 20px;
`;

export const EventLocation = styled.p`
  color: #555;
  margin-bottom: 20px;
`;

export const EventDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const BackButton = styled(Link)`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SpeakerImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const GuestImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const EventSpeakers = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    gap: 15px;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const EventGuests = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    gap: 15px;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const VideoContainer = styled.div`
  width: 700px;
  height: 500px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  video {
    width: 100%;
    height:100%; 
    max-width: 600px; 
    object-fit: cover;
    border-radius: 8px;
    margin: auto;
    margin-top: 10px; 
  }
`;
