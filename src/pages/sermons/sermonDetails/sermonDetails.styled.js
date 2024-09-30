import styled from 'styled-components';

// Styled Components
export const SermonPageWrapper = styled.div`
  font-family: Arial, sans-serif;
`;

export const SermonHero = styled.section`
  position: relative;
  text-align: center;
  color: white;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 480px) {
      width: 100%;
  }
`;

export const SermonTitle = styled.h1`
  font-size: 3rem;
`;

export const SermonVerse = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
`;

export const SermonDate = styled.p`
  font-size: 1.2rem;
  margin-top: 5px;
`;

export const WatchSermonButton = styled.button`
  padding: 10px 20px;
  background-color: #FFD700;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 20px;
`;

export const SermonMediaSection = styled.section`
  padding: 20px;
  text-align: center;

    @media screen and (max-width: 480px) {
      height: 500px;
    }
`;

export const MediaPlayer = styled.video`
  width: 80%;
  height: 650px;
  margin: 10px 0;

    @media screen and (max-width: 480px) {
      width: 95%;
      height: 100%;
      object-fit: cover;
    }
`;


export const DownloadTranscriptButton = styled.button`
  padding: 10px 20px;
  background-color: #008CBA;
  color: white;
  border: none;
  cursor: pointer;
`;

export const SermonDetailsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  background-color: #F5F5F5;
`;

export const PastorInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const PastorImage = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const PastorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PastorName = styled.h3`
  font-size: 1.5rem;
`;

export const PastorTitle = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const SermonSummary = styled.div`
  max-width: 600px;
  font-size: 1.2rem;
`;

export const SermonHighlightsSection = styled.section`
  padding: 30px;
  background-color: #FFF;
  text-align: center;
`;

export const HighlightTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const BibleVerseCard = styled.div`
  margin: 20px 0;
  font-size: 1.2rem;
`;

export const SermonPoints = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SermonPoint = styled.li`
  margin: 10px 0;
  font-size: 1.2rem;
`;

export const RelatedSermonsSection = styled.section`
  padding: 30px;
  background-color: #F8F8F8;
  text-align: center;
`;

export const Wrapper = styled.section`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

    @media screen and (max-width: 480px) {
      gap: 10px;
    }
`;

export const RelatedSermonCard = styled.div`
  width: 270px;
  height: 350px;
  display: inline-block;
  margin: 20px;
  text-align: left;

  @media screen and (max-width: 480px) {
    height: 300px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

export const RelatedSermonInfo = styled.div`
  padding: 10px 0;
`;

export const RelatedSermonTitle = styled.h3`
  font-size: 1.5rem;
`;

export const RelatedSermonDate = styled.p`
  font-size: 1rem;
  color: #888;
`;

export const CommentsSection = styled.section`
  padding: 30px;
  background-color: #FFF;
`;

export const CommentsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const CommentCard = styled.div`
  padding: 20px;
  border-bottom: 1px solid #DDD;
`;

export const CommentAuthor = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const CommentText = styled.p`
  font-size: 1.1rem;
`;

export const SermonFooter = styled.footer`
  background-color: #222;
  color: white;
  text-align: center;
  padding: 10px;
`;

export const SocialLink = styled.a`
  color: #FFD700;
  margin-left: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;