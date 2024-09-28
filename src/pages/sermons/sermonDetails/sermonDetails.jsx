import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  BibleVerseCard,
  HeroContent,
  HeroImage,
  HighlightTitle,
  ImageContainer,
  MediaPlayer,
  Overlay,
  PastorDetails,
  PastorImage,
  PastorInfo,
  PastorName,
  PastorTitle,
  RelatedSermonCard,
  RelatedSermonDate,
  RelatedSermonInfo,
  RelatedSermonsSection,
  RelatedSermonTitle,
  SermonDate,
  SermonDetailsSection,
  SermonFooter,
  SermonHero,
  SermonHighlightsSection,
  SermonMediaSection,
  SermonPageWrapper,
  SermonPoint,
  SermonPoints,
  SermonSummary,
  SermonTitle,
  SermonVerse,
  SocialLink,
  Thumbnail,
  WatchSermonButton,
  Wrapper
} from './sermonDetails.styled';
import { SERMONSDATA } from '../../../services/SERMONSDATA';
import { useNavigate } from 'react-router-dom';

const SermonDetailsPage = () => {
  const { id } = useParams(); // Get the sermon ID from the URL
  const { state } = useLocation(); // Get the state (sermon) if passed from previous page
  const navigate = useNavigate();

  // State to store the current sermon details
  const [sermonData, setSermonData] = useState(state?.sermon || null);

  // Effect to update the sermon data whenever the ID in the URL changes
  useEffect(() => {
    // Find the sermon in SERMONSDATA based on the ID from the URL
    const foundSermon = SERMONSDATA.find(s => s.id === parseInt(id));

    // If sermon is found, update the state
    if (foundSermon) {
      setSermonData(foundSermon);
    }
  }, [id]); // This effect will run whenever the `id` changes

  // Fallback if no sermon data is found
  if (!sermonData) {
    return <div>No sermon data available</div>;
  }

  // Filter related sermons (excluding the current one)
  const relatedSermons = SERMONSDATA.filter(s => s.id !== sermonData.id);

  return (
    <SermonPageWrapper>
      {/* 1. Header Section (Hero Image) */}
      <SermonHero>
        <HeroImage src={sermonData.thumbnail} alt={sermonData.sermonTitle} />
        <Overlay />
        <HeroContent>
          <SermonTitle>{sermonData.sermonTitle}</SermonTitle>
          <SermonVerse>Philippians 4:13</SermonVerse>
          <SermonDate>Delivered on {sermonData.date}</SermonDate>
          <WatchSermonButton onClick={() => navigate('/')}>Back Home</WatchSermonButton>
        </HeroContent>
      </SermonHero>

      {/* 2. Sermon Media Section */}
      <SermonMediaSection>
        <MediaPlayer controls>
          <source src={sermonData.video} type="video/mp4" />
          Your browser does not support the video tag.
        </MediaPlayer>
      </SermonMediaSection>

      {/* 3. Sermon Details Section */}
      <SermonDetailsSection>
        <PastorInfo>
          <PastorImage src={sermonData.preacher.image} alt={sermonData.preacher.name} />
          <PastorDetails>
            <PastorName>{sermonData.preacher.name}</PastorName>
            <PastorTitle>{sermonData.preacher.title}</PastorTitle>
          </PastorDetails>
        </PastorInfo>
        <SermonSummary>
          {sermonData.summary || 'This sermon explores key spiritual insights and provides biblical guidance.'}
        </SermonSummary>
      </SermonDetailsSection>

      {/* 4. Sermon Highlights Section */}
      <SermonHighlightsSection>
        <HighlightTitle>Key Bible Verses</HighlightTitle>
        <BibleVerseCard>
          <p>Philippians 4:13</p>
          <p>"I can do all things through Christ who strengthens me."</p>
        </BibleVerseCard>

        <HighlightTitle>Main Points</HighlightTitle>
        <SermonPoints>
          <SermonPoint>Faith in adversity leads to spiritual growth.</SermonPoint>
          <SermonPoint>God's strength is made perfect in our weakness.</SermonPoint>
          <SermonPoint>Perseverance is key to overcoming trials.</SermonPoint>
        </SermonPoints>
      </SermonHighlightsSection>

      {/* 5. Related Sermons Section */}
      <RelatedSermonsSection>
        <HighlightTitle>Related Sermons</HighlightTitle>
        <Wrapper>
          {relatedSermons.map((related) => (
            <RelatedSermonCard key={related.id}>
              <Link 
                to={`/eagles-ccc/sermons-details/${related.id}`} 
                state={{ sermon: related }} // Pass the related sermon data
                style={{ color: '#000' }}
              >
                <ImageContainer>
                  <Thumbnail src={related.thumbnail} alt={related.sermonTitle} />
                </ImageContainer>
                <RelatedSermonInfo>
                  <RelatedSermonTitle>{related.sermonTitle}</RelatedSermonTitle>
                  <RelatedSermonDate>Delivered on {related.date}</RelatedSermonDate>
                </RelatedSermonInfo>
              </Link>
            </RelatedSermonCard>
          ))}
        </Wrapper>
      </RelatedSermonsSection>

      {/* 6. Footer */}
      <SermonFooter>
        <p>
          © 2024 Your Church Name | Follow Us:
          <SocialLink href="#">Facebook</SocialLink>,
          <SocialLink href="#">Instagram</SocialLink>,
          <SocialLink href="#">Twitter</SocialLink>
        </p>
      </SermonFooter>
    </SermonPageWrapper>
  );
};

export default SermonDetailsPage;
