import Header from "../../components/header/header";
import {
  ActionsContainer, BepartOfUsBtn, Body, ChurchGroup, ChurchGroupImage,
  ChurchGroupImageContainer, ChurchGroupName, ChurchGroups, ChurchGroupsContainer,
  ChurchGroupsHeaderText, ChurchInfoSection, ChurchInfoSectionAbout,
  ChurchInfoSectionAboutHeaderText, ChurchInfoSectionAboutImage,
  ChurchInfoSectionAboutImageContainer, ChurchInfoSectionAboutText,
  ChurchInfoSectionEvents, ChurchInfoSectionEventsEvent,
  ChurchInfoSectionEventsEventsContainer, ChurchInfoSectionEventsHeader,
  ChurchInfoSectionEventsTime, ChurchInfoSectionEventsType,
  ChurchInfoSectionLocation, ChurchInfoSectionLocationHeader,
  ChurchInfoSectionLocationImage, ChurchInfoSectionLocationImageContainer,
  ChurchInfoSectionLocationText, ChurchLeader, ChurchLeaderHeaderActions, ChurchLeaderHeaderContainer, ChurchLeaderImage, ChurchLeaderImageContainer, ChurchLeaderImageContainerBg, ChurchLeaders, ChurchLeadersContainer, ChurchLeadersHeaderText, ChurchLeaderTextContainer, ChurchLeaderTextName, ChurchLeaderTextPosition, ChurchName, ChurchNameContainer,
  HomescreenContainer, LatestSermon, LatestSermonContainer,
  LatestSermonHeaderText, LatestSermons, LatestSermonTextBibleQuote,
  LatestSermonTextContainer, LatestSermonTextDate, LatestSermonTextPreacher,
  LatestSermonVideo, LatestSermonVideoThumpnail,
  LatestSermonVideoThumpnailContainer, Line, ReadMoreBtn, SermonPageLink, ShortMessage,
  ShowcaseContentContainer, ShowcaseHeaderText, ShowcaseSubText,
  Wrapper
} from "./homescreen.styled";
import image1 from "../../assets/interior images/church_interior.jpg";
import image2 from "../../assets/interior images/post_2.jpg";
import image3 from "../../assets/interior images/church_interior_image1.jpg";
import image4 from "../../assets/interior images/HowtoStudyTheBible.jpg";
import image5 from "../../assets/interior images/stressed-blessed-find-time-faith-student.jpg";
import image6 from "../../assets/members/ll";
import clock from '../../assets/others/St-Georges-Tower-7017-2.jpg';
import aboutImage from "../../assets/members/abb.jpg";
import HomeFellowship from "../../assets/home fellowship/istockphoto-174792161-612x612.jpg";
import WomenFellowship from "../../assets/women fellowship/Downtown-Ofaakor-Area-Womens-Ministry-Hosts-‘The-Complete-Woman-Series-web-2000x1125.jpg";
import Men from "../../assets/comm/men.jpg";
import Youth from "../../assets/members/angle";
import BibleStudies from "../../assets/comm/bibleStudeis.jpg";
import instrument from "../../assets/members/instrumental";
import MediaTeam from "../../assets/members/mediaTeam";
import Prayer from "../../assets/comm/prayer warriors.jpg";
import Singers from "../../assets/members/singers";
import SundaySchool from "../../assets/members/children.jpg";
import Thump1 from '../../assets/comm/thump1.jpg';
import Thump2 from '../../assets/comm/thump2.jpg';
import Thump3 from '../../assets/comm/thump3.webp';
import Thump4 from '../../assets/comm/thump4.webp';
import PreachingVideo from "../../assets/comm/video.mp4";
import TBJoshua from "../../assets/members/TB_Joshua.png"
import ChrisOyakhilime from "../../assets/members/Chris_Oyakhilome.png";
import DavidOyadepo from "../../assets/members/David_Oyedepo.png";
import Adebayo from "../../assets/members/Enoch_Adeboye.png";
import Otabil from "../../assets/members/Mensah_Otabil.png";
import Dag from "../../assets/members/Dag_Heward-Mills.png";
import Cindy from "../../assets/members/Cindy_Trimm.png";
import Joyce from "../../assets/members/Joyce_Meyer.png";
import { useEffect, useRef, useState } from "react";
import TextLink from "../../components/UIComponents/link/link";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaVolumeUp } from "react-icons/fa";
import AppFooter from "../../components/footer/footer";

const Homescreen = () => {

  // states management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomingOut, setIsZoomingOut] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

// Refs
  const scrollCardRef = useRef()

  const welcomeMessages = [
    {
      id: 1,
      quote: `WELCOME TO CAPE COAST CCC`,
      description: `Experience the warmth of our community and the power of faith as we gather to worship, grow, and serve together.`,
      imagesUrl: `${image1}`,
    },
    {
      id: 2,
      quote: `A Place of Peace and Joy`,
      description: `Join us in creating an atmosphere filled with love, joy, and the peace that surpasses all understanding.`,
      imagesUrl: `${image2}`,
    },
    {
      id: 3,
      quote: `Building Faith, Strengthening Community`,
      description: `At Cape Coast CCC, we are committed to nurturing your faith and building a strong, connected community that stands together.`,
      imagesUrl: `${image3}`,
    },
    {
      id: 4,
      quote: `Grow, Serve, Worship`,
      description: `We invite you to grow in your faith, serve with compassion, and worship with a heart full of gratitude.`,
      imagesUrl: `${image4}`,
    },
    {
      id: 5,
      quote: `You Belong Here`,
      description: `No matter where you are in your spiritual journey, you have a place here with us. Together, we seek purpose and find strength in God.`,
      imagesUrl: `${image5}`,
    },
    {
      id: 6,
      quote: `Welcome Home`,
      description: `Wherever you are on your spiritual path, you are part of our family. Together, we grow in faith and find hope in God.`,
      imagesUrl: `${image6}`,
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      time: "Wed 11 Sep 2024 5:30pm – 9:00pm",
      type: "Student Lounge Games Night!",
    },
    {
      id: 2,
      time: "Thu 12 Sep 2024 4:00pm – 6:00pm",
      type: "Book Club - visitors welcome",
    },
    {
      id: 3,
      time: "Fri 13 Sep 2024 5:30pm – 7:35pm",
      type: "Christianity Explored Course",
    },
    {
      id: 4,
      time: "Tue 17 Sep 2024 9:30am – 10:30am",
      type: "Women's Prayer Breakfast",
    }
  ];

  const churchGroups = [
    {
      id: 1,
      image: `${HomeFellowship}`, 
      group: 'Home Fellowship Group',
    },
    {
      id: 2,
      image: `${WomenFellowship}`,
      group: 'Women Fellowship Group',
    },
    {
      id: 3,
      image: `${Men}`,
      group: 'men Fellowship Group',
    },
    {
      id: 4,
      image: `${Youth}`,
      group: 'Youth and students',
    },
    {
      id: 5,
      image: `${BibleStudies}`,
      group: 'Bible Studies',
    },
    {
      id: 6,
      image: `${instrument}`,
      group: 'The Instrumental Group',
    },
    {
      id: 7,
      image: `${MediaTeam}`,
      group: 'The Media Group',
    },
    {
      id: 8,
      image: `${Prayer}`,
      group: 'Prayer Warriors',
    },
    {
      id: 9,
      image: `${Singers}`,
      group: 'Harmony Voices',
    },
    {
      id: 10,
      image: `${SundaySchool}`,
      group: 'Children Ministry',
    },
  ];

  const latestSermonData = [
    {
      id: 1,
      thumbnailSrc: `${Thump1}`,
      videoUrl: `${PreachingVideo}`,
      date: "5 September",
      bibleVerse: "Philippians 4:13",
      preacher: "John Doe"
    },
    {
      id: 2,
      thumbnailSrc: `${Thump2}`,
      videoUrl: `${PreachingVideo}`,
      date: "22 August",
      bibleVerse: "Jeremiah 29:11",
      preacher: "Jane Smith"
    },
    {
      id: 3,
      thumbnailSrc: `${Thump3}`,
      videoUrl: `${PreachingVideo}`,
      date: "29 August",
      bibleVerse: "Psalm 23:1",
      preacher: "Michael Johnson"
    },
    {
      id: 4,
      thumbnailSrc: `${Thump4}`,
      videoUrl: `${PreachingVideo}`,
      date: "6 August",
      bibleVerse: "Isaiah 41:10",
      preacher: "Emily Davis"
    }
  ];

  // Church leaders
const churchLeaders = [
  {
    id: 1,
    picture: `${TBJoshua}`,
    name: 'T.B. Joshua',
    position: 'Head Pastor'
  },
  {
    id: 2,
    picture: `${ChrisOyakhilime}`,
    name: 'C. Oyakhilome',
    position: 'Senior Pastor'
  },
  {
    id: 3,
    picture: `${DavidOyadepo}`,
    name: 'David Oyedepo',
    position: 'Founder & Bishop'
  },
  {
    id: 4,
    picture: `${Adebayo}`,
    name: 'Enoch Adeboye',
    position: 'General Overseer'
  },
  {
    id: 5,
    picture: `${Otabil}`,
    name: 'Mensah Otabil',
    position: 'Pastor & Theologian'
  },
  {
    id: 6,
    picture: `${Dag}`,
    name: 'D. Heward-Mills',
    position: 'Evangelist & Pastor'
  },
  {
    id: 7,
    picture: `${Cindy}`,
    name: 'Cindy Trimm',
    position: 'Minister & Author'
  },
  {
    id: 8,
    picture: `${Joyce}`,
    name: 'Joyce Meyer',
    position: 'Preacher & Author'
  }
];




  useEffect(() => {
    const interval = setInterval(() => {
      setIsZoomingOut(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % welcomeMessages.length);
        setIsZoomingOut(false);
      }, 1000);
    }, 7000); 

    return () => clearInterval(interval);
  }, [welcomeMessages.length]);



  // Church leaaders slider
const handleSlideCards = (direction) => {
  if (scrollCardRef.current) {
    const container = scrollCardRef.current;
    const scrollAmount = 220; 

    if (direction === "left") {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth", 
      });
    } else if (direction === "right") {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth", 
      });
    }
  }
};


  const showcaseContent = () => {
    return (
      <ShowcaseContentContainer>
        <ChurchNameContainer>
          <Line />
          <ChurchName>Calvary Charismatic Centre</ChurchName>
          <Line />
        </ChurchNameContainer>
        <ShowcaseHeaderText>{welcomeMessages[currentIndex].quote}</ShowcaseHeaderText>
        <ShowcaseSubText>{welcomeMessages[currentIndex].description}</ShowcaseSubText>
        <ActionsContainer>
          <BepartOfUsBtn>Be Part of Us</BepartOfUsBtn>
          <ReadMoreBtn>Read More</ReadMoreBtn>
        </ActionsContainer>
      </ShowcaseContentContainer>
    );
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <HomescreenContainer>
      {/* Header component */}
      <Header imageChildren={welcomeMessages[currentIndex].imagesUrl} isZoomingOut={isZoomingOut} textChildren={showcaseContent()} />

      {/* Body */}
      <Body>
        <ShortMessage>
          We are a community of faithful believers, united by the love of Christ, where friendships are forged, hearts are healed, and God's presence is experienced in powerful ways.
        </ShortMessage>
        <ChurchInfoSection>

          {/* About */}
          <ChurchInfoSectionAbout>
            <ChurchInfoSectionAboutHeaderText>About the church</ChurchInfoSectionAboutHeaderText>
            <ChurchInfoSectionAboutImageContainer>
              <ChurchInfoSectionAboutImage src={aboutImage} />
            </ChurchInfoSectionAboutImageContainer>
            <ChurchInfoSectionAboutText>
              At Cape Coast CCC, we believe in the power of community and the strength of faith. Our mission is to spread love, offer support, and guide our members in their spiritual journey. Join us for a transformative experience as we come together in worship, service, and fellowship.
            </ChurchInfoSectionAboutText>
            <TextLink text= "More about us"/>
          </ChurchInfoSectionAbout>

          {/* Events */}
          <ChurchInfoSectionEvents>
            <ChurchInfoSectionEventsHeader>Upcoming Events</ChurchInfoSectionEventsHeader>
            <ChurchInfoSectionEventsEventsContainer>
              {upcomingEvents.map((event) => (
                <ChurchInfoSectionEventsEvent key={event.id}>
                  <ChurchInfoSectionEventsTime>{event.time}</ChurchInfoSectionEventsTime>
                  <ChurchInfoSectionEventsType>{event.type}</ChurchInfoSectionEventsType>
                </ChurchInfoSectionEventsEvent>
              ))}
            </ChurchInfoSectionEventsEventsContainer>
            <TextLink text= "See the calendar"/>
          </ChurchInfoSectionEvents>

          {/* Location */}
          <ChurchInfoSectionLocation>
            <ChurchInfoSectionLocationHeader>Where we meet</ChurchInfoSectionLocationHeader>
            <ChurchInfoSectionLocationText>We meet every Sunday morning at 10:30am in the Church Hall. The service finishes at 12 noon with tea and coffee served afterwards. Find out more about our Sunday services on our <span>visitor information page.</span></ChurchInfoSectionLocationText>
            <ChurchInfoSectionLocationImageContainer>
              <ChurchInfoSectionLocationImage src={clock} />
            </ChurchInfoSectionLocationImageContainer>
            <ChurchInfoSectionLocationText>
              123 Faith Street, Cape Coast, Ghana
            </ChurchInfoSectionLocationText>
            <TextLink text= "Find us on the map"/>
          </ChurchInfoSectionLocation>
        </ChurchInfoSection>

        {/* Church Groups */}
        <ChurchGroupsContainer>
          <ChurchGroupsHeaderText>Our Divisions</ChurchGroupsHeaderText>
          <ChurchGroups>
            {churchGroups.map((group) => (
              <ChurchGroup key={group.id}>
                <ChurchGroupImageContainer>
                  <ChurchGroupImage src={group.image} />
                </ChurchGroupImageContainer>
                <ChurchGroupName>{group.group}</ChurchGroupName>
              </ChurchGroup>
            ))}
          </ChurchGroups>
        </ChurchGroupsContainer>

        {/* Latest Sermons */}
        <LatestSermonContainer>
          <LatestSermonHeaderText>Latest Sermons</LatestSermonHeaderText>
          <LatestSermons>
            {latestSermonData.map((sermon, index) => (
              <LatestSermon
                key={sermon.id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <LatestSermonVideoThumpnailContainer>
                  {hoveredIndex === index ? (
                    <LatestSermonVideo
                      src={sermon.videoUrl}
                      preload="auto"
                      autoPlay
                      muted
                    />
                  ) : (
                    <LatestSermonVideoThumpnail src={sermon.thumbnailSrc} alt="Sermon Thumbnail" />
                  )}
                </LatestSermonVideoThumpnailContainer>
                <LatestSermonTextContainer>
                  <LatestSermonTextDate>{sermon.date}</LatestSermonTextDate>
                  <LatestSermonTextBibleQuote>{sermon.bibleVerse}</LatestSermonTextBibleQuote>
                  <LatestSermonTextPreacher>{sermon.preacher}</LatestSermonTextPreacher>
                </LatestSermonTextContainer>
                <FaVolumeUp className="LatestSermonListenIcon" />
              </LatestSermon>
            ))}
          </LatestSermons>
          <SermonPageLink><TextLink text="Full Media Library"/></SermonPageLink>
        </LatestSermonContainer>

        {/* church leaders */}
        <ChurchLeadersContainer>
          <ChurchLeaderHeaderContainer>
            <ChurchLeadersHeaderText>Church Leaders</ChurchLeadersHeaderText>
          </ChurchLeaderHeaderContainer>
            <ChurchLeaderHeaderActions>
              <FaAngleLeft className="arrow left" onClick={() => handleSlideCards('left')}/>
              <FaAngleRight className="arrow right" onClick={() => handleSlideCards('right')}/>
            </ChurchLeaderHeaderActions>
          <Wrapper ref={scrollCardRef}>
            <ChurchLeaders>
              {churchLeaders.map((leader) => (
                <ChurchLeader key={leader.id}>
                  <ChurchLeaderImageContainer>
                    <ChurchLeaderImage src= {leader.picture}/>
                    <ChurchLeaderImageContainerBg/>
                  </ChurchLeaderImageContainer>
                  <ChurchLeaderTextContainer>
                    <ChurchLeaderTextName>{leader.name}</ChurchLeaderTextName>
                    <ChurchLeaderTextPosition>{leader.position}</ChurchLeaderTextPosition>
                  </ChurchLeaderTextContainer>
                </ChurchLeader>
              ))}
            </ChurchLeaders>
          </Wrapper>
        </ChurchLeadersContainer>
      </Body>
      <AppFooter/>
    </HomescreenContainer>
  );
};

export default Homescreen;
